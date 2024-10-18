import { TouchableHighlight, 
    StyleSheet, 
    Text } from "react-native"

const Botao = () => {
    return (
        <TouchableHighlight
            onPress={() => console.log(`clicou no botão`)}>
            <Text style={estilos.Botao}>
                3
            </Text>
        </TouchableHighlight>
    )
}

const estilos = StyleSheet.create({
    Botao: {
        fontSize: 40,
        width: 50,
        height: 50,
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#888'
    }
})

export default Botao