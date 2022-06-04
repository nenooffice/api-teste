import jwt from 'jsonwebtoken';

const verificarTokenMiddleware = (request, response, next) => {
  const token = request.headers.authorization;

  if (token === undefined) {
    return response.status(401).send('Token não enviado');
  }

  jwt.verify(token, 'chave_secreta', (error, decoded) => {
    if (error) {
      return response.status(401).send('Token inválido');
    }

    next();
  });
};

export default verificarTokenMiddleware;
