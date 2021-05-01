import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase("contatos.db");

export const init = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS tb_contato (id INTEGER PRIMARY KEY, nome TEXT NOT NULL, telefone TEXT NOT NULL, imagemURI TEXT NOT NULL);',
                [],
                () => { resolve() },
                (_, err) => { reject(err) }
            );
        });
    });
    return promise;
}

export const inserirContato = (nome, telefone, imagemURI) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'INSERT INTO tb_contato (nome, telefone, imagemURI) VALUES (?,?,?)',
                [nome, telefone, imagemURI],
                (_, resultado) => { resolve(resultado) },
                (_, err) => { reject(err) }
            );
        });
    });
    return promise;
}

export const buscarContatos = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'SELECT * FROM tb_contato',
                [],
                (_, resultado) => { resolve(resultado) },
                (_, err) => { reject(err) }
            );
        });
    });
    return promise;
};
