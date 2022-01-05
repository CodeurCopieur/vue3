<template>
<!--  @submit.prevent="submitForm" -->
<form class="bg-white shadow-md rounded px-8 py-8 mb-4">
  <h1 class="text-2xl font-bold text-gray-800 mb-6">S'inscrire</h1>

  <div class="flex flex-wrap -mx-3 mb-6">

    <div class="mb-6 w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <input type="text" 
        class="appearance-none border-b w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outlin"
        id="username" placeholder="First name"
        v-model.trim="v$.firstname.$model" :class="{'border-red-500':v$.firstname.$error, 'border-green-500': !v$.firstname.$invalid}">
      <p class="text-red-500 text-xs italic">Your first name is valid !</p>
      <p class="text-red-500 text-xs italic"
        v-if="!v$.firstname.required">Your first name is required !</p>
      <p class="text-red-500 text-xs italic"
        v-if="!v$.firstname.minLength">First name must have at least {{ v$.firstname.$params.minLength.min }} letters !</p>
      <p class="text-red-500 text-xs italic"
        v-if="!v$.firstname.maxLength">First name must have at most {{ v$.firstname.$params.maxLength.max }} letters !</p>
    </div>

    <div class="mb-6 w-full md:w-1/2 px-3">
      <input type="text" 
        class="appearance-none border-b w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outlin"
        id="username" placeholder="Lastname"
        v-model.trim="v$.lastname.$model" :class="{'border-red-500':v$.lastname.$error, 'border-green-500': !v$.lastname.$invalid}">
      <p class="text-red-500 text-xs italic">Your lastname is valid !</p>
      <p class="text-red-500 text-xs italic"
        v-if="!v$.lastname.required">Your lastname is required !</p>
      <p class="text-red-500 text-xs italic"
        v-if="!v$.lastname.minLength">Lastname must have at least {{ v$.lastname.$params.minLength.min }} letters !</p>
      <p class="text-red-500 text-xs italic"
        v-if="!v$.lastname.maxLength">Lastname must have at most {{ v$.lastname.$params.maxLength.max }} letters !</p>
    </div>
  </div>

  <div class="mb-6">
    <input type="number" 
      class="appearance-none border-b w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outlin"
      id="username" placeholder="Lastname"
      v-model.number.trim="v$.age.$model" :class="{'border-red-500':v$.age.$error, 'border-green-500': !v$.age.$invalid}">
    <p class="text-red-500 text-xs italic">Your age is valid !</p>
    <p class="text-red-500 text-xs italic"
       v-if="!v$.age.between">Must be between {{ v$.age.$params.between.min }} and  {{ v$.age.$params.between.max }} </p>
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
      age: 0
    })

    const validation = computed(() => {
      return {
        firstname: { required, minLength: minLength(3), maxLength: maxLength(10) },
        lastname: { required, minLength: minLength(5), maxLength: maxLength(12) },
        age: { between: between(15, 40) }
      }
    })

    const v$ = useValidate(validation, state)

    const submitForm = (e) => {
      console.log(this.v$);
      this.v$.$validate()
    }

    return {
      submitForm,
      v$,
      state
    }
  }
}
  
</script>