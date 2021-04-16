import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import TelaContato from '../telas/TelaContato';
import TelaContatoInput from '../telas/TelaContatoInput';

const LugaresNavigator = createStackNavigator(
    {
        Contatos: TelaContato,
        Adicionar: TelaContatoInput
    }
);

export default createAppContainer(LugaresNavigator);
