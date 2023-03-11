// CmsApi.js
const CmsApi = () => {
  const url = 'http://localhost:3000';

  //api do usuário

  const getRegister = () => {
    return fetch(`${url}/register`);
  };

  const postRegister = (user) => {
    return fetch(`${url}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': localStorage.getItem('token'),
      },
      body: JSON.stringify(user),
    });
  };

  const loginUsuario = ( email, password) => {
    return fetch(`${url}/registrado`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
  };


  //api sobre
  const getSobre = () => {
    return fetch(`${url}/paginas/1`);
  };

  const patchSobre = (sobre) => {
    return fetch(`${url}/paginas/1`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': localStorage.getItem('token'),
      },
      body: JSON.stringify(sobre),
    });
  };



  //buscar plano
  const buscarPlanoPorNome = (nome) => {
    return fetch(`${url}/produtos/${nome}`);
  };


  //api do administrador
  const login = (email, password) => {
    return fetch(`${url}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
  };

  const getFuncionalidades = () => {
    return fetch(`${url}/produtos`);
  };

  const postFuncionalidade = (funcionalidade) => {
    return fetch(`${url}/produtos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': localStorage.getItem('token'),
      },
      body: JSON.stringify(funcionalidade),
    });
  };

  const patchFuncionalidade = (funcionalidade) => {
    return fetch(`${url}/produtos/${funcionalidade.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': localStorage.getItem('token'),
      },
      body: JSON.stringify(funcionalidade),
    });
  };

  const deleteFuncionalidade = (id) => {
    return fetch(`${url}/produtos/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': localStorage.getItem('token'),
      },
    });
  };

  return {
    login,
    loginUsuario,
    getRegister,
    postRegister,
    getSobre,
    patchSobre,
    getFuncionalidades,
    buscarPlanoPorNome,
    postFuncionalidade,
    patchFuncionalidade,
    deleteFuncionalidade,
  };
};

export default CmsApi;