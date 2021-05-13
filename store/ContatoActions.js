import * as FileSystem from 'expo-file-system';
import { inserirContato, buscarContatos } from '../helpers/db';

// export const addContato = (nome, telefone, imagemURI) => {
//     return {
//         type: ADD_CONTATO, dadosContato: {
//             nome: nome,
//             telefone: telefone,
//             imagemURI: imagemURI
//         }
//     }
// }

export const addContato = (nome, telefone, imagemURI, lat, lng) => {
    return async dispatch => {
        const nomeArquivo = imagemURI.split("/").pop();
        const novoPath = FileSystem.documentDirectory + nomeArquivo;
        try {
            await FileSystem.moveAsync({
                from: imagemURI,
                to: novoPath
            })
            const resultadoDB = await inserirContato(
                nome,
                telefone,
                novoPath
            );
            console.log(resultadoDB);
            dispatch({
                type: ADD_CONTATO,
                dadosContato: {
                    id: resultadoDB.insertId,
                    nome: nome,
                    telefone: telefone,
                    imagemURI: novoPath,
                    lat: lat,
                    lng: lng
                }
            })
        } catch (err) {
            console.log(err);
            throw err;
        }
    };
}

export const listarContatos = () => {
    return async dispatch => {
        try {
            const resultadoDB = await buscarContatos();
            dispatch({
                type: LISTA_CONTATOS,
                contatos: resultadoDB.rows._array
            });
        } catch (err) {
            console.log(err);
            throw err;
        }
    }
};

export const ADD_CONTATO = 'ADD_CONTATO';
export const LISTA_CONTATOS = 'LISTA_CONTATOS';
