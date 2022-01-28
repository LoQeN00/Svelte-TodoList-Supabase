<script lang=ts>
    import type TodoType from "../interfaces/TodoInterface"
    import {deleteTodo,toggleTodoCompleted} from "../stores/todoStore"

    export let todo:TodoType;

</script>

<div class="flex justify-between bg-white items-center shadow-sm border border-gray-200 rounded-lg my-2 py-2 px-4">
    <div class="max-w-[80%] break-words break-all">
        <p class={`text-gray-800 ${todo.completed && 'line-through'}`}>{todo.text}</p>
    </div>
    <input
        name="completed"
        type="checkbox"
        checked={todo.completed}
        on:change={() => toggleTodoCompleted(todo.id)}
        class="mr-2 form-checkbox h-5 w-5"
        />
</div>



<style>

</style>