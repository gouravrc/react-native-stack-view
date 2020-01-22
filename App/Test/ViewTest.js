/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Text, Button, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Main from '../Main'
import styles from '../Styles/ViewStyles'
import * as Animatable from 'react-native-animatable';


export default class Test extends Component {

    constructor(props) {
        super(props);
        this.state = {
            trigger: false,
            fadeStackDown: false,
            triggerStack: 0,
            name: undefined,
            details: undefined,
            time: undefined,
            task: []
        }
    }

    componentWillReceiveProps() {
        this.setState({
            task: this.state.task
        })
    }
    switchTrigger(id) {
        if (id == 1) {
            this.setState({
                trigger: 1,
                fadeStackDown: false

            }, () => {
                this.forceUpdate()
            })
        }
        else {
            this.setState({
                trigger: 2,
                fadeStackDown: true
            }, () => {
                if (this.state.name) {
                    var arr = this.state.task

                    var object = {
                        name: this.state.name,
                        details: this.state.details ? this.state.details : "-",
                        time: this.state.time ? this.state.time : " "
                    }
                    arr.push(object)
                    this.setState({
                        task: arr,
                        name: undefined,
                        details: undefined,
                        time: undefined,
                    }, () => {
                    })
                }
            })
        }
    }


    headerView() {
        const title = { fontSize: 24, color: "#39C55E", fontWeight: 'bold' }
        const details = { fontSize: 16, color: "#9AC69A", fontWeight: 'bold' }
        const time = { fontSize: 18, color: "#FE2D54", fontWeight: 'bold' }
        const headerText = { fontSize: 30, color: '#027AFA', fontFamily: 'Arial', fontWeight: 'bold', top: 10 }
        return (
            <View style={styles.headerCont}>
                <View style={styles.header}>
                    <Text style={headerText}>Add todo</Text>
                </View>
                <ScrollView style={styles.contentDiv}>
                    {this.state.task.length > 0 ?
                        this.state.task.map((item, i) =>
                            <View style={styles.cardDiv}>
                                <View style={styles.card}>
                                    <View>
                                        <Text style={title}>{item.name}</Text>
                                        <Text style={details}>{item.details}</Text>
                                    </View>
                                    <View style={{ top: 20 }}>
                                        <Text style={time}>{item.time}</Text>
                                    </View>
                                </View>
                            </View>
                        )
                        :
                        <View style={styles.emptyDiv}>
                            <Text style={{ fontWeight: 'bold' }}>There is no task at the moment :(</Text>
                        </View>
                    }
                </ScrollView>
                <TouchableOpacity onPress={() => this.switchTrigger(1)} style={styles.footer}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#027AFA', bottom: 10 }}>Add Task</Text>
                    {/* <Button title={'Add task'} onPress={() => this.switchTrigger(1)}></Button> */}

                </TouchableOpacity>
            </View>
        )
    }

    stackView() {
        return (
            <View style={styles.stackCont}>
                <View style={styles.stackDiv}>
                    <Text style={{ fontSize: 24, fontFamily: 'Arial', fontWeight: 'bold', top: 10 }}>Enter task details</Text>
                    <View style={{ top: 5 }}>
                        <TouchableOpacity onPress={() => this.switchTrigger(2)} style={styles.done_button}>
                            <Text>Done</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.stackContentDiv}>
                    <View style={styles.inputDiv}>
                    {this.state.name ?
                        <View style={{width:200,height:10}}>
                            <Animatable.Text animation={'slideInLeft'} iterationCount={1}>Task name</Animatable.Text>
                        </View>
                        : null
                    }
                    <TextInput
                        style={{fontWeight:"bold", width: '95%', height: 70, color: 'black', fontSize: 20, borderBottomColor: 'grey', borderBottomWidth: 0.8 }}
                        placeholder={"Task name"}
                        value={this.state.name}
                        onChangeText={(text) => this.setState({ name: text })}
                    />
                    </View>

                    <View style={styles.inputDiv}>
                    {this.state.details ?
                        <View style={{width:50,height:10}}>
                            <Animatable.Text animation={'slideInLeft'} iterationCount={1}>Details</Animatable.Text>
                        </View>
                        : null
                    }
                    <TextInput
                        style={{fontWeight:'bold', width: '90%', height: 70, color: 'black', fontSize: 20, borderBottomColor: 'grey', borderBottomWidth: 0.8 }}
                        placeholder={"Details"}
                        value={this.state.details}
                        onChangeText={(text) => this.setState({ details: text })}
                    />
                    </View>
                    <View style={styles.inputDiv}>
                    {this.state.time ?
                        <View style={{width:200,height:10}}>
                            <Animatable.Text animation={'slideInLeft'} iterationCount={1}>Time</Animatable.Text>
                        </View>
                        : null
                    }
                    <TextInput
                        style={{fontWeight:"bold", width: '90%', height: 70, color: 'black', fontSize: 20, borderBottomColor: 'grey', borderBottomWidth: 0.8 }}
                        placeholder={"Time"}
                        value={this.state.time}
                        onChangeText={(text) => this.setState({ time: text })}
                    />
                    </View>
                </View>
            </View>
        )
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'black' }}>
                <Main
                    renderView={this.headerView()}
                    triggerStack={this.state.trigger}
                    stackView={this.stackView()}
                    fadeStackDown={this.state.fadeStackDown}
                />
            </View>
        );
    }
}


