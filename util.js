/*
* @Author: edmond
* @Date:   2018-03-20 17:51:08
* @Last Modified by:   edmond
* @Last Modified time: 2018-03-21 22:25:37
*/

import {Dimensions} from 'react-native'

export const getScreenWidth = () => Dimensions.get('window').width
export const getScreenHeight = () => Dimensions.get('window').height

export const Colors = {
  containerBackgroundColor: '#FEFFFE',
  codeBorderColor: 'grey',
  codeFocusedBorderColor: '#1192F6',
  codeFontColor: '#222',
}

export const Constant = {
  verifyCodeLength: 6,
  codeBorderWidth: 1.5,
  codeBorderRadius: 5,
  codeFontSize: 16,
}
