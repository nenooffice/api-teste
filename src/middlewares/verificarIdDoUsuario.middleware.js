import Usuario from '../models/usuarios.models';
import mongoose from 'mongoose';

const verificarIdDoUsuarioMiddleware = async (request, response, next) => {
  const id = request.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return response.status(400).send({ message: 'ID inválido!' });
  }

  const usuario = await Usuario.findById(id);

  if (!usuario) {
    return response.status(404).send('Usuario não encontrado!');
  }

  next();
};

export default verificarIdDoUsuarioMiddleware;
