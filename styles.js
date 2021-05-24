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
  hiddenTextInput: {
    //width: 0,
    //height: 0,
    backgroundColor: 'transparent',
    color: '#F2F2F2' // Write your background color
  },
});

export default styles;
