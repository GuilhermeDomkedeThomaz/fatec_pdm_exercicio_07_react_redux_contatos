import React, { useState } from 'react';
import { View, Button, Text, ActivityIndicator, Alert, StyleSheet } from 'react-native';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
// Um ActivityIndicator serve para mostrar um símbolo "carregando" na tela para o usuário saber que algo está por terminar

const CapturaLocalizacao = (props) => {
    const [estaCapturando, setEstaCapturando] = useState(false);
    const [localizacaoSelecionada, setLocalizacaoSelecionada] = useState();

    const verificarPermissoes = async () => {
        const resultado = await Permissions.askAsync(Permissions.LOCATION);
        if (resultado.status !== "granted") {
            Alert.alert(
                'Sem permissão para uso do mecanismo de localização',
                "É preciso liberar acesso ao mecanismo de localização",
                [{ text: "Ok" }]
            )
            return false;
        }
        return true;
    }
    
    const capturarLocalizacao = async () => {
        const temPermissao = await verificarPermissoes();
        if (temPermissao) {
            setEstaCapturando(true);
            try {
                const localizacao = await Location.getCurrentPositionAsync({ timeout: 8000 });
                //console.log(localizacao);
                setLocalizacaoSelecionada({
                    lat: localizacao.coords.latitude,
                    lng: localizacao.coords.longitude
                });
                props.onLocalizacaoCapturada(localizacaoSelecionada.lat, localizacaoSelecionada.lng);
            } catch (err) {
                Alert.alert(
                    "Impossível obter localização",
                    "Tente novamente mais tarde ou escolha uma no mapa",
                    [{ text: "Ok" }]
                );
            }
            setEstaCapturando(false);
        }
    };
    
    return (
        <View style={estilos.capturaLocalizacao}>
            <View
                style={estilos.previewDoMapa}
                localizacao={localizacaoSelecionada}>
                {
                    estaCapturando ?
                        <ActivityIndicator
                            size="large"
                            color={'orange'}
                        /> :
                        <Text>Nenhuma localização disponível.</Text>
                }
            </View>
            <Button
                title="Obter localização"
                color={'orange'}
                onPress={capturarLocalizacao}
            />
        </View>
    );
}

const estilos = StyleSheet.create({
    capturaLocalizacao: {
        marginBottom: 15
    },
    previewDoMapa: {
        marginBottom: 10,
        width: '100%',
        height: 150,
        borderColor: '#DDD',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CapturaLocalizacao;
