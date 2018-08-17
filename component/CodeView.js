/*
* @Author: edmond
* @Date:   2018-03-20 21:57:51
* @Last Modified by:   edmond
* @Last Modified time: 2018-03-26 15:39:57
*/

import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { Colors, Constants, getScreenWidth } from '../util';

const styles = StyleSheet.create({
  defaultContainerStyle: {
    width: getScreenWidth(),
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  defaultCodeViewStyle: {
    borderWidth: Constants.codeViewBorderWidth,
    borderColor: Colors.codeViewBorderColor,
    borderRadius: Constants.codeViewBorderRadius,
    alignItems: 'center',
    justifyContent: 'center',
  },
  defaultCodeStyle: {
    color: Colors.codeColor,
    fontSize: Constants.codeFontSize,
    backgroundColor: 'transparent',
  },
  defaultCoverStyle: {
    position: 'absolute',
    width: Constants.codeFontSize * 1.15,
    height: Constants.codeFontSize * 1.15,
    borderRadius: (Constants.codeFontSize * 1.15) / 2,
    backgroundColor: 'transparent',
  },
});

const CodeView = (props) => {
  const {
    codeArray,
    coverBGColorList,
    gapWidth,

    containerStyle,
    containerPaddingVertical,
    containerPaddingTop,
    containerPaddingBottom,
    containerPaddingHorizontal,
    containerPaddingLeft,
    containerPaddingRight,
    containerBackgroundColor,

    codeViewStyle,
    codeViewWidth,
    codeViewHeight,
    codeViewBackgroundColor,
    codeViewBorderWidth,
    codeViewBorderColor,
    codeViewBorderRadius,
    focusedCodeViewBorderColor,

    codeStyle,
    codeFontSize,
    codeColor,

    secureTextEntry,
    coverStyle,
    coverRadius,
  } = props;

  const foucsedIndex = codeArray.filter(item => item !== '').length;

  const cPaddingVertical = containerPaddingVertical ? { paddingVertical: containerPaddingVertical } : {};
  const cPaddingTop = containerPaddingTop ? { paddingTop: containerPaddingTop } : {};
  const cPaddingBottom = containerPaddingBottom ? { paddingBottom: containerPaddingBottom } : {};
  const cPaddingHorizontal = containerPaddingHorizontal ? { paddingHorizontal: containerPaddingHorizontal } : {};
  const cPaddingLeft = containerPaddingLeft ? { paddingLeft: containerPaddingLeft } : {};
  const cPaddingRight = containerPaddingRight ? { paddingRight: containerPaddingRight } : {};
  const cBackgroundColor = containerBackgroundColor ? { backgroundColor: containerBackgroundColor } : {};

  return (
    <View style={[
      styles.defaultContainerStyle,
      containerStyle,
      {
        ...cPaddingVertical,
        ...cPaddingTop,
        ...cPaddingBottom,
        ...cPaddingHorizontal,
        ...cPaddingLeft,
        ...cPaddingRight,
        ...cBackgroundColor,
      },
    ]}
    >
      {
        codeArray.map((code, index) => {
          const marginLeft = index === 0 ? 0 : gapWidth;
          const marginRight = 0;

          // code view style
          const viewWidth = codeViewWidth ? { width: codeViewWidth } : {};
          const viewHight = codeViewHeight ? { height: codeViewHeight } : { height: codeViewWidth };
          const viewBackgroundColor = codeViewBackgroundColor ? { backgroundColor: codeViewBackgroundColor } : {};
          const viewBorderWidth = codeViewBorderWidth ? { borderWidth: codeViewBorderWidth } : {};
          const viewBorderRadius = codeViewBorderRadius ? { borderRadius: codeViewBorderRadius } : {};
          const viewBorderColor = codeViewBorderColor ? { borderColor: codeViewBorderColor } : {};
          const focusedViewBorderColor = focusedCodeViewBorderColor ? { borderColor: focusedCodeViewBorderColor } : {};
          const vbColor = foucsedIndex === index ? focusedViewBorderColor : viewBorderColor;

          // code style
          const cFontSize = codeFontSize ? { fontSize: codeFontSize } : {};
          const cColor = codeColor ? { color: codeColor } : {};

          // cover style
          const cvWidth = coverRadius ? { width: 2 * coverRadius } : {};
          const cvHeight = coverRadius ? { height: 2 * coverRadius } : {};
          const cvBorderRadius = coverRadius ? { borderRadius: coverRadius } : {};

              return (
                <View
                  key={index}
                  style={[
                    styles.defaultCodeViewStyle,
                    codeViewStyle,
                    {
                      ...viewWidth,
                      ...viewHight,
                      marginLeft,
                      marginRight,
                      ...viewBackgroundColor,
                      ...viewBorderWidth,
                      ...viewBorderRadius,
                      ...vbColor,
                    },
                  ]}
                >
                  <Text
                    style={[
                      styles.defaultCodeStyle,
                      codeStyle,
                      {
                        ...cFontSize,
                        ...cColor,
                      },
                    ]}
                  >
                    {code}
                  </Text>
                  {
                    secureTextEntry && <View style={[
                      styles.defaultCoverStyle,
                      coverStyle,
                      {
                        ...cvWidth,
                        ...cvHeight,
                        ...cvBorderRadius,
                        backgroundColor: coverBGColorList[index],
                      },
                      ]}
                    />
                  }
                </View>
          );
        })
      }
    </View>
  );
};

CodeView.propTypes = {
  codeArray: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ])),
  coverBGColorList: PropTypes.arrayOf(PropTypes.string).isRequired,
  gapWidth: PropTypes.number,
  verifyCodeLength: PropTypes.number,

  containerStyle: PropTypes.oneOfType([PropTypes.object]),
  containerPaddingVertical: PropTypes.number,
  containerPaddingTop: PropTypes.number,
  containerPaddingBottom: PropTypes.number,
  containerPaddingHorizontal: PropTypes.number,
  containerPaddingLeft: PropTypes.number,
  containerPaddingRight: PropTypes.number,
  containerBackgroundColor: PropTypes.string,

  codeViewStyle: PropTypes.oneOfType([PropTypes.object]),
  codeViewBorderColor: PropTypes.string,
  focusedCodeViewBorderColor: PropTypes.string,
  codeViewWidth: PropTypes.number.isRequired,
  codeViewHeight: PropTypes.number,
  codeViewBorderWidth: PropTypes.number,
  codeViewBorderRadius: PropTypes.number,
  codeViewBackgroundColor: PropTypes.string,

  codeStyle: PropTypes.oneOfType([PropTypes.object]),
  codeFontSize: PropTypes.number,
  codeColor: PropTypes.string,

  secureTextEntry: PropTypes.bool,
  coverStyle: PropTypes.oneOfType([PropTypes.object]),
  coverRadius: PropTypes.number,
};

CodeView.defaultProps = {
  codeArray: [],
  gapWidth: 0,
  verifyCodeLength: 0,

  containerStyle: null,
  containerPaddingVertical: null,
  containerPaddingTop: null,
  containerPaddingBottom: null,
  containerPaddingHorizontal: null,
  containerPaddingLeft: null,
  containerPaddingRight: null,
  containerBackgroundColor: null,

  codeViewStyle: null,
  codeViewBorderColor: null,
  focusedCodeViewBorderColor: Colors.focusedCodeViewBorderColor,
  codeViewHeight: null,
  codeViewBorderWidth: null,
  codeViewBorderRadius: null,
  codeViewBackgroundColor: null,

  codeStyle: null,
  codeFontSize: null,
  codeColor: null,

  secureTextEntry: false,
  coverStyle: null,
  coverRadius: null,
};

export default CodeView;
