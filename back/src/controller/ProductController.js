import { verificarToken } from "../middleware/authorization.js"
import Product from "../DAO/Product.js"

export default class ProductController {
    static rotas(app) {
        app.post('/produtos', verificarToken, ProductController.inserir)
        app.get('/produtos/:nome', ProductController.buscarPorNome)
        app.get('/produtos', ProductController.listarTodos)
        app.patch('/produtos/:id', verificarToken, ProductController.atualizar)
        app.delete('/produtos/:id', verificarToken, ProductController.deletar)
    }

    static async inserir(req, res) {
        const { title, description, valor } = req.body
        if (!title || !description || !valor) {
            return res.status(400).send({
                message: 'Os campos "title", "description" e valor são obrigatórios'
            })
        }

        const product = new Product()
        product.title = title
        product.description = description
        product.valor = valor

        await product.save()

        res.status(200).send({
            message: 'Produto criado com sucesso!',
            data: product
        })
    }


    //ROTA PARA BUSCAR POR NOME
    static async buscarPorNome(req, res) {
        const { nome } = req.params;

        try {
            const produtos = await Product.findByProperty('title', nome);
            if (!produtos) {
                return res.status(404).json({ message: 'Plano não encontrado' });
            }

            return res.json(produtos);
        } catch (err) {
            return res.status(500).json({ message: err.message });
        }
    }




    static async listarTodos(req, res) {
        const products = await Product.findAll()
        res.status(200).send({
            message: 'Produtos listados com sucesso!',
            data: products
        })
    }

    static async atualizar(req, res) {
        const { id } = req.params

        const product = await Product.findByProperty('id', id)
        if (!product) {
            return res.status(404).send({
                message: `O produto de id ${id} não existe`
            })
        }

        const { title, description, valor } = req.body
        if (title) {
            product.title = title
        }
        if (description) {
            product.description = description
        }

        if (valor) {
            product.valor = valor
        }

        await product.save()

        res.status(200).send({
            message: 'Produto alterado com sucesso!',
            data: product
        })
    }

    static async deletar(req, res) {
        const { id } = req.params

        const product = await Product.findByProperty('id', id)
        if (!product) {
            return res.status(404).send({
                message: `O produto de id ${id} não existe`
            })
        }

        await product.delete()

        res.status(200).send({
            message: 'Produto deletado com sucesso!'
        })
    }
}