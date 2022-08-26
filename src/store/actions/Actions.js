import { ADD_TODO, ALL_CHECKED_TODOS, DELETE_ALL_TODOS, DELETE_TODO, EDIT_TODO } from "./ActionTypes";


function addTodoActions(todoData) {
    return ({
        type:ADD_TODO,
        payload:todoData
    })
}

function editTodoActions(todoData) {
    return {
        type:EDIT_TODO,
        payload:todoData
    }
}

function deleteTodo(todoId) {
    return {
        type: DELETE_TODO,
        payload: todoId
    }
}

function deleteAllTodos() {
    return {
        type: DELETE_ALL_TODOS
    }
}


function toggleAllTodos(isChecked) {
    return {
        type: ALL_CHECKED_TODOS,
        payload:isChecked
    }
}

export default {
    addTodoActions,
    deleteAllTodos,
    deleteTodo,
    editTodoActions,
    toggleAllTodos
}