<script lang=ts>
    import {supabase} from "../utils/supabase"
    import {user} from "../stores/authStore"

    let loading = false;

    let email;

    const handleLogin = async () => {

        try {
            loading = true
            const {error} = await supabase.auth.signIn({email}, {redirectTo: "https://todos-svelte-supabase.vercel.app/"})

            if (error) throw error

            alert("Check your email for the login link!")

        } catch(e) {
            console.log(e)
        }finally {
            loading = false
        }
    }

</script>


<h1 class="text-2xl font-bold text-center text-gray-800 md:text-3xl">Log In</h1>
<p class="text-center mt-2">Sign in via magic link with your email below.</p>


<form on:submit|preventDefault={handleLogin}>

    <div class="flex flex-col text-sm mb-2">
        <label for="email" class="font-bold mb-2 text-gray-800 ">Email</label>
        <input
         bind:value={email}
         placeholder="Your email"
         class="appearance-none shadow-sm border border-gray-200 p-2 focus:outline-none focus:border-gray-500 rounded-lg"
         name="email"
         type="text"/>
    </div>

    <button class="w-full shadow-sm rounded bg-blue-500 hover:bg-blue-600 py-2 px-4 text-white" type="submit">Log In</button>

</form>

<style>

</style>