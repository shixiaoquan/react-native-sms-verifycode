/*
* @Author: edmond
* @Date:   2018-03-20 17:51:08
* @Last Modified by:   edmond
* @Last Modified time: 2018-03-21 08:48:18
*/

import {Dimensions} from 'react-native'

export const getScreenWidth = () => Dimensions.get('window').width
export const getScreenHeight = () => Dimensions.get('window').height

export const Colors = {
  containerBackgroundColor: '#FFF',
  codeBorderColor: 'grey',
  codeFocusedBorderColor: '#FF0000',
  codeFontColor: '#222',
}

export const Constant = {
  verifyCodeLength: 6,
  codeBorderWidth: 2,
  codeBorderRadius: 5,
  codeFontSize: 16,
}
