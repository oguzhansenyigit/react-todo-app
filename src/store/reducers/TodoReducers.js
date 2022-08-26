
import { initialState } from '../InitialState';
import * as actionTypes from './../actions/ActionTypes';


export const todoReducer = (state = initialState.todos,action) => {
    const {type,payload} = action;
    switch (action.type) {
        case actionTypes.ADD_TODO:

            let newTodos = [...state];

            newTodos.push(action.payload); // push => veri eklemek için kullanılır
            return newTodos;

        case actionTypes.DELETE_ALL_TODOS:
            state = [];
            return state;
        case actionTypes.EDIT_TODO:
            const findTodo = state.find(todo => todo.id === payload.id);

            if(findTodo !== -1) { // Bir todo bulundu
                state[findTodo] = {...payload};
            }
            return state;

        case actionTypes.DELETE_TODO:
            const findIndex = state.findIndex(todo => todo.id === action.payload);
            state.splice(findIndex,1);
            return [...state];
            // String,number,boolean
            // boolean == 2 => false
            // '2' == 2 => true
            // '2' === 2 => false

        case actionTypes.ALL_CHECKED_TODOS:
            if(payload == true) {
                state.map(todo => todo.isCompleted = true)
                // jsnin array içindeki tüm elemenların üzerinden gezmemizi sağlayan bir fonksiyonu
            }
            else {
                state.map(todo => todo.isCompleted = false);
            }

            return [...state];

        default:
            return state;

    }

}