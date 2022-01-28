<script>
    import "../app.css"
    import {supabase} from "../utils/supabase"
    import {user} from "../stores/authStore"
    import Auth from "../components/Auth.svelte";
    import { loadTodos } from "../stores/todoStore";
    import Navbar from "../components/Navbar.svelte"

    console.log(supabase)

    user.set(supabase.auth.user())

    supabase.auth.onAuthStateChange((_,session) => {
        user.set(session?.user)

        if (session?.user) {
            loadTodos()
        }
    })

    if (user) loadTodos()

    
</script>

<div class="container mx-auto my-6 max-w-lg">
    {#if $user}
        <Navbar />
        <slot></slot>
    {:else}    
        <Auth />
    {/if}
    
</div>



<style>


</style>