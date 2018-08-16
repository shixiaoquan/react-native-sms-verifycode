### [中文版](https://github.com/shixiaoquan/react-native-sms-verifycode/blob/develop/README-zh.md)
## Screen Capture

### Support for entering passwords, compatible with iOS and Android

|![android](https://raw.githubusercontent.com/shixiaoquan/react-native-sms-verifycode/master/screencaptures/react-native-sms-verifycode-android.gif)|![iOS](https://raw.githubusercontent.com/shixiaoquan/react-native-sms-verifycode/master/screencaptures/react-native-sms-verifycode-ios.gif)|![Password](https://raw.githubusercontent.com/shixiaoquan/react-native-sms-verifycode/master/screencaptures/react-native-sms-verifycode-password.gif)|
|:-:|:-:|:-:|
| on Android | on iOS | use Password |

## Installation

```bash
$ npm install react-native-sms-verifycode --save
```

## Usage

### Basic Usage

Set the callback function when the input is complete, you can get the content input by the user.

```javascript
import SMSVerifyCode from 'react-native-sms-verifycode'
...
<SMSVerifyCode
  ref={ref => (this.verifycode = ref)}
  onInputCompleted={this.onInputCompleted}
/>

onInputCompleted = (text) => {
	Alert.alert(
	  text,
	  '本次输入的验证码',
	  [
	  	{
	      text: '确定',
	    },
	  ]
	)
}

reset = () => {
	this.verifycode.reset()
	this.setState({codeText: ''})
}
...        
```

|![android](https://raw.githubusercontent.com/shixiaoquan/react-native-sms-verifycode/master/screencaptures/normal-android.png)|![iOS](https://raw.githubusercontent.com/shixiaoquan/react-native-sms-verifycode/master/screencaptures/normal-ios.png)|![all](https://raw.githubusercontent.com/shixiaoquan/react-native-sms-verifycode/master/screencaptures/normal-all.gif)|
|:-:|:-:|:-:|

### Advanced Usage

#### Set the length of the verification code

```javascript
import SMSVerifyCode from 'react-native-sms-verifycode'
...
<SMSVerifyCode
  verifyCodeLength={4} // Set any number as needed, type must be number
/>
```

|![android](https://raw.githubusercontent.com/shixiaoquan/react-native-sms-verifycode/master/screencaptures/change-number-4.png)|![iOS](https://raw.githubusercontent.com/shixiaoquan/react-native-sms-verifycode/master/screencaptures/change-number-5.png)|![iOS](https://raw.githubusercontent.com/shixiaoquan/react-native-sms-verifycode/master/screencaptures/change-number-6.png)|
|:-:|:-:|:-:|

#### Set Container's style

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

|![android](https://raw.githubusercontent.com/shixiaoquan/react-native-sms-verifycode/master/screencaptures/change-container-3.png)|![android](https://raw.githubusercontent.com/shixiaoquan/react-native-sms-verifycode/master/screencaptures/change-container-1.png)|![iOS](https://raw.githubusercontent.com/shixiaoquan/react-native-sms-verifycode/master/screencaptures/change-container-2.png)|
|:-:|:-:|:-:|

#### Set code view style

```javascript
import SMSVerifyCode from 'react-native-sms-verifycode'
...
<SMSVerifyCode
  verifyCodeLength={6}
  containerPaddingVertical={10}
  containerPaddingHorizontal={50}
  containerBackgroundColor="#8DC647"
  codeViewBorderColor="#000000"
  focusedCodeViewBorderColor="#0000FF"
  codeViewBorderWidth={3}
  codeViewBorderRadius={16}
/>
...        
```

|![android](https://raw.githubusercontent.com/shixiaoquan/react-native-sms-verifycode/master/screencaptures/change-border-1.png)|![iOS](https://raw.githubusercontent.com/shixiaoquan/react-native-sms-verifycode/master/screencaptures/change-border-3.png)|![iOS](https://raw.githubusercontent.com/shixiaoquan/react-native-sms-verifycode/master/screencaptures/change-border-2.png)|
|:-:|:-:|:-:|

#### Set code style

```javascript
import SMSVerifyCode from 'react-native-sms-verifycode'
...
<SMSVerifyCode
  verifyCodeLength={5}
  codeFontSize={26}
  // codeColor={'#89C047'}
/>
...        
```

|![android](https://raw.githubusercontent.com/shixiaoquan/react-native-sms-verifycode/master/screencaptures/change-textstyle-1.png)|![iOS](https://raw.githubusercontent.com/shixiaoquan/react-native-sms-verifycode/master/screencaptures/change-textstyle-2.png)|![iOS](https://raw.githubusercontent.com/shixiaoquan/react-native-sms-verifycode/master/screencaptures/change-textstyle-3.png)|
|:-:|:-:|:-:|

## **Properties**

| Prop | PropType | Default Value |isRequired| Description |
|:-:|:-:|:-:|:-:|:-:|
| verifyCodeLength | number | 6 | NO | length of the verification code |
| containerStyle | object | null | NO | set container style |
| containerPaddingVertical | number | 0 | NO | container's paddingVertical |
| containerPaddingHorizontal | number | Automatic calculation based on the length of the verification code | NO | container's paddingHorizontal |
| containerBackgroundColor | string | #FDFFFD | NO | container's backgroundColor |
| codeViewStyle | object | null | NO | set code view style |
| codeViewWidth | number | Automatic calculation based on the length of the verification code | NO |  width of code view |
| codeViewBorderColor | string | grey | NO | color of code view border |
| focusedCodeViewBorderColor | string | #1192F6 | NO | The color of the currently focused text box |
| codeViewBorderWidth | number | 1 | NO | width of code view border |
| codeViewBorderRadius | number | 5 | NO | radius of code view border |
| codeViewBackgroundColor | string | default | NO | code view background color |
| codeFontSize | number | default | NO | code font size |
| codeColor | string | #222222 | NO | color of code |
| secureTextEntry | boolean | false | NO | Set to true when entering a password，default is false |
| coverStyle | object | null | NO | cover style |
| coverRadius | number | codeFontSize / 2 | NO | cover radius |
| coverColor | string | black | NO | cover color |

## **APIs**

| Name | isRequired | Description |
|:-:|:-:|:-:|
| onInputCompleted | NO | Callback method when input is complete |
| reset | NO | Clear the input and set the focus to the first input box, **call using ref** |
| blur | NO | Hide the keyboard, **call using ref** |
| focus | NO | Display keyboard, **call using ref** |



