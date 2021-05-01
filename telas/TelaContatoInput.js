import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { useDispatch } from 'react-redux';
import ContatoInput from '../components/ContatoInput';
import TiraFoto from '../components/TiraFoto';
import * as contatoActions from '../store/ContatoActions';

const TelaContatoInput = (props) => {
    const dispatch = useDispatch();
    const [imagemURI, setImagemURI] = useState();

    const adicionarContato = (nome, telefone) => {
        dispatch(contatoActions.addContato(nome, telefone, imagemURI));
        props.navigation.goBack();
    }

    const fotoTirada = imagemURI => {
        setImagemURI(imagemURI);
    }

    return(
        <ScrollView>
            <View style={styles.container}>
                <ContatoInput onAdicionarContato={adicionarContato} />
                <TiraFoto onFotoTirada={fotoTirada} />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 50,
        flex: 1
    },
    contatosFlatList: {
        width: '80%',
        alignSelf: 'center'
    }
});


export default TelaContatoInput;
