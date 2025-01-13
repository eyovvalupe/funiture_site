<template>
    <div class="auth-container">
        <div class="w-[400px] p-10 mx-auto border-[2px] rounded-[20px] flex flex-col justify-between">
            <h2 class="text-[32px]">{{ $t('auth.login') }}</h2>
            <form class="h-[250px] flex flex-col justify-between" @submit.prevent="handleLogin">
                <div class="form-group mt-[20px]">
                    <label class="font-bold" for="email">{{ $t('auth.email') }}</label>
                    <input type="text" v-model="email" id="email" :placeholder="$t('auth.email')" required />
                </div>
                <div class="form-group">
                    <label class="font-bold" for="password">{{ $t('auth.login') }}</label>
                    <input type="password" v-model="password" id="password" :placeholder="$t('auth.enterPwd')"
                        required />
                </div>
                <button type="submit">{{ $t('auth.login') }}</button>
            </form>
            <p class="mt-[20px]">{{ $t('auth.noAccount') }} <router-link to="/register" class="text-[#3B3B98]">{{ $t('auth.register') }}</router-link></p>
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