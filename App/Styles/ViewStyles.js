import { Platform, Dimensions, StyleSheet, DatePickerIOS, Text, Button, View, TextInput } from 'react-native';
import Main from '../Main'

const height = Dimensions.get('window').height


export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    headerCont: {
        width: '100%',
        height: height,
        backgroundColor: '#fff',
        // justifyContent:'center',
        // alignItems:'center',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        flexDirection: 'column',
        justifyContent: 'space-between'

    },
    stackCont: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        // justifyContent:'center',
        // alignItems:'center'
    },
    header: {
        width: '100%',
        height: '10%',
        backgroundColor: '#fff',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        padding: 20,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        borderBottomColor: "#027AFA",
        borderBottomWidth: 0.5

    },
    footer: {
        width: '100%',
        height: '10%',
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopColor: "#027AFA",
        borderTopWidth: 0.5

    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    cardDiv: {
        width: '100%',
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0.5, height: 0.5 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 5,
        marginTop:10
    },
    card: {
        width: '90%',
        height: 80,
        borderRadius: 10,
        backgroundColor: 'white',
        padding: 10,
        justifyContent:'space-between',
        flexDirection:'row',
        elevation:10
    },
    contentDiv: {
        width: '100%',
        height: '80%',
    },
    emptyDiv: {
        width: '100%',
        height: 300,
        justifyContent: 'center',
        alignItems: 'center'
    },
    stackDiv:{
        width: '100%',
        height: '10%',
        backgroundColor: '#53D769',
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        padding: 15,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    stackContentDiv:{
        width: '100%',
        height: '90%',
        // justifyContent: 'center',
        alignItems: 'center'
    },
    done_button:{
        width:70,
        height:30,
        backgroundColor:'white',
        borderColor:"#53D769",
        borderWidth:0.7,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:20
    },
    inputDiv:{
        width: '100%',
        height: 80,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        padding:10
    }

});