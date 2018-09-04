/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, Alert, TextInput } from 'react-native';

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
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }
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

  onInputChangeText = (text) => {
    this.setState({ text });
  }

  blur = () => this.verifycode.blur()

  reset = () => this.verifycode.reset()

  bindRef = (ref) => { this.verifycode = ref; }

  render() {
    return (
      <View style={styles.container}>
        <SMSVerifyCode
          ref={this.bindRef}
          autoFocus
          verifyCodeLength={4}

          // containerStyle={}
          containerPaddingVertical={30}
          containerPaddingTop={60}
          containerPaddingBottom={10}
          // containerPaddingHorizontal={}
          containerPaddingLeft={40}
          containerPaddingRight={10}
          containerBackgroundColor="blue"

          // codeViewStyle={}
          codeViewBorderColor="black"
          focusedCodeViewBorderColor="red"
          codeViewWidth={35}
          codeViewHeight={40}
          codeViewBorderWidth={1}
          codeViewBorderRadius={20}
          codeViewBackgroundColor="white"

          // codeStyle={}
          codeFontSize={20}
          codeColor="yellow"

          secureTextEntry
          // coverStyle={}
          coverRadius={21}
          coverColor="blue"

          onInputCompleted={this.onInputCompleted}

          onInputChangeText={this.onInputChangeText}

          warningTitle="haha"
          warningContent="no number"
          warningButtonText="okok"
        />
        <Text>{`changeText:${this.state.text}`}</Text>
        <TextInput
          placeholder="1234566"
          style={{ width: 200, height: 60, backgroundColor: 'red' }}
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
