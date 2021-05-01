import * as contatoActions from './ContatoActions';
import Contato from '../modelo/Contato';

const estadoInicial = {
    contatos: []
}

export default (estado = estadoInicial, action) => {
    switch (action.type) {
        case contatoActions.ADD_CONTATO:
            const contato = new Contato(
                action.dadosContato.id.toString(),
                action.dadosContato.nome,
                action.dadosContato.telefone,
                action.dadosContato.imagemURI
            )
            return {
                contatos: estado.contatos.concat(contato)
            }
        
        case contatoActions.LISTA_CONTATOS:
            return {
                contatos: action.contatos.map(c => new Contato(c.id.toString(), c.nome, c.telefone, c.imagemURI))
            }
        
        default:
            return estado;
    }
}
