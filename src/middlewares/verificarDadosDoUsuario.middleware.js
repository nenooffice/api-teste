const verificarDadosDoUsuarioMiddleware = (request, response, next) => {
  const { email, nome, senha } = request.body;

  if (!email || !nome || !senha) {
    return response.status(422).send('Dados incompletos');
  }

  next();
};

export default verificarDadosDoUsuarioMiddleware;
