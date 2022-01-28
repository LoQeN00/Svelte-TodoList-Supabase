<script lang="typescript">
    let todo: string = "";

    import {addTodo} from "../stores/todoStore"

    const handleSubmit = () => {
        addTodo(todo)
        todo = ""
        console.log("submitted")
    }

</script>


<form class="my-6" on:submit|preventDefault={handleSubmit}>
    <div class="flex flex-col text-sm mb-2">
        <label class="font-bold mb-2 text-gray-800" for="todo">Todo</label>
        <input bind:value={todo} type="text" name="todo" placeholder="What is your goal for today ?"
         class="appearance-none shadow-sm border border-gray-200 p-2 focus:outline-none focus:border-gray-500 rounded-lg">
    </div>
   <button type="submit" class="w-full shadow-sm rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4">Submit</button>
</form>




<style>

</style>