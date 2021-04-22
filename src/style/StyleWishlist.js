import { StyleSheet} from 'react-native'

const stylesWishlist = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
    },
    header:{
        alignContent:'center',
        borderBottomWidth:1,
        borderBottomColor:'#d3d3d3',
    },
    titleHeader:{
        textAlign:'center',
        marginVertical:20,
        fontSize:22,
        fontWeight:'bold',
    },
    nodeHeader:{
        borderBottomWidth:1,
        borderBottomColor:'#d3d3d3',
    },
    textNodeHeader:{
        textAlign:'center',
        marginVertical:20,
        fontSize:16,
        fontWeight:'bold',
        color:'gray',
    },
    content:{
        flex:1,
        flexDirection:'column',
        // height:1000,
        // width:1000,
    },
    imgContent:{
        marginLeft:15,
        marginVertical:20,
        flexDirection:'row',
        borderBottomWidth:1,
        borderBottomColor:'#d3d3d3',
        
    },
    imgContentChildStyle:{
        height:200,
        width:"30%",
        marginBottom:20,
    },
    rowPrice:{
        flex:1,
        justifyContent:'space-between',
        flexDirection:'row',
    },
    rowPriceChild:{
        flexDirection:'column',
    },
    infoImg:{
        flex:1,
        flexDirection:'column',
        marginHorizontal:15,
    },
    colorSizeInfo:{
        flexDirection:'row',
    },
    colorSizeInfoChild:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
    },
    quanityInfoChild:{
        flexDirection:'row',
        marginRight:135,
        justifyContent:'space-between',
        marginBottom:20,
    },

    footer:{
        flexDirection:'row',
        borderTopWidth:1,
        borderTopColor:'gray',
    },
    iconFooter:{
        marginHorizontal:35,
        marginVertical:8,
        alignItems:'center',
    },
});
export default stylesWishlist;