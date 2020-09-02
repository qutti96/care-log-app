<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <v-col>
        <v-card
          v-for="info in users"
          :key="info.uid"
          class="mx-auto"
          max-width="400"
        >
          <v-card-subtitle class="headline">
            User ID: {{ info.uid }}
          </v-card-subtitle>
          <v-card-title class="headline">
            {{ info.ufirstname }} {{ info.ulastname }}
          </v-card-title>
        </v-card>
      </v-col>
    </v-flex>
  </v-layout>
</template>

<script>
import { db } from '~/plugins/firebase'

export default {
  data() {
    return {
      users: [],
    }
  },
  firestore() {
    return {
      users: db.collection('users'),
    }
  },
}
</script>
