<template>
    <div class="auth-container">
        <div
            class="w-[400px] p-10 mx-auto border-[2px] rounded-[20px] flex flex-col justify-between">
            <h2 class="text-[32px]">{{ $t('auth.register') }}</h2>
            <form class="mt-[20px]" @submit.prevent="handleRegister">
                <div class="form-group">
                    <label class="font-bold" for="username">{{ $t('auth.username') }}</label>
                    <input type="text" v-model="username" id="username" :placeholder="$t('auth.enterUsername')" required />
                </div>
                <div class="form-group">
                    <label class="font-bold" for="email">{{ $t('auth.email') }}</label>
                    <input type="email" v-model="email" id="email" :placeholder="$t('auth.enterEmail')" required />
                </div>
                <div class="form-group">
                    <label class="font-bold" for="password">{{ $t('auth.password') }}</label>
                    <input type="password" v-model="password" id="password" :placeholder="$t('auth.enterPwd')"
                        required />
                </div>
                <div class="form-group">
                    <label class="font-bold" for="confirmPassword">{{ $t('auth.confirmPwd') }}</label>
                    <input type="password" v-model="confirmPassword" id="confirmPassword" :placeholder="$t('auth.enterPwd')" required />
                </div>
                <button type="submit">{{ $t('auth.register') }}</button>
            </form>
            <p class="mt-[20px]">{{ $t('auth.haveAccount') }} <router-link to="/login" class="text-[#3B3B98]">{{ $t('auth.login') }}</router-link></p>
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