<template>
    <div>
        <h1>Register</h1>
        <form @submit.prevent="handleSubmit">
            <input
                type="email"
                placeholder="Ingrese email"
                v-model.trim="email"
            />
            <input
                type="password"
                placeholder="Ingrese contraseña"
                v-model.trim="password"
            />
            <button type="submit">Crear usario</button>
        </form>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useUserStore } from "../stores/user";

const userStore = useUserStore();

const email = ref("");
const password = ref("");

const handleSubmit = async () => {
    if (!email.value || password.value < 6) {
        alert("llena los campos");
    } else {
        await userStore.registerUser(email.value, password.value);
    }
};
</script>

<style lang="scss" scoped></style>
