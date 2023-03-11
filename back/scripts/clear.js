import Page from "../src/DAO/Page.js"
import Product from "../src/DAO/Product.js"
import User from "../src/DAO/User.js"

const models = [
    Page, Product, User
]

// Limpa os dados das tabelas, mas as mantém. Útil antes de executar um seed.
const clear = async () => {
    await Promise.all(models.map(model => model._clear()))
}

clear()