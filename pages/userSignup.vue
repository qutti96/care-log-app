<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-layout column justify-center align-center>
      <v-flex xs12 sm8 md6>
        <v-row>
          <v-col>
            <v-card class="mx-auto" max-width="400">
              <div class="v-card__text">
                <v-text-field
                  v-model="firstname"
                  :rules="nameRules"
                  :counter="10"
                  label="姓(First name)"
                  required
                ></v-text-field>
              </div>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-card class="mx-auto" max-width="400">
              <div class="v-card__text">
                <v-text-field
                  v-model="firstname"
                  :rules="nameRules"
                  :counter="10"
                  label="名(Last name)"
                  required
                ></v-text-field>
              </div>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-card class="mx-auto" max-width="400">
              <div class="v-card__text">
                <v-text-field
                  v-model="firstname"
                  :rules="nameRules"
                  :counter="10"
                  label="セイ(First name)"
                  required
                ></v-text-field>
              </div>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-card class="mx-auto" max-width="400">
              <div class="v-card__text">
                <v-text-field
                  v-model="lastname"
                  :rules="nameRules"
                  :counter="10"
                  label="メイ(Last name)"
                  required
                ></v-text-field>
              </div>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-card class="mx-auto" max-width="400">
              <div class="v-card__text">
                <v-text-field
                  v-model="lastname"
                  :rules="nameRules"
                  :counter="10"
                  label="電話番号(Tel)"
                  required
                ></v-text-field>
              </div>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-card class="mx-auto" max-width="400">
              <div class="v-card__text">
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="E-mailアドレス"
                  required
                ></v-text-field>
              </div>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-card class="mx-auto" max-width="400">
              <div class="v-card__text">
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="郵便番号(postal code)"
                  required
                ></v-text-field>
              </div>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-card class="mx-auto" max-width="400">
              <div class="v-card__text">
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="住所(address)"
                  required
                ></v-text-field>
              </div>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-card class="mx-auto" max-width="400">
              <div class="v-card__text">
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="お子さま一人目のお名前"
                  required
                ></v-text-field>
              </div>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-card class="mx-auto" max-width="400">
              <div class="v-card__text">
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="お子さま二人目のお名前"
                  required
                ></v-text-field>
              </div>
            </v-card>
          </v-col>
        </v-row>
        <v-btn
          :disabled="!valid"
          color="success"
          class="mr-4"
          @click="validate"
        >
          Validate
        </v-btn>
      </v-flex>
    </v-layout>
  </v-form>
</template>

<script>
// import Logo from '~/components/Logo.vue'
// import VuetifyLogo from '~/components/VuetifyLogo.vue'

// export default {
//   components: {
//     Logo,
//     VuetifyLogo,
//   },
// }
</script>
