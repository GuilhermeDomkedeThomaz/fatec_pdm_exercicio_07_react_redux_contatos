import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Contato = (props) => {
    return (
        <TouchableOpacity
            // onLongPress={props.onDelete.bind(this, props.chave)}
            onPress={props.onSelect.bind(this, props.nome, props.telefone)}
            style={styles.lugarItem}>
                <Image style={styles.imagem} source={{ uri: props.imagem }} />
                <View style={styles.contatoNaLista}>
                    <Text style={styles.nome}>{props.nome}</Text>
                </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    lugarItem: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        paddingVertical: 15,
        paddingHorizontal: 30,
        flexDirection: 'row',
        alignItems: 'center'
    },
    imagem: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#ccc',
        borderColor: 'orange',
        borderWidth: 1
    },
    contatoNaLista: {
        marginLeft: 25,
        width: 250,
        justifyContent: 'center',
        alignItems: 'flex-start'
        // padding: 12,
        // backgroundColor: '#CCC',
        // borderColor: 'black',
        // borderWidth: 1,
        // marginBottom: 8,
        // borderRadius: 8,
        // alignItems: 'center'
    },
    nome: {
        color: 'black',
        fontSize: 18,
        marginBottom: 5
    }
});

export default Contato;
