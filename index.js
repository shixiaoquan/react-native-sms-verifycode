/*
* @Author: shixiaoquan
* @Date:   2018-03-20 17:48:11
* @Last Modified by:   edmond
* @Last Modified time: 2018-03-22 20:25:39
*/

'use strict'
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Alert, Keyboard, TextInput, TouchableOpacity} from 'react-native'

import CodeView from './component/CodeView'
import styles from './styles'
import {Colors, Constant, getScreenWidth} from './util.js'

class VerifyCode extends Component {
  static propTypes = {
    verifyCodeLength: PropTypes.number,
    containerPaddingVertical: PropTypes.number,
    containerPaddingHorizontal: PropTypes.number,
    containerBackgroundColor: PropTypes.string,
    codeViewWidth: PropTypes.number,
    codeBorderWidth: PropTypes.number,
    codeBorderRadius: PropTypes.number,
    codeFocusedBorderColor: PropTypes.string,
    codeBorderColor: PropTypes.string,
    codeFontSize: PropTypes.number,
    codeFontColor: PropTypes.string,
    onInputCompleted: PropTypes.func,
  }

  constructor(props) {
    super(props)
    this.state = {
      text: '',
      codeArray: [],
    }
  }

  componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      this._keyboardDidShow.bind(this)
    )
    this.keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      this._keyboardDidHide.bind(this)
    )
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove()
    this.keyboardDidHideListener.remove()
  }

  _keyboardDidShow() {
    this.keyboardShow = true
  }

  _keyboardDidHide() {
    this.keyboardShow = false
  }

  reset = () => {
    this.setState({text: '', codeArray: []})
  }

  render() {
    // console.log('getScreenWidth:', getScreenWidth())
    const {verifyCodeLength = Constant.verifyCodeLength} = this.props
    let gapWidth = getScreenWidth() / (3 * verifyCodeLength + 1)
    const {containerPaddingHorizontal = gapWidth} = this.props
    gapWidth = (getScreenWidth() - 2 * containerPaddingHorizontal) / (verifyCodeLength * 3 - 1)
    const {codeBorderWidth = Constant.codeBorderWidth} = this.props
    const {codeViewWidth = 2 * gapWidth} = this.props
    const {
      containerPaddingVertical = 0,
      containerBackgroundColor = Colors.containerBackgroundColor,
      codeFocusedBorderColor = Colors.codeFocusedBorderColor,
      codeBorderColor = Colors.codeBorderColor,
      codeBorderRadius = Constant.codeBorderRadius,
      codeFontSize = Constant.codeFontSize,
      codeFontColor = Colors.codeFontColor,
    } = this.props

    return (
      <TouchableOpacity
        style={styles.container}
        activeOpacity={1}
        onPressIn={() => {
          !this.keyboardShow && this.textInput.blur()
        }}
        onPressOut={() => this.textInput.focus()}
      >
        <TextInput
          ref={ref => (this.textInput = ref)}
          underlineColorAndroid={'transparent'}
          caretHidden
          autoFocus
          maxLength={verifyCodeLength}
          keyboardType={'numeric'}
          style={styles.hiddenTextInput}
          value={this.state.text}
          onChangeText={(text) => {
            this.setState({text: text})
            this._onChangeText(text)
            // onInputCompleted(text)
          }}
        />
        <CodeView
          codeArray={this.state.codeArray}
          verifyCodeLength={verifyCodeLength}
          containerPaddingVertical={containerPaddingVertical}
          containerPaddingHorizontal={containerPaddingHorizontal}
          containerBackgroundColor={containerBackgroundColor}
          codeViewWidth={codeViewWidth}
          codeBorderWidth={codeBorderWidth}
          codeBorderRadius={codeBorderRadius}
          codeFocusedBorderColor={codeFocusedBorderColor}
          codeBorderColor={codeBorderColor}
          codeFontSize={codeFontSize}
          codeFontColor={codeFontColor}
          gapWidth={gapWidth}
        />
      </TouchableOpacity>
    )
  }

  _onChangeText = (text) => {
    // console.log('text:', text)
    const codeLength = text.length
    if (codeLength === 0) {
      this.setState({
        text: '',
        codeArray: [],
      })
    } else {
      let codeArray = []
      codeArray = text.split('')
      if (isNaN(codeArray[codeLength - 1])) {
        console.log('1 codeArray:', codeArray)
        codeArray = codeArray.filter(code => !isNaN(code))
        console.log('2 codeArray:', codeArray)
        const reducer = (accumulator, currentValue) => `${accumulator}${currentValue}`
        const codeText = codeArray.length > 0 ? codeArray.reduce(reducer) : ``
        this.showAlert(codeText, codeArray)
      } else {
        const _verifyCodeLength = this.props.verifyCodeLength ? this.props.verifyCodeLength : Constant.verifyCodeLength
        console.log('_verifyCodeLength:', _verifyCodeLength)
        if (codeLength === _verifyCodeLength) {
          this.props.onInputCompleted && this.props.onInputCompleted(text)
        }
        console.log('3 codeArray:', codeArray)
        this.setState({
          text,
          codeArray
        })
      }
    }
  }

  showAlert = (text, codeArray) => {
    Alert.alert(
      '',
      '验证码只能输入数字',
      [
        {
          text: '确定',
          onPress: () => {
            this.setState({
              text,
              codeArray
            })
          }
        },
      ]
    )
  }
}

export default VerifyCode
