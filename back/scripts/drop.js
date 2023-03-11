import Page from "../src/DAO/Page.js"
import Product from "../src/DAO/Product.js"
import User from "../src/DAO/User.js"

const models = [
    Page, Product, User
]

//drop: Deleta todas as tabelas com todos os dados dentro. Útil quando a tabela mudou "colunas" ou um "tipo de dado".
const drop = async () => {
    await Promise.all(models.map(model => model._drop()))
}

drop()