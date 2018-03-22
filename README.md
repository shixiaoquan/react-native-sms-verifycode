## react-native-sms-verifycode
一个用于填写短信验证码的React Native组件， 适配了android和iOS

## Screen Capture

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

```javascript
import SMSVerifyCode from 'react-native-sms-verifycode'
...
<SMSVerifyCode />
...        
```

|![android](https://github.com/shixiaoquan/react-native-sms-verifycode/blob/master/screencaptures/normal-android.png)|![iOS](https://github.com/shixiaoquan/react-native-sms-verifycode/blob/master/screencaptures/normal-ios.png)|
|:-:|:-:|

### Advanced Usage

#### 设置验证码的个数

```javascript
import SMSVerifyCode from 'react-native-sms-verifycode'
...
<SMSVerifyCode
  verifyCodeLength={4} // 根据需要设置任意数，类型必须时number
/>
```

|![android](https://github.com/shixiaoquan/react-native-sms-verifycode/blob/master/screencaptures/change-number-4.png)|![iOS](https://github.com/shixiaoquan/react-native-sms-verifycode/blob/master/screencaptures/change-number-5.png)|![iOS](https://github.com/shixiaoquan/react-native-sms-verifycode/blob/master/screencaptures/change-number-6.png)|
|:-:|:-:|:-:|

#### 设置Container样式

```javascript
import SMSVerifyCode from 'react-native-sms-verifycode'
...
<SMSVerifyCode
  verifyCodeLength={5}
  containerPaddingVertical={10}
  containerPaddingHorizontal={50}
  containerBackgroundColor={'#8DC647'}
/>
...        
```

|![android](https://github.com/shixiaoquan/react-native-sms-verifycode/blob/master/screencaptures/change-container-1.png)|![iOS](https://github.com/shixiaoquan/react-native-sms-verifycode/blob/master/screencaptures/change-container-2.png)|
|:-:|:-:|

#### 设置文本框的样式

```javascript
import SMSVerifyCode from 'react-native-sms-verifycode'
...
<SMSVerifyCode
  verifyCodeLength={5}
  containerPaddingVertical={10}
  containerPaddingHorizontal={50}
  containerBackgroundColor={'#8DC647'}
  codeBorderColor={'#000000'}
  codeFocusedBorderColor={'#0000FF'}
  codeBorderWidth={3}
  // codeBorderRadius={26}
/>
...        
```

|![android](https://github.com/shixiaoquan/react-native-sms-verifycode/blob/master/screencaptures/change-border-1.png)|![iOS](https://github.com/shixiaoquan/react-native-sms-verifycode/blob/master/screencaptures/change-border-2.png)|
|:-:|:-:|

#### 设置文本的样式

```javascript
import SMSVerifyCode from 'react-native-sms-verifycode'
...
<SMSVerifyCode
  verifyCodeLength={5}
  codeFontSize={26}
  // codeFontColor={'#89C047'}
/>
...        
```

|![android](https://github.com/shixiaoquan/react-native-sms-verifycode/blob/master/screencaptures/change-textstyle-1.png)|![iOS](https://github.com/shixiaoquan/react-native-sms-verifycode/blob/master/screencaptures/change-textstyle-2.png)|
|:-:|:-:|

## **Properties**

## **APIs**


