/*
* @Author: edmond
* @Date:   2018-03-20 17:48:16
* @Last Modified by:   edmond
* @Last Modified time: 2018-03-22 09:35:31
*/

import { StyleSheet } from 'react-native';

import { getScreenWidth } from './util';

const styles = StyleSheet.create({
  container: {
    width: getScreenWidth(),
  },
  // Android 11 ignores keystrokes on a 0×0 or 1×1 TextInput.
  // Keep a real box and draw the text transparent; the code cells show the value.
  hiddenTextInput: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 48,
    color: 'transparent',
    backgroundColor: 'transparent',
  },
});

export default styles;
