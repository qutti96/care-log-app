<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item>
          <!-- <v-list-item-avatar>
            <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
          </v-list-item-avatar> -->
          <v-list-item-content>
            <div v-if="user.login">
              <v-list-item-subtitle>{{ user.email }}</v-list-item-subtitle>
              <v-btn elevation="2" small class="mt-2" @click="logOut">ログアウト</v-btn>
            </div>
            <div v-else>
              <p>{{ user.login }}</p>
              <nuxt-link class="anchor-type--block" to="userLogin">
                ログイン
              </nuxt-link>
            </div>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <!-- <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn> -->
      <v-toolbar-title v-text="title" />
      <!-- <v-spacer /> -->
      <!-- <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn> -->
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app>
      <v-col class="text-center" cols="12">
        <span>
          &copy; {{ new Date().getFullYear() }} care-log-app All rights
          reserved.
        </span>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'ケアログトップ',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'ログイン画面',
          to: '/userLogin',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'ユーザー情報登録画面',
          to: '/userSignUp',
        },
        {
          icon: 'mdi-chart-bubble',
          title: '保護者情報',
          to: '/userInfo',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'お子さま情報',
          to: '/childInfo',
        },
        {
          icon: 'mdi-chart-bubble',
          title: '保育記録',
          to: '/careLog',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'ログアウト',
          to: '/',
        },
      ],
      miniVariant: false,
      right: false,
      rightDrawer: false,
      title: 'care-log-app',
    }
  },
  computed: {
    user() {
      return this.$store.getters['modules/auth/user']
    },
  },
  methods: {
    logOut() {
      this.$store.dispatch('modules/auth/signOut')
      this.$router.push('userLogin')
    },
  },
}
</script>
