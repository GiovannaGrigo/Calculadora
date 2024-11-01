import { TouchableHighlight, StyleSheet, Text, Dimensions } from "react-native"

const {width, height} = Dimensions.get('window')

const Botao = (props) => {

    const estilosBotao = [estilos.Botao]
    if(props.duplo) estilosBotao.push(estilos.botaoDuplo)
    if(props.triplo) estilosBotao.push(estilos.botaoTriplo)
    if(props.operacao) estilosBotao.push(estilos.botaoOperacao)

    return (
        <TouchableHighlight
            onPress={() => console.log(`clicou no botão ${props.label}`)}>
            <Text style={estilosBotao}>
                {props.label}
            </Text>
        </TouchableHighlight>
    )
}

const estilos = StyleSheet.create({
    Botao: {
        fontSize: 50,
        width: width / 4,
        height: width / 4,
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#888'
    },
    botaoDuplo: {
        width: width/4 * 2
    },
    botaoTriplo: {
        width: width/4 * 3
    },
    botaoOperacao: {
        color: 'white',
        backgroundColor: '#ff7300'
    }
})

export default Botao