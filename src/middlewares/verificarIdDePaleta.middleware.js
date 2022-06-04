import Paleta from '../models/paletas.models';
import mongoose from 'mongoose';

const verificarIdDePaletaMiddleware = async (request, response, next) => {
  const id = request.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return response.status(400).send({ message: 'ID inválido!' });
  }

  const paleta = await Paleta.findById(id);

  if (!paleta) {
    return response.status(404).send('Paleta não encontrada!');
  }

  next();
};

export default verificarIdDePaletaMiddleware;
