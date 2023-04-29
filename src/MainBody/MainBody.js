import { StyleSheet } from "react-native";
var styles = StyleSheet.create({
    gootsBox: {
        height: "100%",
        width: "100%",
        backgroundColor:""
        
    }
    ,
    gootBox: {
        height: 105,
        width: "97%",
        marginTop: 10,
        backgroundColor: "#F5F5F5",
        borderColor: "#C05C77",
        margin: 5,
        flexDirection: 'row',
        borderWidth: 3,
        borderRadius: 20,

    },
    gootinfoBox: {
        width: "74%",
        borderLeftWidth: 2,
        borderColor: "#C05C77",

    },
    gootTitle: {
        fontSize: 18,
        borderBottomWidth: 2,
        borderColor: "#C05C77",
        flex: 1.5,
        textAlign: "center",

    },
    gootText: {
        flex: 3,
        fontSize: 14,
        marginLeft: 10

    },
    line: {
        marginTop: "2%",
        borderStyle:"dashed",
        borderBottomWidth: 2,
        borderColor: "#ECEEEF",

    },
    info: {
        flex: 1.5,
        flexDirection: "row",
        paddingBottom: 10,
        width: "85%",
        marginLeft: 10,
        justifyContent: "space-between",
    },
    price: {
    },
    count: {

    }, gootsBox_pay: {
        height: "100%",
        width: "100%",
        backgroundColor: "rgb(200,200,200)",
        zIndex:10,

    }
    ,
    gootBox_pay: {
        height: 105,
        width: "97%",
        marginTop: 10,
        backgroundColor: "rgb(999,999,999)",
        borderColor: "#666666",
        margin: 5,
        flexDirection: 'row',
        borderWidth: 3,
        borderRadius: 20,


    },
    gootinfoBox_pay: {
        width: "74%",
        height:"100%",
        borderLeftWidth:2,
        borderColor: "#666666",

    },
    gootTitle_pay: {
        width: "100%",
        height:"20%",
        fontSize: 18,
        borderBottomWidth: 2,
        borderColor: "#666666",
        flex: 2,
        textAlign: "center",

    },
    gootText_pay: {
        flex: 1.5,
  
        height:20,
        fontSize: 14,
        marginLeft: 10,
        overflow:"hidden"

    }
}

)
export default styles