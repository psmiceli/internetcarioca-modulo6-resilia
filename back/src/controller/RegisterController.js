import Register from "../DAO/Register.js"

export default class RegisterController {
    static rotas(app) {
        app.get('/register', RegisterController.listarTodos)
        app.post('/registrado', RegisterController.login)
        app.post('/register',  RegisterController.inserir)
        app.patch('/register/:id',  RegisterController.atualizar)

    }

    static async login(req, res) {
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(400).send({
                message: 'Os campos "email" e "password" são obrigatórios'
            })
        }

        const register = await Register.findByProperty('email', email)
        if (!register) {
            return res.status(404).send({
                message: 'Usuário não encontrado'
            })
        }

        const passwordsMatch = password === register.password
        if (!passwordsMatch) {
            return res.status(401).send({
                message: 'Senha incorreta'
            })
        }


        await register.save()

        res.status(200).send({
            token: register.authToken
        })
    }

    static async listarTodos(req, res) {
    const registro = await Register.findAll()
    res.status(200).send({
        message: 'Registros listados com sucesso!',
        data: registro
    })
}

    static async inserir(req, res) {
    const { name, email, password } = req.body
    if (!name || !email || !password) {
        return res.status(400).send({
            message: 'Os campos "name", "email" e password são obrigatórios'
        })
    }

    const register = new Register()
    register.name = name
    register.email = email
    register.password = password

    await register.save()

    res.status(200).send({
        message: 'Registrado com sucesso!',
        data: register
    })
}


    static async atualizar(req, res) {
    const { id } = req.params

    const register = await Register.findByProperty('id', id)
    if (!register) {
        return res.status(404).send({
            message: `O registro do id ${id} não existe`
        })
    }

    const { name, email, password } = req.body
    if (name) {
        register.name = name
    }
    if (email) {
        register.email = email
    }

    if (password) {
        register.password = password
    }

    await register.save()

    res.status(200).send({
        message: 'Registro alterado com sucesso!',
        data: register
    })
}
}