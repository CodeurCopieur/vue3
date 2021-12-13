<template>
  <div class="bg-gray-200 flex content-center justify-center items-center h-full">
    <div class="w-full max-w-sm">
      <form class="bg-white shadow-md rounded px-8 py-8 mb-4" @submit="submitForm">
        <h1 class="text-2xl font-bold text-gray-800 mb-7">Create an account</h1>
        <div class="mb-7">
          <input
            class="
              shadow
              appearance-none
              border
              rounded
              w-full
              py-2
              px-3
              text-gray-700
              leading-tight
              focus:outline-none focus:shadow-outline
            "
            v-model='email'
            id="username"
            type="email"
            placeholder="Username"
          />
        </div>
        <div class="mb-6">
          <input
            class="
              shadow
              appearance-none
              border border-red-500
              rounded
              w-full
              py-2
              px-3
              text-gray-700
              mb-3
              leading-tight
              focus:outline-none focus:shadow-outline
            "
            v-model='password.password'
            id="password"
            type="password"
            placeholder="Password"
          />
          <p class="text-red-500 text-xs italic"></p>
        </div>

        <div class="mb-6">
          <input
            class="
              shadow
              appearance-none
              border border-red-500
              rounded
              w-full
              py-2
              px-3
              text-gray-700
              mb-3
              leading-tight
              focus:outline-none focus:shadow-outline
            "
            v-model="password.confirm"
            id="confirm"
            type="password"
            placeholder="Confirm Password"
          />
          <p class="text-red-500 text-xs italic"></p>
        </div>
        <div class="flex items-center justify-center">
          <button
            class="
              bg-blue-500
              hover:bg-blue-700
              text-white
              font-bold
              py-2
              px-4
              rounded
              focus:outline-none focus:shadow-outline
            "
            type="submit"
          >
            Sign In
          </button>
        </div>
      </form>
      <p class="text-center text-gray-500 text-xs">
        &copy;2020 Acme Corp. All rights reserved.
      </p>
    </div>
  </div>
</template>

<script>

import useValidate from '@vuelidate/core'
import {required} from '@vuelidate/validators'
import {reactive, computed} from 'vue'

export default {
  name: 'Vuelidate',
  data() {
    return {
      v$: useValidate(),
      email: '',
      password: {
        password: '',
        confirm: ''
      }
    }
  },
  validations(){
    return {
      email: {required},
      password: {
        password: {required},
        confirm: {required}
      }
    }
  },
  methods: {
    submitForm(e) {
      e.preventDefault();
      this.v$.$validate()
      if(!this.v$.$error) {
        alert('form success !');
      } else {
        alert('form failed !')
      }
      
    }
  }
}
</script>
