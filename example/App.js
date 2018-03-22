/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from 'react-native'
import SMSVerifyCode from 'react-native-sms-verifycode'

class App extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <StatusBar
            animated
            translucent
            backgroundColor={'transparent'}
            barStyle={'dark-content'}
          />
          <Text style={styles.welcome}>
            Enter the Verification Code!
          </Text>
          <View style={styles.blank} />
          <SMSVerifyCode
            ref={ref => (this.verifycode = ref)}
            onInputCompleted={this.onInputCompleted}
            verifyCodeLength={4}
          />
          <View style={styles.blank} />
          <SMSVerifyCode
            ref={ref => (this.verifycode = ref)}
            onInputCompleted={this.onInputCompleted}
            verifyCodeLength={5}
          />
          <View style={styles.blank} />
          <SMSVerifyCode
            ref={ref => (this.verifycode = ref)}
            onInputCompleted={this.onInputCompleted}
            verifyCodeLength={6}
          />
          <View style={styles.blank} />
          <SMSVerifyCode
            onInputCompleted={this.onInputCompleted}
            verifyCodeLength={5}
            containerPaddingVertical={10}
            containerPaddingHorizontal={50}
            containerBackgroundColor={'#8DC647'}
          />
          <View style={styles.blank} />
          <SMSVerifyCode
            onInputCompleted={this.onInputCompleted}
            verifyCodeLength={5}
            containerPaddingVertical={40}
            containerPaddingHorizontal={50}
            containerBackgroundColor={'#FFCF30'}
          />
          <View style={styles.blank} />
          <SMSVerifyCode
            onInputCompleted={this.onInputCompleted}
            verifyCodeLength={5}
            codeBorderColor={'#000000'}
            codeFocusedBorderColor={'#0000FF'}
            codeBorderWidth={3}
          />
          <View style={styles.blank} />
          <SMSVerifyCode
            onInputCompleted={this.onInputCompleted}
            verifyCodeLength={5}
            codeBorderColor={'#000000'}
            codeFocusedBorderColor={'#0000FF'}
            codeBorderWidth={3}
            codeBorderRadius={26}
            codeFontSize={26}
            // codeFontColor={'#89C047'}
          />
          <View style={styles.blank} />
          <SMSVerifyCode
            onInputCompleted={this.onInputCompleted}
            verifyCodeLength={5}
            codeFontSize={26}
            codeFontColor={'#E45CBD'}
          />
          <TouchableOpacity
            onPress={this.reset}
            style={styles.button}
            activeOpcity={0}
          >
            <Text style={styles.welcome}>
              Reset
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    )
  }

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
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FEFFFE',
    paddingTop: 30,
    paddingBottom: 300,
  },
  blank: {
    height: 20,
  },
  welcome: {
    color: '#191E24',
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
  },
  button: {
    justifyContent: 'center',
    backgroundColor: '#1193F6',
    paddingHorizontal: 25,
    borderRadius: 10,
    marginTop: 40,
  },
})

export default App
