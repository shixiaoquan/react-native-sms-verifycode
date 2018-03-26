/*
* @Author: edmond
* @Date:   2018-03-20 17:51:08
* @Last Modified by:   edmond
* @Last Modified time: 2018-03-26 15:32:26
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
  verifyCodeLength: 5,
  codeBorderWidth: 1.5,
  codeBorderRadius: 5,
  codeFontSize: 16,
  secureTextEntry: false,
}

export function getCodeArray(codeArray, verifyCodeLength) {
  const codeArrayLength = codeArray.length
  for (let i = 0; i < verifyCodeLength; i++) {
    if (i >= codeArrayLength) {
      codeArray[i] = ''
    }
  }
  console.log('codeArray:', codeArray)
  return codeArray
}

export function getCoverBGColorList(codeArray, verifyCodeLength) {
  const coverBGColorList = []
  for (let i = 0; i < verifyCodeLength; i++) {
    if (codeArray[i] === '') {
      coverBGColorList.push('transparent')
    } else {
      coverBGColorList.push('black')
    }
  }
  console.log('coverBGColorList:', coverBGColorList)
  return coverBGColorList
}

export function getBeforeCoverBGColorList(codeArray, verifyCodeLength) {
  const coverBGColorList = []
  const count = codeArray.filter(code => code !== '').length
  for (let i = 0; i < verifyCodeLength; i++) {
    if (codeArray[i] === '' || i === count - 1) {
      coverBGColorList.push('transparent')
    } else {
      coverBGColorList.push('black')
    }
  }
  console.log('coverBGColorList:', coverBGColorList)
  return coverBGColorList
}
