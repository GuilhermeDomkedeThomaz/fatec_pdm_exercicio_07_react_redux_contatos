export const addContato = (nome, telefone) => {
    return {
        type: ADD_CONTATO, dadosContato: {
            nome: nome,
            telefone: telefone
        }
    }
}

export const ADD_CONTATO = 'ADD_CONTATO';
