<script setup>
  import {reactive, computed} from 'vue'
  import {useVuelidate}  from '@vuelidate/core'
  import { required, minLength, helpers, email, sameAs } from '@vuelidate/validators'

  const state = reactive({
    email: '',
    password: {
      password: '',
      confirm: ''
    }
  });

  const rules = computed(()=> {
    return {
      email: { 
        required: helpers.withMessage("Le champ est vide", required), 
        email: helpers.withMessage("La valeur n'est pas une adresse e-mail valide", email) },
      password: {
        password: { 
          required: helpers.withMessage("Mot de passe requis.", required), 
          minLength: helpers.withMessage(({ $pending, $invalid, $params, $model }) =>  `Ce champ a une valeur de '${$model}' mais doit avoir une longueur minimale de ${$params.min} donc c'est ${$invalid ? 'invalide' : 'valide'}`, minLength(6))
        },
        confirm: { 
          // required: helpers.withMessage("Le champ est vide", required),
          sameAs: helpers.withMessage("Les mots de passe ne correspondent pas", sameAs(state.password.password))
        }
      }
    }
  })

  const v$ = useVuelidate(rules, state)

  const submitForm = async ()=> {
    const res = await v$.value.$validate();
    if(res) {
      alert('oui', res);
    } else {
      alert('non');
    }
  };

</script>
<template>
  <div class="auth__form">
    <form action="" @submit.prevent="submitForm">
      <div class="sm:mx-auto md:mx-0 px-4 md:px-0">
        <div>
          <input type="email" 
            v-model.trim="state.email" 
            @blur="v$.email.$touch()"
            :class="{ 'border-red-500' : v$.email.$error, 'border-emerald-500': !v$.email.$invalid}"
            id="email"  class="border-b border-gray-300 text-gray-900 text-sm block w-full p-2.5 mb-4 focus:border-emerald-400 focus:outline-none" placeholder="T'a un mail">
            <p class="text-red-500 text-xs italic" v-for="error in v$.email.$errors" :key="error.$uid"> {{error.$message}}</p>
        </div>
        <div>
          <input type="password" 
            v-model.trim="state.password.password"
            @blur="v$.password.password.$touch()"
            :class="{ 'border-red-500' : v$.password.password.$error, 'border-emerald-500': !v$.password.password.$invalid}" id="password" class="border-b border-gray-300 text-gray-900 text-sm block w-full p-2.5 mb-4 focus:border-emerald-400 focus:outline-none" placeholder="mdp">
            <p class="text-red-500 text-xs italic" v-for="error in v$.password.password.$errors" :key="error.$uid"> {{error.$message}}</p>
        </div>
        <div>
          <input type="password" 
            v-model.trim="state.password.confirm"
            @blur="v$.password.confirm.$touch()"
            :class="{ 'border-red-500' : v$.password.confirm.$error, 'border-emerald-500': !v$.password.confirm.$invalid}" id="confirm" class="border-b border-gray-300 text-gray-900 text-sm block w-full p-2.5 mb-4 focus:border-emerald-400 focus:outline-none" placeholder="confirm ton mdp">
            <p class="text-red-500 text-xs italic" v-for="error in v$.password.confirm.$errors" :key="error.$uid"> {{error.$message}}</p>
        </div>
      </div>

      <button
          class="bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 mt-4 focus:outline-none focus:shadow-outline"
          type="submit">Sign In</button>
    </form>
  </div>
</template>