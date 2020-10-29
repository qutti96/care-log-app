<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <v-col>
        <v-card
          v-for="info in users"
          :key="info.id"
          class="mx-auto"
          max-width="400"
        >
          <v-card-subtitle class="headline">
            User ID: {{ info.id }}
          </v-card-subtitle>
          <v-card-title class="headline">
            {{ info.ufirstname }} {{ info.ulastname }}
          </v-card-title>
          <div class="v-card__text">
            <p class="body-1">{{ info.ufirstkana }}</p>
            <p class="body-1">{{ info.ulastkana }}</p>
            <p class="body-1">{{ info.uemail }}</p>
            <p class="body-1">{{ info.utel }}</p>
            <p class="body-1">{{ info.upostalcode }}</p>
            <p class="body-1">{{ info.uaddress }}</p>
            <p class="body-1">{{ info.upwd }}</p>
            <p class="body-1">{{ info.uchild.child1 }}</p>
            <p class="body-1">{{ info.uchild.child2 }}</p>
            <p class="body-1">{{ info.createdAt }}</p>
            <p class="body-1">{{ info.updatedAt }}</p>
          </div>
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
