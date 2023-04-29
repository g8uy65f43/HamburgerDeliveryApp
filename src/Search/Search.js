const { StyleSheet } = require("react-native");

var styles = StyleSheet.create({
    Mainsearch: {
        width: "100%",
        height: 50,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor:"white",


    },
    searchBox: {
        width: "100%",
        height: 50,
        borderWidth: 2,
        borderRadius:2,
        borderColor:"rgb(111,111,111)",

        overflow:"hidden"
    },
    searchBox_Focus: {
        width: "100%",
        height: 50,
        borderWidth: 4,
        borderRadius:10,
        
        overflow:"hidden",
    },
    searchIpt: {
        height: 50, marginLeft: 15, width: "85%", fontSize: 18
    }

})
export default styles