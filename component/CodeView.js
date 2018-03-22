/*
* @Author: edmond
* @Date:   2018-03-20 21:57:51
* @Last Modified by:   edmond
* @Last Modified time: 2018-03-22 11:01:22
*/

import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

const CodeView = (props) => {
  const {
    codeArray = [],
    verifyCodeLength,
    containerPaddingVertical,
    containerPaddingHorizontal,
    containerBackgroundColor,
    codeViewWidth,
    codeBorderWidth,
    codeBorderRadius,
    codeFocusedBorderColor,
    codeBorderColor,
    codeFontSize,
    codeFontColor,
    gapWidth,
  } = props

  // console.log('gapWidth:', gapWidth)

  const codeArrayLength = codeArray.length
  for (let i = 0; i < verifyCodeLength; i++) {
    if (i >= codeArrayLength) {
      codeArray[i] = ''
    }
  }

  // const gapWidth = (getScreenWidth() - containerPaddingHorizontal - verifyCodeLength * codeViewWidth) / (verifyCodeLength - 1)
  return (
    <View style={[
      styles.container,
      {
        paddingVertical: containerPaddingVertical,
        paddingHorizontal: containerPaddingHorizontal,
        backgroundColor: containerBackgroundColor
      }
    ]}>
      {
        codeArray.map((code, index) => {
          const borderColor = codeArrayLength === index ? codeFocusedBorderColor : codeBorderColor
          const marginLeft = index === 0 ? 0 : gapWidth
          return (
            <View
              key={index}
              style={[
                styles.codeView,
                {
                  width: codeViewWidth,
                  height: codeViewWidth,
                  borderWidth: codeBorderWidth,
                  borderRadius: codeBorderRadius,
                  borderColor,
                  marginLeft,
                  backgroundColor: containerBackgroundColor,
                }
              ]}
            >
              <Text style={[
                styles.codeText,
                {
                  fontSize: codeFontSize,
                  color: codeFontColor,
                }
              ]}>
                {code}
              </Text>
            </View>
          )
        })
      }
    </View>
  )
}

CodeView.propTypes = {
  codeArray: PropTypes.array.isRequired,
  verifyCodeLength: PropTypes.number.isRequired,
  containerPaddingVertical: PropTypes.number.isRequired,
  containerPaddingHorizontal: PropTypes.number.isRequired,
  containerBackgroundColor: PropTypes.string.isRequired,
  codeBorderColor: PropTypes.string.isRequired,
  codeFocusedBorderColor: PropTypes.string.isRequired,
  codeBorderWidth: PropTypes.number.isRequired,
  codeBorderRadius: PropTypes.number.isRequired,
  codeFontSize: PropTypes.number.isRequired,
  codeFontColor: PropTypes.string.isRequired,
  gapWidth: PropTypes.number.isRequired,
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  codeView: {
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  codeText: {
    backgroundColor: 'transparent'
  }
})

export default CodeView
