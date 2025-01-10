<template>
    <div class="auth-container">
        <div class="w-[300px] h-[400px] mx-auto border-[2px] rounded-[20px] px-[20px] py-[20px] flex flex-col justify-between">
            <h2>Login</h2>
            <form class="h-[250px] flex flex-col justify-between" @submit.prevent="handleLogin">
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="text" v-model="email" id="email" placeholder="Enter your email" required />
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" v-model="password" id="password" placeholder="Enter your password"
                        required />
                </div>
                <button type="submit">Login</button>
            </form>
            <p>Don't have an account? <router-link to="/register">Register</router-link></p>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { _login } from '@/api/api';
import store from '@/store';

const email = ref('');
const password = ref('');
const router = useRouter();

const handleLogin = () => {
    _login({name: email.value, password: password.value})
    .then(res => {
        console.log(res.data);
        store.commit('setToken', res.data.refresh_token);
        router.push({name: 'home'});
        store.dispatch("updateUserInfo")
    })    
    .catch(err => console.error(err))
    .finally(() => {})
};
</script>

<style scoped>
.auth-container {
    width: 100%;
    margin: 0 auto;
    padding: 200px 20px;
}

.form-group {
    margin-bottom: 15px;
}

input {
    width: 100%;
    padding: 8px;
    margin-top: 5px;
}

button {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}

p {
    text-align: center;
}
</style>