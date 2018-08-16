/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';

import SMSVerifyCode from 'react-native-sms-verifycode';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FEFFFE',
    paddingTop: Platform.OS === 'ios' ? 50 : 20,
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
  codeBorderStyle: {
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderRadius: 0,
  },
});

class App extends Component {
  onInputCompleted = (text) => {
    Alert.alert(
      text,
      '本次输入的验证码',
      [
        {
          text: '确定',
        },
      ],
      { cancelable: false },
    );
  }

  blur = () => this.verifycode.blur()

  reset = () => this.verifycode.reset()

  bindRef = (ref) => { this.verifycode = ref; }

  render() {
    return (
      <View style={styles.container}>
        <SMSVerifyCode
          ref={this.bindRef}
          onInputCompleted={this.onInputCompleted}
          // containerPaddingVertical={10}
          // containerPaddingHorizontal={50}
          // containerBackgroundColor="#8DC647"
          // codeViewBorderColor="#000000"
          // focusedCodeViewBorderColor="#0000FF"
          // codeViewBorderWidth={3}
          // codeViewBorderRadius={16}

          verifyCodeLength={6}
          containerPaddingVertical={10}
          containerPaddingHorizontal={50}
          containerBackgroundColor="#8DC647"
          codeBorderColor="#000000"
          codeFocusedBorderColor="#0000FF"
          codeBorderWidth={3}
          codeBorderRadius={16}
          codeFontSize={20}
          codeFontColor="#D784EB"
          secureTextEntry
          codeViewStyle={styles.codeBorderStyle}
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
        <TouchableOpacity
          onPress={this.blur}
          style={styles.button}
          activeOpcity={0}
        >
          <Text style={styles.welcome}>
            blur
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default App;
