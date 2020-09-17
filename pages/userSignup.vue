<template>
  <v-form ref="signupForm" v-model="signupFormValidation.valid" lazy-validation>
    <v-layout column justify-center align-center>
      <v-flex xs12 sm8 md6>
        <v-row>
          <v-col>
            <v-card class="mx-auto" min-width="400">
              <div class="v-card__text">
                <v-text-field
                  v-model="signupForm.ufirstname"
                  :rules="signupFormRules.name"
                  :counter="10"
                  maxlength="10"
                  label="姓(First name)"
                  placeholder="鈴木"
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
                  v-model="signupForm.ulastname"
                  :rules="signupFormRules.name"
                  :counter="10"
                  maxlength="10"
                  label="名(Last name)"
                  placeholder="花子"
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
                  v-model="signupForm.ufirstkana"
                  :rules="signupFormRules.name"
                  :counter="10"
                  maxlength="10"
                  label="セイ(First name)"
                  placeholder="スズキ"
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
                  v-model="signupForm.ulastkana"
                  :rules="signupFormRules.name"
                  :counter="10"
                  maxlength="10"
                  label="メイ(Last name)"
                  placeholder="ハナコ"
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
                  v-model="signupForm.utel"
                  :rules="signupFormRules.tel"
                  :counter="11"
                  maxlength="11"
                  label="電話番号(Tel)"
                  placeholder="09012345678"
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
                  v-model="signupForm.uemail"
                  :rules="signupFormRules.email"
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
                  v-model="signupForm.upostalcode"
                  :rules="signupFormRules.postalcode"
                  label="郵便番号(postal code)"
                  placeholder="1234567"
                  :counter="7"
                  maxlength="7"
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
                  v-model="signupForm.uaddress"
                  :rules="signupFormRules.address"
                  label="住所(address)"
                  placeholder="東京都世田谷区用賀xxxx"
                  :counter="30"
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
                  v-model="signupForm.uchild.child1"
                  :rules="signupFormRules.child"
                  label="お子さま一人目のお名前"
                  placeholder="太郎"
                  :counter="10"
                  maxlength="10"
                  clearable
                  required
                ></v-text-field>
              </div>
              <!-- <v-card-actions>
                <v-btn color="primary accent-4">お子さま追加</v-btn>
              </v-card-actions> -->
            </v-card>
          </v-col>
        </v-row>
        <!-- <v-row>
          <v-col>
            <v-card class="mx-auto" min-width="400">
              <div class="v-card__text">
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="お子さま二人目のお名前"
                  clearable
                  required
                ></v-text-field>
              </div>
            </v-card>
          </v-col>
        </v-row> -->
        <v-btn class="mr-4" @click="reset">キャンセル</v-btn>
        <v-btn
          :disabled="!signupFormValidation.valid"
          color="teal lighten-1"
          class="mr-4"
          @click="addUser"
        >
          <span class="white--text font-weight-bold">登録する</span>
        </v-btn>
      </v-flex>
    </v-layout>
  </v-form>
</template>

<script>
import firebase from 'firebase/app'
import { db } from '~/plugins/firebase'

const signupFormRules = {
  name: [(v) => !!v || '名前は必須項目です'],
  tel: [
    (v) => !!v || '電話番号は必須項目です',
    (v) => /[0-9]{11}/.test(v) || '半角数字11文字で入力してください',
  ],
  postalcode: [
    (v) => !!v || '郵便番号は必須項目です',
    (v) => /[0-9]{7}/.test(v) || '半角数字7文字で入力してください',
  ],
  address: [(v) => !!v || '住所は必須項目です'],
  email: [
    (v) => !!v || 'メールアドレスは必須項目です',
    (v) => /.+@.+/.test(v) || '正しいE-mail形式でご記入ください',
  ],
  child: [(v) => !!v || 'お子さま一人目の入力は必須項目です'],
}

export default {
  data() {
    return {
      signupForm: {
        ufirstname: '',
        ulastname: '',
        ufirstkana: '',
        ulastkana: '',
        uid: '',
        utel: '',
        uemail: '',
        upostalcode: '',
        uaddress: '',
        uchild: {
          child1: '',
        },
        createdAt: '',
        updateAt: '',
      },
      signupFormValidation: {
        valid: false,
      },
    }
  },
  computed: {},
  methods: {
    validate() {
      this.$refs.signupForm.validate()
    },
    reset() {
      this.$refs.signupForm.reset()
    },
    addUser() {
      if (this.validate()) {
        db.collection('users')
          .add({
            ufirstname: this.signupForm.ufirstname,
            ulastname: this.signupForm.ulastname,
            ufirstkana: this.signupForm.ufirstkana,
            ulastkana: this.signupForm.ulastkana,
            uid: this.signupForm.uid,
            utel: this.signupForm.utel,
            uemail: this.signupForm.uemail,
            upostalcode: this.signupForm.upostalcode,
            uaddress: this.signupForm.uaddress,
            uchild: {
              child1: this.signupForm.uchild.child1,
            },
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          })
          .then(function (docRef) {
            console.log('Document written with ID:', docRef.id)
            // this.$router.push({ path: `/user/${docRef.id}` })
          })
          .catch(function (error) {
            console.error('Error adding document:', error)
          })
      }
    },
  },
}
</script>
