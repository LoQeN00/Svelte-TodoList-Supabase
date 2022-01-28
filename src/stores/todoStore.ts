import { writable } from "svelte/store";
import type TodoType from "../interfaces/TodoInterface"
import { supabase } from "../utils/supabase";


export const todos = writable([])


export const loadTodos = async () => {
    const {data,error} = await supabase.from('todos').select()

    if (error) return console.error(error)

    todos.set(data)
}


export const addTodo = async (text:string, user_id) => {

    const {data,error} = await supabase.from('todos').insert([{text,completed: false,user_id}])

    if (error) return console.error(error)


    console.log(data)


    todos.update(cur => {

        return [...cur,data[0]]
        
    })
}


export const deleteTodo = async (id:number) => {

    const {error} = await supabase.from('todos').delete().match({id})

    if (error) return console.error(error)

    todos.update(todos => {
        return todos.filter(todo => todo.id !== id)
    })

}


export const toggleTodoCompleted = async (id:number,currentState: boolean) => {

    const {error} = await supabase.from('todos').update({completed: !currentState}).match({id})

    if (error) return console.error(error)

    todos.update(todos => {
        const index = todos.findIndex(todo => todo.id === id)

        if (index === -1) return
        
        todos[index].completed = !todos[index].completed

        return todos
    })
    
}

