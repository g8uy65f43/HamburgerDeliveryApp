import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { CXL } from '../../redux/actions/car'
function index(props:any) {
  return (
    <View onTouchEnd={props.CXL} style={{
      position:"absolute",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: "rgba(0,0,0,.3)",
      zIndex: 1,
  }}  >
  </View>
  )
}
export default connect((state :any) => ({  }),{CXL})(index)