import Page from "../src/DAO/Page.js"
import Product from "../src/DAO/Product.js"
import User from "../src/DAO/User.js"
import Register from "../src/DAO/Register.js"

// migrate: Cria todas as tabelas do banco de dados, sem nenhuma linha preenchida. Útil após um drop ou da primeira vez subindo seu banco de dados.
const migrate = async () => {
    await Page._migrate([
        '"ID" INTEGER PRIMARY KEY NOT NULL',
        '"TITLE" TEXT NOT NULL',
        '"TEXT" TEXT NOT NULL'
    ])
    await Product._migrate([
        '"ID" INTEGER PRIMARY KEY NOT NULL',
        '"TITLE" TEXT NOT NULL',
        '"DESCRIPTION" TEXT NOT NULL',
        '"VALOR" INTEGER'
    ])

    await Register._migrate([
        ' "ID" INTEGER PRIMARY KEY NOT NULL',
        ' "NAME" TEXT NOT NULL',
        ' "EMAIL" TEXT NOT NULL',
        ' "PASSWORD" TEXT NOT NULL'
    ])

    await User._migrate([
        '"ID" INTEGER PRIMARY KEY NOT NULL',
        '"EMAIL" TEXT NOT NULL',
        '"ENCRYPTED_PASSWORD" TEXT NOT NULL',
        '"AUTH_TOKEN" TEXT'
    ])
}

migrate()