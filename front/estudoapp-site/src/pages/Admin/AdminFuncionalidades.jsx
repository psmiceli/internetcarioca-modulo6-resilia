import { Container, Table, Form, Button } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import CmsApi from '../../api/CmsApi'
import Sobre from '../Admin/AdminSobre';

function AdminFuncionalidades() {
    const [funcionalidades, setFuncionalidades] = useState([])

    useEffect(() => {
        async function getFuncionalidades() {
            const response = await CmsApi().getFuncionalidades()
            const funcionalidades = await response.json()
            setFuncionalidades(funcionalidades.data)
        }

        getFuncionalidades()
    }, [])

    async function handleSubmit(event) {
        event.preventDefault()
        const form = event.currentTarget
        const title = form.title.value
        const description = form.description.value
        const valor = form.valor.value

        const response = await CmsApi().postFuncionalidade({ title, description, valor })
        if (!response.ok) {
            alert('Erro ao cadastrar funcionalidade')
            return
        }
        const funcionalidade = await response.json()
        alert('Funcionalidade cadastrada com sucesso')
        setFuncionalidades([...funcionalidades, funcionalidade.data])
        form.reset()
    }

    async function excluirFuncionalidade(id) {
        console.log(id)
        const response = await CmsApi().deleteFuncionalidade(id)
        if (!response.ok) {
            alert('Erro ao excluir funcionalidade')
            return
        }

        alert('Funcionalidade excluída com sucesso')
        const funcionalidadesAtualizadas = funcionalidades.filter((funcionalidade) => funcionalidade.id !== id)
        setFuncionalidades(funcionalidadesAtualizadas)
    }

    function habilitarEdicao(botao, id) {
        botao.innerText = 'Salvar'
        botao.classList.remove('btn-primary')
        botao.classList.add('btn-success')
        botao.onclick = (event) => { salvarEdicao(event.target, id) }

        const linha = botao.parentNode.parentNode
        const colunaTitulo = linha.children[1]
        // Cria um input para o título
        const inputTitulo = document.createElement('input')
        inputTitulo.type = 'text'
        inputTitulo.value = colunaTitulo.innerText
        colunaTitulo.innerText = ''
        colunaTitulo.appendChild(inputTitulo)
        // Cria um input para a descrição
        const colunaDescricao = linha.children[2]
        const inputDescricao = document.createElement('input')
        inputDescricao.type = 'text'
        inputDescricao.value = colunaDescricao.innerText
        colunaDescricao.innerText = ''
        colunaDescricao.appendChild(inputDescricao)
        // Cria um input para o valor
        const colunaValor = linha.children[4]
        const inputValor = document.createElement('input')
        inputValor.type = 'text'
        inputValor.value = colunaValor.innerText
        colunaValor.innerText = ''
        colunaValor.appendChild(inputValor)
    }

    async function salvarEdicao(botao, id) {
        const linha = botao.parentNode.parentNode
        const colunaTitulo = linha.children[1]
        const inputTitulo = colunaTitulo.children[0]

        const colunaDescricao = linha.children[2]
        const inputDescricao = colunaDescricao.children[0]

        const colunaValor = linha.children[4]
        const inputValor = colunaValor.children[0]

        const response = await CmsApi().patchFuncionalidade({ id: id, title: inputTitulo.value, description: inputDescricao.value, valor: inputValor.value })
        if (!response.ok) {
            alert('Erro ao editar funcionalidade')
            return
        }
        alert('Funcionalidade editada com sucesso')

        colunaTitulo.innerText = inputTitulo.value
        colunaDescricao.innerText = inputDescricao.value
        colunaValor.innerText = inputValor.value

        botao.innerText = 'Editar'
        botao.classList.remove('btn-success')
        botao.classList.add('btn-primary')
    }


    return (
        <Container className="conteudo-margin">
            <h1>Admin Planos</h1>
            <hr />
            <Sobre />
            <hr />
            <h2>Adicionar novo plano</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="title">
                    <Form.Label>Plano: </Form.Label>
                    <Form.Control type="text" placeholder="Digite o plano" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="description">
                    <Form.Label>Descrição: </Form.Label>
                    <Form.Control type="text" placeholder="Digite a descrição" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="valor">
                    <Form.Label>Valor: </Form.Label>
                    <Form.Control type="text" placeholder="Digite o valor" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Cadastrar
                </Button>
            </Form>

            

            <hr />
            <p>Lista de planos</p>
            <Table striped hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Plano</th>
                        <th>Descrição</th>
                        <th></th>
                        <th>Valor</th>
                        <th>Opções</th>
                    </tr>
                </thead>
                <tbody>
                    {funcionalidades.map((funcionalidade) => (
                        <tr key={funcionalidade.id}>
                            <td>{funcionalidade.id}</td>
                            <td><strong>{funcionalidade.title}</strong></td>
                            <td>{funcionalidade.description}</td>
                            <td><strong>R$</strong></td>
                            <td>{funcionalidade.valor}</td>
                            <td>
                                <Button variant="primary" onClick={(event) => { habilitarEdicao(event.target, funcionalidade.id) }}>Editar</Button>
                                |
                                <Button variant="danger" onClick={() => { excluirFuncionalidade(funcionalidade.id) }}>Excluir</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    )
}

export default AdminFuncionalidades