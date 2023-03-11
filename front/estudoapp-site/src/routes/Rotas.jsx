import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Sobre from '../pages/Sobre'
import Contato from '../pages/Contato'
import Funcionalidades from '../pages/Funcionalidades'
import Login from '../pages/Login'
import AdminFuncionalidades from '../pages/Admin/AdminFuncionalidades'
import AdminSobre from '../pages/Admin/AdminSobre'
import Register from '../pages/Registro'
import LoginUsuario from '../pages/LoginUsuario'

function Rotas() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/register" element={<Register />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/funcionalidades" element={<Funcionalidades />} />
            <Route path="/login" element={<Login />} />
            <Route path="/LoginUsuario" element={<LoginUsuario />} />
            <Route path="/admin/funcionalidades" element={<AdminFuncionalidades />} />
            <Route path="/admin/sobre" element={<AdminSobre />} />
        </Routes>
    )
}

export default Rotas