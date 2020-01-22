/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import Main from './App/Main'
import Test from './App/Test/ViewTest'

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <>
        <StatusBar backgroundColor="#000"  barStyle="light-content" />
        <Test />
      </>
    );
  }
}

