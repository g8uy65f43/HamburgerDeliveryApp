import React from 'react'
import {  Text, TouchableOpacity, View } from 'react-native'
import styles from "./UI.js"
export default function index(props :any) {
  const { count , id, price, employ, title, img } = props
  function addOrMinus(id :string, type :string) {
    if (count instanceof Array &&type =="minus") {
      let data = count.find(v => {
        return v.id === props.id
      })
      return data? data.count >0? employ(id, type, price, title, img) :null: null
    }
    employ(id, type, price, title, img) 
  }

  function judgeCount() {
    if (count instanceof Array) {
      let data = count.find(v => {
        return v.id === props.id
      })
      return data? data.count : ""
    }
    return
  }
  return (
    <View  style={styles.ulbox}>
<TouchableOpacity style={styles.button} onPress={v => addOrMinus(id, "minus")}>
      <Text style={styles.buttonText}> - </Text>
    </TouchableOpacity>      
    <View style={styles.ulbox_li}><Text style={{fontSize:18,lineHeight:20}}>{judgeCount()}</Text></View>
      <TouchableOpacity style={styles.button} onPress={v => addOrMinus(id, "plus")}>
      <Text style={styles.buttonText}> + </Text>
    </TouchableOpacity>  
    </View>
  )
  
}

