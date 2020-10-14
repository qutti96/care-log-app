<template>
  <v-form ref="loginForm" v-model="loginFormValidation.valid" lazy-validation>
    <v-layout column justify-center align-center>
      <v-flex xs12 sm8 md6>
        <v-row>
          <v-col>
            <v-card class="mx-auto" min-width="400">
              <div class="v-card__text">
                <v-text-field
                  v-model="loginForm.email"
                  :rules="loginFormValidation.emailRules"
                  label="E-mailアドレス"
                  placeholder="abc@defg.hjk"
                  clearable
                  required
                ></v-text-field>
              </div>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-card class="mx-auto" min-width="400">
              <div class="v-card__text">
                <v-text-field
                  v-model="loginForm.password"
                  :rules="loginFormValidation.pwdRules"
                  label="パスワード"
                  :counter="6"
                  maxlength="10"
                  clearable
                  required
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="show1 ? 'text' : 'password'"
                  hint="6文字以上入力してください"
                  @click:append="show1 = !show1"
                ></v-text-field>
              </div>
            </v-card>
          </v-col>
        </v-row>
        <v-btn class="mr-4" @click="reset">キャンセル</v-btn>
        <v-btn
          :disabled="!loginFormValidation.valid"
          color="teal lighten-1"
          class="mr-4"
          @click="login"
        >
          <span class="white--text font-weight-bold">ログインする</span>
        </v-btn>
      </v-flex>
    </v-layout>
  </v-form>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'
import { auth } from '~/plugins/firebase'

export default {
  data() {
    return {
      show1: false,
      loginForm: {
        email: '',
        password: '',
      },
      loginFormValidation: {
        valid: false,
        emailRules: [
          (v) => !!v || 'メールアドレスは必須項目です',
          (v) => /.+@.+/.test(v) || '正しいE-mail形式でご記入ください',
        ],
        pwdRules: [
          (v) => !!v || 'パスワードは必須項目です',
          (v) => v.length >= 6 || '6文字以上ご入力下さい',
        ],
      },
    }
  },
  // computed: {},
  methods: {
    validate() {
      return this.$refs.loginForm.validate()
    },
    reset() {
      return this.$refs.loginForm.reset()
    },
    login() {
      if (this.validate()) {
        firebase.auth()
          .signInWithEmailAndPassword(
            this.loginForm.email,
            this.loginForm.password
          )
          .then((user) => {// eslint-disable-line
            console.log('success')// eslint-disable-line
          })
          .catch(function (error) {
            const errorCode = error.code
            const errorMessage = error.message
            console.log(errorCode)
            console.log(errorMessage)
          })
      }
    },
  },
}
</script>
