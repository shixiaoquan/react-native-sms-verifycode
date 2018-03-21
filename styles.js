/*
* @Author: edmond
* @Date:   2018-03-20 17:48:16
* @Last Modified by:   edmond
* @Last Modified time: 2018-03-21 08:28:42
*/

import {StyleSheet} from 'react-native'

import {getScreenWidth, Colors} from './util'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // width: getScreenWidth(),
  },
  hiddenTextInput: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent'
  },
  codeView: {
    width: (getScreenWidth() - 140) / 6,
    height: (getScreenWidth() - 140) / 6,
    margin: 10,
    backgroundColor: '#F7F8F7',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: Colors.mainColor,
    alignItems: 'center',
    justifyContent: 'center'
  },
  codeText: {
    backgroundColor: 'transparent'
  }
})

export default styles
