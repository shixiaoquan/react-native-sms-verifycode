## react-native-sms-verifycode
一个用于填写短信验证码的React Native组件， 适配了android和iOS

## Screen Capture

### 支持 ios、android

|![android](https://github.com/shixiaoquan/react-native-sms-verifycode/blob/master/screencaptures/react-native-sms-verifycode-android.gif)|![iOS](https://github.com/shixiaoquan/react-native-sms-verifycode/blob/master/screencaptures/react-native-sms-verifycode-ios.gif)|
|:-:|:-:|
|on Android|on iOS|

## Installation

```bash
$ npm install react-native-sms-verifycode --save
```

## Usage

### Basic Usage

传如输入完成时的回调函数，即可获取用户输入的内容

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

| Prop | PropType | Default Value |isRequired| Description |
|:-:|:-:|:-:|:-:|:-:|
| verifyCodeLength | number | 6 | NO | 验证码的个数 |
| containerPaddingVertical | number | 0 | NO | 外层容器的paddingVertical |
| containerPaddingHorizontal | number | 根据验证码个数自动计算 | NO | 外层容器的paddingHorizontal |
| containerBackgroundColor | string | #FDFFFD | NO | 外层容器的backgroundColor |
| codeBorderColor | string | grey | NO | 文本框的颜色 |
| codeFocusedBorderColor | string | #1192F6 | NO | 当前获得焦点的文本框的颜色 |
| codeViewWidth | number | 根据验证码个数自动计算 | NO | 文本框的宽度 |
| codeBorderWidth | number | 1 | NO | 文本框的粗细 |
| codeBorderRadius | number | 5 | NO | 文本框的圆角大小 |
| codeFontSize | number | default | NO | 文本的大小 |
| codeFontColor | string | #222222 | NO | 文本的颜色 |

## **APIs**

| Name | isRequired | Description |
|:-:|:-:|:-:|
| onInputCompleted | NO | 输入完成时，回调的方法 |
| reset | NO | 清空输入的内容，并将焦点设置在第一个输入框，**使用ref调用** |



