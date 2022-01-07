<template>
<!--  @submit.prevent="submitForm" -->
<form class="bg-white shadow-md rounded px-8 py-8 mb-4" @submit.prevent="submitForm">
  <h1 class="text-2xl font-bold text-gray-800 mb-6">S'inscrire</h1>

  <div class="flex flex-wrap -mx-3 mb-6">

    <div class="mb-6 w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <input type="text" 
        class="appearance-none border-b w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outlin"
        id="username" placeholder="First name"
        v-model.trim="v$.firstname.$model" :class="{'border-red-500':v$.firstname.$error, 'border-green-500': !v$.firstname.$invalid}">
      <p class="text-green-500 text-xs italic" v-if="!v$.firstname.$invalid">Votre prénom est valide !</p>
      <p class="text-red-500 text-xs italic"
        v-if="v$.firstname.$error">{{v$.firstname.$errors[0].$message}}</p>
    </div>

    <div class="mb-6 w-full md:w-1/2 px-3">
      <input type="text" 
        class="appearance-none border-b w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outlin"
        id="username" placeholder="Lastname"
        v-model.trim="v$.lastname.$model" :class="{'border-red-500': v$.lastname.$error, 'border-green-500': !v$.lastname.$invalid}">
      <p class="text-green-500 text-xs italic" v-if="!v$.lastname.$invalid">Votre nom est valide !</p>
      <p class="text-red-500 text-xs italic"
        v-if="v$.lastname.$error">{{v$.lastname.$errors[0].$message}}</p>
    </div>
  </div>

  <div class="mb-6">
    <input type="text" 
      class="appearance-none border-b w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outlin"
      id="username" placeholder="Username"
      v-model.trim="v$.username.$model" :class="{'border-red-500':v$.username.$error, 'border-green-500': !v$.username.$invalid}">
    <p class="text-red-500 text-xs italic"
       v-if="v$.username.$error">{{v$.username.$errors[0].$message}}</p>
  </div>

  <div class="mb-6">
    <input type="text" 
      class="appearance-none border-b w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outlin"
      id="username" placeholder="Email"
      v-model.trim="v$.email.$model" :class="{'border-red-500':v$.email.$error, 'border-green-500': !v$.email.$invalid}">
    <p class="text-red-500 text-xs italic" 
        v-if="v$.email.$error">{{v$.email.$errors[0].$message}}</p>
  </div>

  <div class="flex items-center justify-center">
    <button
          class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit">Sign In</button>
  </div>
</form>
</template>

<script>
import useValidate from '@vuelidate/core'
import {required, minLength, maxLength, helpers, between} from '@vuelidate/validators'
import {reactive, computed} from 'vue'

export default {
  name:' FormValidation',
  setup() {
    const state = reactive({
      firstname: '',
      lastname: '',
      username: '',
      email: '',
    })

    const validation = computed(() => {
      return {
        firstname: { 
          required: helpers.withMessage('le champ est vide', required), 
          minLength: helpers.withMessage(({ $pending, $invalid, $params, $model }) => `Ce champ a une valeur de '${$model}' mais doit avoir une longueur minimale de ${$params.min} donc c'est ${$invalid ? 'invalide' : 'valide'}`, minLength(4)), 
          maxLength: maxLength(10) 
        },
        lastname: { 
          required: helpers.withMessage('le champ est vide', required), 
          minLength: helpers.withMessage(({ $pending, $invalid, $params, $model }) => `Ce champ a une valeur de '${$model}' mais doit avoir une longueur minimale de ${$params.min} donc c'est ${$invalid ? 'invalide' : 'valide'}`, minLength(5)), 
          maxLength: maxLength(12) 
        },
        username: { 
          required: helpers.withMessage('le champ est vide', required),
          isUnique(val) {
            if(val === '') return true 

            return new Promise( resolve => {
              setTimeout(()=> {
                resolve( typeof value === 'string' && value.length % 2 !== 0)
              }, 350 + Math.random() * 300)
            })
          }
        },
        email: { 
          required: helpers.withMessage('le champ est vide', required),
          isUnique(val) {
            if(val === '') return true 

            var email_regrex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            return new Promise( resolve => {
              setTimeout(()=> {
                resolve( email_regrex.test(val))
              }, 350 + Math.random() * 300)
            })
          }
        }
      }
    })

    const v$ = useValidate(validation, state)

    return {
      v$,
      state
    }
  },
    methods: {
      submitForm(e) {
          console.log(this.v$);
          this.v$.$validate()
      }
    }
}
  
</script>