<script lang=ts>
    import {todos} from "../stores/todoStore"
    import Todo from "../components/Todo.svelte"
</script>


    <div>
        {#each $todos as todo}
            <Todo todo={todo} />
        {/each}
    </div>


<style>

</style>