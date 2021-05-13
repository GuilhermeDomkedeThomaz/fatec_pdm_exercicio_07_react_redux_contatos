import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { useDispatch } from 'react-redux';
import ContatoInput from '../components/ContatoInput';
import TiraFoto from '../components/TiraFoto';
import CapturaLocalizacao from '../components/CapturaLocalizacao';
import * as contatoActions from '../store/ContatoActions';

const TelaContatoInput = (props) => {
    const dispatch = useDispatch();
    const [imagemURI, setImagemURI] = useState();
    const [lat, setLat] = useState();
    const [lng, setLng] = useState();

    const adicionarContato = (nome, telefone) => {
        dispatch(contatoActions.addContato(nome, telefone, imagemURI, lat, lng));
        props.navigation.goBack();
    }

    const fotoTirada = imagemURI => {
        setImagemURI(imagemURI);
    }

    const localizacaoCapturada = (lat, lng) => {
        setLat(lat);
        setLng(lng);
    }

    return(
        <ScrollView>
            <View style={styles.container}>
                <ContatoInput onAdicionarContato={adicionarContato} />
                <TiraFoto onFotoTirada={fotoTirada} />
                <CapturaLocalizacao onLocalizacaoCapturada={localizacaoCapturada} />
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
