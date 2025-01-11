<template>
    <div class="auth-container">
        <div
            class="w-[300px] h-[500px] mx-auto border-[2px] rounded-[20px] px-[20px] py-[20px] flex flex-col justify-between">
            <h2 class="text-[32px]">Register</h2>
            <form @submit.prevent="handleRegister">
                <div class="form-group">
                    <label for="username">Username</label>
                    <input type="text" v-model="username" id="username" placeholder="Enter your username" required />
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" v-model="email" id="email" placeholder="Enter your email" required />
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" v-model="password" id="password" placeholder="Enter your password"
                        required />
                </div>
                <div class="form-group">
                    <label for="confirmPassword">Confirm Password</label>
                    <input type="password" v-model="confirmPassword" id="confirmPassword"
                        placeholder="Confirm your password" required />
                </div>
                <button type="submit">Register</button>
            </form>
            <p>Already have an account? <router-link to="/login">Login</router-link></p>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { _register } from '@/api/api';

const router = useRouter();
const username = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const error = ref()

const handleRegister = () => {
    if (password.value !== confirmPassword.value) {
        alert('Passwords do not match!');
        return;
    }

    _register({ name: username.value, email: email.value, password: password.value })
        .then(res => {
            console.log(res.data)
            router.push({name: 'login'});
        })
        .catch(err => {
            error.value = err.response.data.msg;
            if (error.value) alert(error.value)
        })
        .finally(() => {

        })

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