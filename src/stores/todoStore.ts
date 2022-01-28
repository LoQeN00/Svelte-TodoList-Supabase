import { writable } from "svelte/store";
import type TodoType from "../interfaces/TodoInterface"


export const todos = writable<TodoType[]>([])


export const addTodo = (text:string): void => {

    todos.update(cur => {

        const newTodo: TodoType = {
            text,
            completed: false,
            id: Date.now()
        }

        return [...cur,newTodo]
        
    })
}


export const deleteTodo = (id:number) => {

    todos.update(todos => {
        return todos.filter(todo => todo.id !== id)
    })

}


export const toggleTodoCompleted = (id:number) => {

    todos.update(todos => {
        const index = todos.findIndex(todo => todo.id === id)

        if (index === -1) return
        
        todos[index].completed = !todos[index].completed

        return todos
    })
    
}

