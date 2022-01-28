import { writable } from "svelte/store";

interface User {
    id: string;
}

export const user = writable<User>()


