import React, { ReactNode } from 'react'
import { connect } from "react-redux";
import LinearGradient from 'react-native-linear-gradient' 
import { ADDCOUNT, MINUSCOUNT, RESETCOUNT } from "../redux/actions/count.js"
import {
  Image,
  ScrollView,
  Text,
  View,
} from 'react-native';
import styles from "./MainBody.js"
import UI from "../UI/index"
import Backdrop from "../UI/Backdrop/index"
function gootBoxComponent(gootinfo: any, count: any, id: string, price: number, employ: Function, title: string, img: any, stuse: number): ReactNode {

  let data = count.find((v: any) => {
    return v.id === id
  })
  return (<View key={gootinfo["id"]}>
    {stuse === 0 ? (<View style={styles.gootBox}>
      <Image style={{ height: 100, width: 100 }} source={gootinfo.img} />
      <View style={styles.gootinfoBox}>
        <Text style={styles.gootTitle}>{gootinfo["title"]}</Text>
        <Text style={styles.gootText}>{gootinfo["desc"]}</Text>
        <View style={styles.info}>
          <Text>price : {gootinfo["price"]}</Text>
          <UI count={count} id={id} price={price} employ={employ} title={title} img={img}></UI>
        </View>
      </View>
    </View>) : (<View style={styles.gootBox_pay}>
      <Image style={{ height: 100, width: 100 }} source={gootinfo.img} />
      <View style={styles.gootinfoBox_pay}>
        <Text style={styles.gootTitle_pay}>{gootinfo["title"]}</Text>
        <Text style={styles.gootText_pay}> 單價 : {gootinfo["price"]}元</Text>
        <Text style={styles.gootText_pay}> 數量 : {data["count"]}個</Text>
        <Text style={styles.gootText_pay}> 共計 : {gootinfo["price"] * data["count"]}元</Text>
      </View>
    </View>)}

    <View style={styles.line}></View></View>)
}


function MainBodyUI(props: any) {

  const { count, gopay, Search, Gootsinfo } = props
  let [money,setMoney] = React.useState(0)
  let [totocount,settotocount] = React.useState(0)
  React.useEffect(()=>{
      let moneyF :number = 0
      let totocountF :number = 0

      for( let i in count){
          totocountF += Number(count[i]["count"])
          moneyF +=  (count[i]["price"]* Number(count[i]["count"]))
      }
      setMoney(moneyF)
      settotocount(totocountF)

  },[count])
  function employ(id: string, type: string, price: number, title: string, img: any) {
    switch (type) {
      case "plus":
        return props.ADDCOUNT({ id, count: 1, price, title, img })
      case 'minus':
        return props.MINUSCOUNT({ id, count: -1, price, title, img })
      default:
        break;
    }
  }

  return (<LinearGradient colors={['#843552' , '#E27C6C']} style={gopay ===2?{justifyContent:"center",alignItems:"center"} : { flexDirection: "column-reverse"}}>
    <ScrollView style={styles.gootsBox} >
      { Search &&Search?.length !==0?(
Search.map((e: any): ReactNode | any => {
  return gootBoxComponent(e, count, e["id"], e["price"], employ, e["title"], e.img, 0)
})):(
  Gootsinfo.map((e: any): ReactNode | any => {
    return gootBoxComponent(e, count, e["id"], e["price"], employ, e["title"], e.img, 0)
  })  )}


    </ScrollView>
    {(gopay === 1||gopay === 2) && count.length !== 0 ? (<Backdrop></Backdrop>) : null}
    {gopay === 1 && count.length !== 0 ? (<ScrollView style={{ zIndex:200, position: "absolute", width: "100%", height: "85%", backgroundColor:"#D0D0D0" }}>{count.map((e: any) => {
      return gootBoxComponent(e, count, e["id"], e["price"], employ, e["title"], e.img, 1)
    })}
      <View style={{ marginRight: 15,marginTop:10 }}><Text style={{ textAlign: "right", fontSize: 20 }}>總數:{totocount}個</Text>
        <Text style={{ textAlign: "right", fontSize: 20 }}>共計:{money}元</Text></View>
    </ScrollView>) : gopay === 2 && count.length !== 0 ? (
    <LinearGradient colors={['#D7AFB1' , '#FCFFE0']} style={{zIndex:201, justifyContent:"center",position:"absolute",backgroundColor:"#D3D3D3",width:"70%",height:"40%",borderRadius:50}}>
      <View >
        <Text style={{ textAlign:"center", fontSize: 20, }}>訂購完成</Text>
        <Text style={{ textAlign:"center", fontSize: 20, }}>共計消費:{money}元</Text></View>
    </LinearGradient>) : null}


  </LinearGradient>
  )

}

export default connect((state: any) => ({ count: state.Count, gopay: state.Gopay, Gootsinfo: state.Gootsinfo, Search: state.Search }), { ADDCOUNT, MINUSCOUNT, RESETCOUNT })(MainBodyUI)