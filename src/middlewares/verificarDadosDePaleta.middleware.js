const verificarDadosDePaletaMiddleware = (request, response, next) => {
  const { sabor, descricao, foto, preco } = request.body;

  if (!sabor || !descricao || !foto || !preco) {
    return response.status(422).send('Dados incompletos');
  }

  next();
};

export default verificarDadosDePaletaMiddleware;
