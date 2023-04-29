import React from 'react'
import { Image, TextInput, View } from 'react-native'
import { connect } from 'react-redux';
import { SEARCHGOOTS } from '../redux/actions/search';
import styles from "./Search"

function Search(props: any) {
  const [value, onChangeText] = React.useState('');
  let [ipt, setIpt] = React.useState(false)
  const { SEARCHGOOTS, Gootsinfo } = props
  React.useEffect(() => {
    const SreachArr = Gootsinfo.filter((v: any) => {
      var reg = new RegExp("[" + v.title + "]")
      return reg.test(value)
    })
    SEARCHGOOTS(SreachArr)
  }, [value])
  return (
    <View style={ipt == false ? styles.searchBox : styles.searchBox_Focus} >
      <View style={styles.Mainsearch} >
        <TextInput
          style={styles.searchIpt}
          onChangeText={text => onChangeText(text)}
          onFocus={() => { setIpt(true) }}
          onBlur={() => { setIpt(false) }}
          placeholder="請輸入關鍵字"
        />
        <Image source={require("../../public/icon/baseline_search_black_24dp.png")} />
      </View>
    </View>
  )
}

export default connect((state: any) => ({ Gootsinfo: state.Gootsinfo }), { SEARCHGOOTS })(Search)
