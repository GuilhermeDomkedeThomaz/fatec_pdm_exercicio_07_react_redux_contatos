import React, { useEffect } from 'react';
import { StyleSheet, View, FlatList, Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector, useDispatch } from 'react-redux';
import BotaoCabecalho from '../components/BotaoCabecalho';
import Contato from '../components/Contato';
import * as contatoActions from '../store/ContatoActions';

const TelaContato = (props) => {
    const contatos = useSelector(estado => estado.contatos.contatos);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(contatoActions.listarContatos())
    }, [dispatch]);

    const verContato = (nomeContato, telefoneContato, lat, lng) => {
        alert("Nome: " + nomeContato + "\nTelefone: " + telefoneContato + "\nLatitude: " + lat + "\nLongitude: " + lng);
    }

    // const removerContato = (contatoKey) => {
    //     setContatos(contatos => {
    //     console.log('Removendo contatoKey: ' + contatoKey);

    //     return contatos.filter((contato) => {
    //         return contato.key !== contatoKey;
    //     });
    //     });
    // }

    return(
        <View style={styles.container}>
            <View style={styles.contatosFlatList}>
                <FlatList
                data={contatos}
                renderItem={
                    contato => (
                    <Contato
                        nome={contato.item.nome}
                        telefone={contato.item.telefone}
                        imagem={contato.item.imagemURI}
                        lat={contato.item.lat}
                        lng={contato.item.lng}
                        onSelect={verContato}
                        // onDelete={removerContato}
                    />
                    )
                }
                />
            </View>
        </View>
    );
};

TelaContato.navigationOptions = dadosNav => {
    return {
        headerTitle: "Lista de Contatos",
        headerRight: () => {
            return (
                <HeaderButtons HeaderButtonComponent={BotaoCabecalho}>
                  <Item
                    title="Adicionar Contato"
                    iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
                    onPress={() => dadosNav.navigation.navigate("Adicionar")}
                  />
                </HeaderButtons>
            )
        }
    }
}

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

export default TelaContato;
