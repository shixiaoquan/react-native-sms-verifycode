# react-native-sms-verifycode
一个用于填写短信验证码的React Native组件， 适配了android和iOS

# Screen Capture

[Example code](https://github.com/shixiaoquan/react-native-sms-verifycode/tree/master/Example)

### 支持 ios、android

|![android](https://github.com/shixiaoquan/react-native-sms-verifycode/blob/master/screencaptures/react-native-sms-verifycode-android.gif)|![iOS](https://github.com/shixiaoquan/react-native-sms-verifycode/blob/master/screencaptures/react-native-sms-verifycode-ios.gif)|
|:-:|:-:|
|on Android|on iOS|

### Installation

```bash
$ npm install react-native-sms-verifycode --save
```

### Basic Usage

无需设置任何参数，可以直接使用组件





### Advanced Usage

组件支持设置背景色，上下左右的padding，以及文字的大小、颜色、文本框的粗细和颜色

If you need customized page like my Example, you can  pass in `View` component into AppIntro component and set level. Remember any need use parallax effect component, Need to be `<View level={10}></View>` inside.

<img src="http://i.giphy.com/26AHwds1g5HjXrd4s.gif">

```javascript
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import AppIntro from 'react-native-app-intro';

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
    padding: 15,
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

class Example extends Component {

  render() {
    return (
      <AppIntro>
        <View style={[styles.slide,{ backgroundColor: '#fa931d' }]}>
          <View level={10}><Text style={styles.text}>Page 1</Text></View>
          <View level={15}><Text style={styles.text}>Page 1</Text></View>
          <View level={8}><Text style={styles.text}>Page 1</Text></View>
        </View>
        <View style={[styles.slide, { backgroundColor: '#a4b602' }]}>
          <View level={-10}><Text style={styles.text}>Page 2</Text></View>
          <View level={5}><Text style={styles.text}>Page 2</Text></View>
          <View level={20}><Text style={styles.text}>Page 2</Text></View>
        </View>
        <View style={[styles.slide,{ backgroundColor: '#fa931d' }]}>
          <View level={8}><Text style={styles.text}>Page 3</Text></View>
          <View level={0}><Text style={styles.text}>Page 3</Text></View>
          <View level={-10}><Text style={styles.text}>Page 3</Text></View>
        </View>
        <View style={[styles.slide, { backgroundColor: '#a4b602' }]}>
          <View level={5}><Text style={styles.text}>Page 4</Text></View>
          <View level={10}><Text style={styles.text}>Page 4</Text></View>
          <View level={15}><Text style={styles.text}>Page 4</Text></View>
        </View>
      </AppIntro>
    );
  }
}
AppRegistry.registerComponent('Example', () => Example);
```

And in Android, image inside view component, view need width、height.
```javascript
<View style={{
  position: 'absolute',
  top: 80,
  left: 30,
  width: windows.width,
  height: windows.height,
}} level={20}
>
  <Image style={{ width: 115, height: 70 }} source={require('./img/1/c2.png')} />
</View>
```

## **Properties**
| Prop           | PropType | Default Value           | Description                                                                                                                                                                                                                                                                                                                                                      |
|----------------|----------|-------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| dotColor       | string   | 'rgba(255,255,255,0.3)' | Bottom of the page dot color                                                                                                                                                                                                                                                                                                                                     |
| activeDotColor | string   | '#fff'                  | Active page index dot color                                                                                                                                                                                                                                                                                                                                      |
| rightTextColor | string   | '#fff'                  | The bottom right Text `Done、>` color                                                                                                                                                                                                                                                                                                                            |
| leftTextColor  | string   | '#fff'                  | The bottom left Text `Skip` color                                                                                                                                                                                                                                                                                                                                |
| onSlideChange  | (index, total) => {} |                         | function to call when the pages change                                                                                                                                                                                                                                                                                                                           |
| onSkipBtnClick | (index) => {}     |                         | function to call when the Skip button click                                                                                                                                                                                                                                                                                                                      |
| onDoneBtnClick | func     |                         | function to call when the Done button click                                                                                                                                                                                                                                                                                                                      |
| onNextBtnClick | (index) => {}     |                         | function to call when the Next '>' button click                                                                                                                                                                                                                                                                                                                  |
| doneBtnLabel   | string、Text element  |  Done                   | The bottom right custom Text label                                                                                                                                                                                                                                                                                                                   |
| skipBtnLabel   | string、Text element  |  Skip                   | The bottom left custom Text label                                                                                                                                                                                                                                                                                                                  |
| nextBtnLabel   | string、Text element   |  ›                      | The bottom left custom Text label                                                                                                                                                                                                                                                                                                                  |
| pageArray      | array    |                         | In the basic usage, you can input object array to render basic view example: ```[[{title: 'Page 1', description: 'Description 1', img: 'https://goo.gl/uwzs0C', imgStyle: {height: 80 * 2.5, width: 109 * 2.5 }, backgroundColor: '#fa931d', fontColor: '#fff', level: 10 }]``` , level is parallax effect level ,if you use pageArray you can't use custom view |
| defaultIndex | number   | 0 | number of the index of the initial index |
| showSkipButton | bool | true | a boolean defining if we should render the skip button |
| showDoneButton | bool | true | a boolean that defines if we should render the done button |
| showDots | bool | true | a boolean that defines if we should render the bottom dots |

##### **Children View Properties**
| Prop  | PropType | Default Value | Description           |
|-------|----------|---------------|-----------------------|
| level | number   |               | parallax effect level |
