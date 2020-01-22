/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, FlatList } from 'react-native';
import * as Animatable from 'react-native-animatable';

export default class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            destroyStackView:false
        }
    }

    destroyStackView(){
        this.setState({
            destroyStackView : true
        })

    }
    render() {
        const fadeIn = {
            from: {
                width: '100%',
                height: '100%'
            },
            to: {
                width: '95%',
                height: '95%',
            },
        };

        const fadeOut = {
            from: {
                width: '95%',
                height: '95%',
            },
            to: {
                width: '100%',
                height: '100%'
            },
        };
        return (
            <View style={{ flex: 1 }}>
                {this.props.triggerStack == 1 ?
                    <View style={styles.container}>
                        <Animatable.View animation={fadeIn} iterationCount={1} >{this.props.renderView}</Animatable.View>
                        <Animatable.View
                            style={styles.stackBox}
                            easing="linear"
                            duration={400}
                            animation={"fadeInUpBig"}
                            iterationCount={1}
                        >{this.props.stackView}
                        </Animatable.View>
                    </View>
                    : this.props.triggerStack == 2 ?
                        <View style={{
                            width: '100%',
                            height: '100%',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Animatable.View
                                animation={fadeOut}
                                iterationCount={1}
                            >{this.props.renderView}
                            </Animatable.View>

                            {this.props.fadeStackDown ?
                                <Animatable.View
                                    style={this.state.destroyStackView == true ?styles.destroystackBox:styles.stackBox}
                                    animation={"fadeOutDownBig"}
                                    easing="ease-in-out"
                                    onAnimationEnd={()=>this.destroyStackView()}
                                    duration={250}
                                    iterationCount={1}
                                >{this.props.stackView}
                                </Animatable.View> : null
                            }    
                        </View> :
                        <View style={styles.container_initial}>
                            <View >{this.props.renderView}</View>
                        </View>
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    container_initial: {
        width: '100%',
        height: '100%',
        flexDirection: 'column',
    },
    stackBox: {
        flexDirection: 'column',
        width: '100%',
        height: '92%',
        position: "absolute",
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 20,
        elevation: 5,

    },
    destroystackBox:{
        flexDirection: 'column',
        width: '100%',
        height: '2%',
        position: "absolute",
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 20,
        elevation: 5,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
