import * as contatoActions from './ContatoActions';
import Contato from '../modelo/Contato';

const estadoInicial = {
    contatos: []
}

export default (estado = estadoInicial, action) => {
    switch (action.type) {
        case contatoActions.ADD_CONTATO:
            const contato = new Contato(
                new Date().toString(),
                action.dadosContato.nome,
                action.dadosContato.telefone,
                action.dadosContato.imagem
            )
            return {
                contatos: estado.contatos.concat(contato)
            }
        
        default:
            return estado;
    }
}
