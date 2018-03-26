/*
* @Author: shixiaoquan
* @Date:   2018-03-20 17:48:11
* @Last Modified by:   edmond
* @Last Modified time: 2018-03-26 15:37:58
*/

'use strict'
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {
  Alert,
  Keyboard,
  TextInput,
  TouchableOpacity
} from 'react-native'

import CodeView from './component/CodeView'
import styles from './styles'
import {
  Colors,
  Constant,
  getScreenWidth,
  getCodeArray,
  getCoverBGColorList,
  getBeforeCoverBGColorList,
} from './util.js'

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
    secureTextEntry: PropTypes.bool,
  }

  constructor(props) {
    super(props)
    // console.log('props:', props)
    const {verifyCodeLength = Constant.verifyCodeLength} = props
    const codeArray = getCodeArray([], verifyCodeLength)
    this.state = {
      text: '',
      codeArray,
      coverBGColorList: getCoverBGColorList(codeArray, verifyCodeLength),
    }
    // 当前输入的code个数
    this.curCodeLength = 0
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
    const {verifyCodeLength = Constant.verifyCodeLength} = this.props
    const codeArray = getCodeArray([], verifyCodeLength)
    this.curCodeLength = 0
    this.setState({
      text: '',
      codeArray,
      coverBGColorList: getCoverBGColorList(codeArray, verifyCodeLength),
    })
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
      secureTextEntry = Constant.secureTextEntry,
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
          coverBGColorList={this.state.coverBGColorList}
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
          secureTextEntry={secureTextEntry}
          gapWidth={gapWidth}
        />
      </TouchableOpacity>
    )
  }

  _onChangeText = (text) => {
    clearTimeout(this.timeout)
    const {verifyCodeLength = Constant.verifyCodeLength} = this.props
    // console.log('text:', text)
    const codeLength = text.length
    if (codeLength === 0) {
      const codeArray = getCodeArray([], verifyCodeLength)
      this.curCodeLength = 0
      this.setState({
        text: '',
        codeArray,
        coverBGColorList: getCoverBGColorList(codeArray, verifyCodeLength),
      })
    } else {
      let codeArray = []
      codeArray = text.split('')
      // add
      if (codeLength > this.curCodeLength) {
        if (isNaN(codeArray[codeLength - 1])) {
          // console.log('1 codeArray:', codeArray)
          codeArray = codeArray.filter(code => !isNaN(code))
          // console.log('2 codeArray:', codeArray)
          const reducer = (accumulator, currentValue) => `${accumulator}${currentValue}`
          const codeText = codeArray.length > 0 ? codeArray.reduce(reducer) : ``
          this.showAlert(codeText, codeArray, codeLength)
        } else {
          if (codeLength === verifyCodeLength) {
            this.props.onInputCompleted && this.props.onInputCompleted(text)
          }
          codeArray = getCodeArray(codeArray, verifyCodeLength)
          this.curCodeLength = codeLength
          this.setState(
            {
              text,
              codeArray,
              coverBGColorList: getBeforeCoverBGColorList(codeArray, verifyCodeLength),
            },
            () => {
              this.timeout = setTimeout(
                () => this.setState({
                  codeArray,
                  coverBGColorList: getCoverBGColorList(codeArray, verifyCodeLength)
                }),
                500
              )
            }
          )
        }
      } else { // minus
        codeArray = getCodeArray(codeArray, verifyCodeLength)
        this.curCodeLength = codeLength
        this.setState({
          text,
          codeArray,
          coverBGColorList: getCoverBGColorList(codeArray, verifyCodeLength),
        })
      }
    }
  }

  showAlert = (text, codeArray, codeLength) => {
    this.curCodeLength = codeLength - 1
    const {verifyCodeLength = Constant.verifyCodeLength} = this.props
    Alert.alert(
      '',
      '验证码只能输入数字',
      [
        {
          text: '确定',
          onPress: () => {
            codeArray = getCodeArray(codeArray, verifyCodeLength)
            this.setState({
              text,
              codeArray,
              coverBGColorList: getCoverBGColorList(codeArray, verifyCodeLength),
            })
          }
        },
      ]
    )
  }
}

export default VerifyCode
