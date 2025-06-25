<script setup>
import Button from './Button.vue';
import Input from './Input.vue';
import Password from './Password.vue';

</script>

<template>
    <div class="bg-white rounded-lg shadow-lg p-8 w-full max-w-md dark:bg-gray-800">
        <div class="mb-6 text-center">
            <h2 class="text-2xl font-bold text-gray-800 mb-2">Login</h2>
            <p class="text-gray-600">Entre com suas credenciais</p>
        </div>

        <form class="space-y-6">
            <Input label="Email" placeholder="Digite seu email" />
            <Password />

            <div class="flex items-center justify-between">
                <div class="flex items-center">
                    <input 
                        type="checkbox" 
                        id="remember"
                        class="h-4 w-4 text-cyan-600 focus:ring-cyan-500 border-gray-300 rounded"
                    />
                    <label for="remember" class="ml-2 block text-sm text-gray-700">
                        Lembrar-me
                    </label>
                    <a href="#" class="text-sm text-cyan-600 hover:text-cyan-500">
                        &nbsp; Esqueceu a senha?
                    </a>
                </div>
            </div>
            <Button />
        </form>

        <div class="mt-6 text-center">
            <p class="text-sm text-gray-600">
                Não tem uma conta? 
                <a href="#" class="text-cyan-600 hover:text-cyan-500 font-medium">
                    Cadastre-se
                </a>
            </p>
        </div>
    </div>
</template>

<style scoped>
</style>
