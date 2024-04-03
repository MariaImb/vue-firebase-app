<template>
    <div>
        <nav>
            <RouterLink to="/">Home</RouterLink> |
            <RouterLink to="/register">Register</RouterLink> |
            <RouterLink to="/login">Login</RouterLink> |
            <button @click="handleLogout()">Logout</button>
        </nav>
        <h1>Hello world</h1>
        <RouterView></RouterView>
    </div>
</template>

<script setup>
import { useUserStore } from './stores/user'

const userStore = useUserStore()

const handleLogout = () => {
    userStore.logoutUser()
}
</script>

<style lang="scss" scoped>

</style>

