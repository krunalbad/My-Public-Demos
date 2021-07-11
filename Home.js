import React, { Component } from 'react';
import { View, TextInput, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import { inject, observer } from 'mobx-react';
import { SwipeItem, SwipeButtonsContainer } from 'react-native-swipe-item';
import { Header, ListItem, Text, Button } from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';



@inject('ToDoStore')
@observer
export default class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            text: ''
        }
    }

    componentWillMount = async () => {
        try {
            const value = await AsyncStorage.getItem('MyTodos')
            if (value !== null) {
                const { ToDoStore } = this.props
                ToDoStore.setAllTodosOnLoad(JSON.parse(value))
            }
        } catch (e) {
            // error reading value
        }
    }

    emptyStorage = () => {
        const { ToDoStore } = this.props
        ToDoStore.setAllTodosOnLoad([])
    }


    onChangeText = (text) => {
        try {
            if (text != '' && text != null && text != undefined) {
                this.setState({ text })
            }
        } catch (error) {
            alert('Something went wrong')
        }
    }

    SubmitData = () => {
        try {
            const { text } = this.state
            if (text != '' && text != null && text != undefined) {
                this.setState({ text: '' })
                const { ToDoStore } = this.props
                const mytodo = {
                    title: text,
                    status: false,
                    date: new Date()
                }
                ToDoStore.setProperty(mytodo)
            } else {
                alert('Please enter todo title!')
            }
        } catch (error) {
            alert('Something went wrong')
        }

    }

    // onLeftButtonsShowed = (data) => {
    //     console.log(data)
    // }

    swipeRender(index) {
        return (
            <SwipeButtonsContainer style={styles.swipcercell}>
                <TouchableOpacity onPress={() => this.markTodo(index)} >
                    <Text>Mark</Text>
                </TouchableOpacity>
            </SwipeButtonsContainer>
        );
    }

    swipeDelete(index) {
        return (
            <SwipeButtonsContainer style={styles.swipcercell}>
                <TouchableOpacity onPress={() => this.deleteTodo(index)} >
                    <Text>Delete</Text>
                </TouchableOpacity>
            </SwipeButtonsContainer>
        );
    }


    markTodo(index) {
        try {
            const { ToDoStore } = this.props
            ToDoStore.markTodo(index, !ToDoStore.todos[index]['status'])
        } catch (error) {
            alert('Something went wrong')
        }
    }

    deleteTodo(index) {
        try {
            const { ToDoStore } = this.props
            ToDoStore.deleteTodo(index)
        } catch (error) {
            alert('Something went wrong')
        }
    }


    render() {
        const { todos } = this.props.ToDoStore
        const { text } = this.state

        return (
            <>
                <SafeAreaView style={styles.SafeAreaViewcontainer}>

                    <Header
                        // leftComponent={{ icon: 'menu', color: '#fff' }}
                        // rightComponent={{ icon: 'home', color: '#fff' }}
                        centerComponent={{ text: 'MY TODOS', style: { color: '#fff' } }}
                    />

                    <View style={{ margin: 10 }}>
                        <TextInput
                            value={text}
                            placeholder={'Add Todo'}
                            onChangeText={this.onChangeText}
                        />

                        <View style={styles.buttonrow}>
                            <Button
                                title="Submit"
                                containerStyle={styles.buttonsubmit}
                                onPress={this.SubmitData}
                            />
                            <Button
                                title="Delete All"
                                containerStyle={styles.buttonsubmit}
                                onPress={this.emptyStorage}
                            />
                        </View>

                        {todos.length > 0 &&
                            <>
                                <View>
                                    <Text h1 style={styles.todomaintitle}>My Todos</Text>
                                </View>
                                {todos.map((data, index) => {
                                    return (
                                        <SwipeItem
                                            key={index}
                                            style={styles.button}
                                            swipeContainerStyle={styles.swipeContentContainerStyle}
                                            // onLeftButtonsShowed={() => this.onLeftButtonsShowed(index)}
                                            leftButtons={this.swipeRender(index)}
                                            rightButtons={this.swipeDelete(index)}
                                        >
                                            <ListItem
                                                titleStyle={{ color: data.status ? 'green' : 'red' }}
                                                style={styles.listiem}
                                                title={data.title}
                                            />
                                        </SwipeItem>

                                    )
                                })}
                            </>
                        }
                    </View>
                </SafeAreaView>
            </>
        );
    }
}





const styles = StyleSheet.create({
    SafeAreaViewcontainer: { flex: 1, width: '100%' },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        height: 55,
        marginTop: 10,
        backgroundColor: 'white',
    },
    swipcercell: {
        alignSelf: 'center',
        aspectRatio: 1,
        flexDirection: 'column',
        padding: 10,
    },
    swipeContentContainerStyle: {
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 1,

    },
    listiem: {
        backgroundColor: 'white',
        borderColor: 'transparent', borderRadius: 10, width: '98%', paddingLeft: 10
    },
    buttonsubmit: {
        width: '100%',
        flex: 1,
        justifyContent: 'space-between',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 20,
        marginBottom: 20,
    },
    buttonrow: {
        flexDirection: 'row'
    },
    todomaintitle: { fontSize: 20, fontWeight: 'bold', marginLeft: 10 }
});