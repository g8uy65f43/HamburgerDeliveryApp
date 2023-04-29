import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'
import LinearGradient from 'react-native-linear-gradient'
import { GOPAY, LASTCHECK, CXL } from '../../redux/actions/car.js'
import { RESETCOUNT } from '../../redux/actions/count.js'
import styles from "./Buy.js"
function BuyUI(props: any) {
    const { gopay, count, GOPAY, LASTCHECK, CXL, RESETCOUNT } = props
    let [money, setMoney] = React.useState(0)
    let [totocount, settotocount] = React.useState(0)
    React.useEffect(() => {
        let moneyF: number = 0
        let totocountF: number = 0
        for (let i in count) {
            totocountF += Number(count[i]["count"])
            moneyF += (count[i]["price"] * Number(count[i]["count"]))
        }
        setMoney(moneyF)
        settotocount(totocountF)
    }, [count])
    return (
        <LinearGradient colors={["#D7AFB1", "#FDFFE0"]} style={styles.Box}>
            {gopay === 0 || gopay === 1 ? (<View style={styles.cslbt}>
                <Text>共購買:{totocount}個</Text>
                <Text>總計:{money}元</Text>
            </View>) : gopay === 2 ? (<View style={styles.cslbt}>
                <Text></Text>
            </View>
            ) : null}
            <View style={styles.gootBox_last} >
                {gopay === 2 ? null : (
                    <TouchableOpacity style={styles.button} onPress={() => {
                        if (count.length !== 0 && gopay === 0) {
                            GOPAY()
                        } else if (count.length !== 0 && gopay === 1) {
                            LASTCHECK()
                            setTimeout(() => {
                                if (gopay !== 0) {
                                    CXL()
                                }
                                RESETCOUNT()
                                return
                            }, 2000);
                        }
                    }}>
                        <Text style={styles.buttonText}> {gopay === 1 ? "送出" : "前往結帳"} </Text>
                    </TouchableOpacity>)}
            </View>
        </LinearGradient>
    )
}

export default connect((state: any) => ({ count: state.Count, gopay: state.Gopay, Search: state.Search }), { GOPAY, LASTCHECK, CXL, RESETCOUNT })(BuyUI)