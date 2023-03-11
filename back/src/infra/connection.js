import sqlite3 from "sqlite3"
import { open } from "sqlite"

//abrirá uma conexão com um banco sqlite3 no arquivo raiz db.sqlite
export const getConnection = () => open({
    filename: './db.sqlite',
    driver: sqlite3.verbose().Database
})