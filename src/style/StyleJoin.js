import {StyleSheet} from 'react-native'
const stylesJoin = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection:'column',
    },
    header:{
        flexDirection:'row',
        justifyContent:'space-between',
        borderBottomWidth:1,
        borderBottomColor:'#d3d3d3',
        marginVertical:20,
    },
    titleHeader:{
        fontSize:20,
        fontWeight:'bold',
        marginLeft:135,
        alignSelf:'center',
        marginBottom:20,
    },
    info:{
  
    },
    infoChild:{
        marginHorizontal:20,
        marginVertical:10,
    },
    gender:{
        flexDirection:'row',
    },
    optional:{
        backgroundColor:'#d3d3d3',
        flexDirection:'column',
        marginVertical:10,
        paddingVertical:15,
    },
    titleOptional:{
        fontSize:18,
        fontWeight:'bold',
        color:'grey',
        textAlign:'center'
    },
    createAccount:{
        marginVertical:30,
        marginHorizontal:10,
        backgroundColor:'yellow',
       
    },
    textCreateAccount:{
        textAlign:'center',
        paddingVertical:15,
        fontSize:18,
        fontWeight:'bold',
    },
});
export default stylesJoin;
