<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <v-col>
        <v-card class="mx-auto" max-width="400">
          <v-card-title class="headline">トップページです</v-card-title>
          <div class="v-card__text">
            <p class="body-1">
              このアプリは保育園での保育記録や生活ログを保育士と親が共有するアプリです。
            </p>
            <nuxt-link class="anchor-type--block" to="/">Top</nuxt-link>
            <nuxt-link class="anchor-type--block" to="userLogin">
              ログイン画面(userLogin.vue)
            </nuxt-link>
            <nuxt-link class="anchor-type--block" to="userSignup">
              ユーザー登録画面(userSignup.vue)
            </nuxt-link>
            <nuxt-link class="anchor-type--block" to="userInfo">
              保護者情報画面(userInfo.vue)
            </nuxt-link>
            <nuxt-link class="anchor-type--block" to="careLogRegist">
              今日の保育記録登録画面(未作成:careLogRegist.vue)
            </nuxt-link>
            <nuxt-link class="anchor-type--block" to="careLogInfo">
              今日の保育記録情報画面(未作成:careLogInfo.vue)
            </nuxt-link>
          </div>
        </v-card>
      </v-col>
    </v-flex>
  </v-layout>
</template>

<style scoped>
.anchor-type--block {
  display: block;
  padding: 0.5em;
}
</style>
