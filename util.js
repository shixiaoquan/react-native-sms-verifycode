/*
* @Author: edmond
* @Date:   2018-03-20 17:51:08
* @Last Modified by:   edmond
* @Last Modified time: 2018-03-26 16:36:38
*/

import { Dimensions } from 'react-native';

export const getScreenWidth = () => Dimensions.get('window').width;
export const getScreenHeight = () => Dimensions.get('window').height;

export const Colors = {
  containerBackgroundColor: '#FEFFFE',
  codeViewBorderColor: 'grey',
  focusedCodeViewBorderColor: '#1192F6',
  codeColor: '#222',
  coverColor: 'black',
};

export const Constants = {
  autoFocus: false,
  verifyCodeLength: 5,
  codeViewWidth: getScreenWidth() / ((3 * 5) + 1),
  codeViewBorderWidth: 1.5,
  codeViewBorderRadius: 5,
  codeFontSize: 16,
  secureTextEntry: false,
  warningTitle: 'Warning',
  warningContent: 'Only numbers to be entered',
  warningButtonText: 'OK',
};

export function normalizeInitialCodes(initialCodes) {
  if (Array.isArray(initialCodes)) {
    return initialCodes;
  }
  if (typeof initialCodes === 'string' || typeof initialCodes === 'number') {
    return `${initialCodes}`.split('');
  }
  return [];
}

export function sanitizeInitialCodes(initialCodes) {
  return normalizeInitialCodes(initialCodes).filter((item) => `${item}`.replace(/ /g, ''));
}

export function joinCodes(codes) {
  return codes.reduce((accumulator, currentValue) => `${accumulator}${currentValue}`, '');
}

export function getCodeArray(codeArray, verifyCodeLength) {
  const codeArrayLength = codeArray.length;
  for (let i = 0; i < verifyCodeLength; i++) {
    if (i >= codeArrayLength) {
      codeArray[i] = '';
    }
  }
  // console.log('codeArray:', codeArray)
  return codeArray;
}

export function getCodeLayout(containerWidth, verifyCodeLength, codeViewWidth, paddingLeft, paddingRight) {
  const length = verifyCodeLength > 0 ? verifyCodeLength : 1;
  const innerWidth = containerWidth - (paddingLeft || 0) - (paddingRight || 0);
  if (codeViewWidth) {
    const gapCount = Math.max(length - 1, 1);
    return {
      gapWidth: (innerWidth - (length * codeViewWidth)) / gapCount,
      codeViewWidth,
    };
  }
  const gapWidth = innerWidth / ((3 * length) - 1);
  return {
    gapWidth,
    codeViewWidth: 2 * gapWidth,
  };
}

// export function getCoverBGColorList(codeArray, verifyCodeLength) {
//   const coverBGColorList = [];
//   for (let i = 0; i < verifyCodeLength; i++) {
//     if (codeArray[i] === '') {
//       coverBGColorList.push('transparent');
//     } else {
//       coverBGColorList.push('black');
//     }
//   }
//   // console.log('coverBGColorList:', coverBGColorList)
//   return coverBGColorList;
// }

// export function getBeforeCoverBGColorList(codeArray, verifyCodeLength) {
//   const coverBGColorList = [];
//   const count = codeArray.filter(code => code !== '').length;
//   for (let i = 0; i < verifyCodeLength; i++) {
//     if (codeArray[i] === '' || i === count - 1) {
//       coverBGColorList.push('transparent');
//     } else {
//       coverBGColorList.push('black');
//     }
//   }
//   // console.log('coverBGColorList:', coverBGColorList)
//   return coverBGColorList;
// }
