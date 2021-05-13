import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase("contatos.db");

export const init = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS tb_contato_localizacao (id INTEGER PRIMARY KEY, nome TEXT NOT NULL, telefone TEXT NOT NULL, imagemURI TEXT NOT NULL, lat REAL NOT NULL, lng REAL NOT NULL);',
                [],
                () => { resolve() },
                (_, err) => { reject(err) }
            );
        });
    });
    return promise;
}

export const inserirContato = (nome, telefone, imagemURI, lat, lng) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'INSERT INTO tb_contato_localizacao (nome, telefone, imagemURI, lat, lng) VALUES (?,?,?,?,?)',
                [nome, telefone, imagemURI, lat, lng],
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
                'SELECT * FROM tb_contato_localizacao',
                [],
                (_, resultado) => { resolve(resultado) },
                (_, err) => { reject(err) }
            );
        });
    });
    return promise;
};
