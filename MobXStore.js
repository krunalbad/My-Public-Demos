import React from "react";
import { observable, action, computed } from "mobx";
import AsyncStorage from '@react-native-community/async-storage';

class TodoStore {
    @observable todoInput = React.createRef();
    @observable filter = "all";
    @observable beforeEditCache = "";
    @observable idForTodo = 3;
    @observable todos = [
        {
            id: 1,
            title: "Finish MobX Screencast",
            completed: false,
            editing: false,
        },
        {
            id: 2,
            title: "Take over MobX world",
            completed: false,
            editing: false,
        },
    ];


    @action getData = async () => {
        try {
            const value = await AsyncStorage.getItem('TODOS')
            if (value !== null) {
                this.todos = JSON.parse(value)
            }
        } catch (e) {
            // error reading value
        }
    }




    @action addTodo = async (event) => {
        if (event.key === "Enter") {
            const todoInput = this.todoInput.current.value;

            if (todoInput.trim().length === 0) {
                return;
            }

            this.todos.push({
                id: this.idForTodo,
                title: todoInput,
                completed: false,
                editing: false,
            });
            await AsyncStorage.setItem('TODOS', JSON.stringify(this.todos))


            this.idForTodo++;
            this.todoInput.current.value = "";
        }
    };

    @action deleteTodo = async (id) => {
        const index = this.todos.findIndex((item) => item.id === id);

        this.todos.splice(index, 1);
        await AsyncStorage.setItem('TODOS', JSON.stringify(this.todos))

    };

    @action checkTodo = async (todo, event) => {
        todo.completed = !todo.completed;

        const index = this.todos.findIndex((item) => item.id === todo.id);

        this.todos.splice(index, 1, todo);
        await AsyncStorage.setItem('TODOS', JSON.stringify(this.todos))

    };

    @action editTodo = async (todo, event) => {
        todo.editing = true;
        this.beforeEditCache = todo.title;

        const index = this.todos.findIndex((item) => item.id === todo.id);

        this.todos.splice(index, 1, todo);
        await AsyncStorage.setItem('TODOS', JSON.stringify(this.todos))

    };

    @action doneEdit = async (todo, event) => {
        todo.editing = false;

        if (event.target.value.trim().length === 0) {
            todo.title = this.beforeEditCache;
        } else {
            todo.title = event.target.value;
        }

        const index = this.todos.findIndex((item) => item.id === todo.id);

        this.todos.splice(index, 1, todo);
        await AsyncStorage.setItem('TODOS', JSON.stringify(this.todos))

    };

    @action cancelEdit = async (todo, event) => {
        todo.title = this.beforeEditCache;
        todo.editing = false;

        const index = this.todos.findIndex((item) => item.id === todo.id);

        this.todos.splice(index, 1, todo);
        await AsyncStorage.setItem('TODOS', JSON.stringify(this.todos))

    };

    @action checkAllTodos = async (event) => {
        this.todos.forEach((todo) => (todo.completed = event.target.checked));
        await AsyncStorage.setItem('TODOS', JSON.stringify(this.todos))

    };

    @action updateFilter = async (filter) => {
        this.filter = filter;
    };

    @action clearCompleted = async () => {
        this.todos = this.todos.filter((todo) => !todo.completed);
        await AsyncStorage.setItem('TODOS', JSON.stringify(this.todos))

    };

    @computed get todosCompletedCount() {
        return this.todos.filter((todo) => todo.completed).length;
    }

    @computed get todosFiltered() {
        if (this.filter === "all") {
            return this.todos;
        } else if (this.filter === "active") {
            return this.todos.filter((todo) => !todo.completed);
        } else if (this.filter === "completed") {
            return this.todos.filter((todo) => todo.completed);
        }

        return this.todos;
    }

    @computed get remaining() {
        return this.todos.filter((todo) => !todo.completed).length;
    }

    @computed get anyRemaining() {
        return this.remaining !== 0;
    }
}

const store = new TodoStore();
export default store;
