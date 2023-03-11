import { hashSync } from "bcrypt"

import Page from "../src/DAO/Page.js"
import Product from "../src/DAO/Product.js"
import User from "../src/DAO/User.js"
import Register from "../src/DAO/Register.js"

const models = [
    Page, Product, User, Register
]

// seed: Popula linhas de tabelas. Útil antes de executar o seu projeto.
const seed = async () => {
    models.forEach(model => model.configurar())

    const page = new Page()
    page.title = 'Sobre'
    page.text = 'Lorem ipsum dolor sit amet.'
    const pages = [page]

    const products = []
    for (let i = 1; i <= 10; i++) {
        const prod = new Product()
        prod.title = `Produto ${i}`
        prod.description = `Descrição do produto ${i}`
        products.push(prod)
    }

    const registro = []
    for (let i = 1; i <= 10; i++) {
        const user = new Register()
        user.name = `Register ${i}`
        user.email = `Email do registro ${i}`
        user.password = hashSync('123', 10)
        registro.push(user)
    }

    const admin = new User()
    admin.email = "a@gmail.com"
    admin.encryptedPassword = hashSync('123', 10)
    const users = [admin]

    await Page._seed(pages)
    await Product._seed(products)
    await User._seed(users)
    await Register._seed(registro)
}

seed()