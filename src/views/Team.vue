<template>
  <div class="team">
    <h1 class="subheading blue-grey--text">Equipo</h1>

    <v-container class="my-3">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
          <v-card class="text-xs-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar size="100" class="orange">
                <img :src="person.avatar" alt="alt">
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">{{ person.name }}</div>
              <div class="grey--text">{{ person.role }}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn color="grey lighten-5">
                <v-icon small left>message</v-icon>
                <span>Contactar</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

  </div>
</template>

<script>

  export default {
    data() {
      return {
        team: [
          { name: 'Sear Clímaco', role: 'CEO', avatar: '/avatar_004.png' },
          { name: 'Pito Pérez', role: 'Diseñador Gráfico', avatar: '/avatar_002.png' },
          { name: 'Minerva Somoza', role: 'Desarrollador Web', avatar: '/avatar_003.png' },
          { name: 'Godofredo Laínez', role: 'Community Manager', avatar: '/avatar_005.png' },
          { name: 'Jhora Mormonth', role: 'Gerente Ventas', avatar: '/avatar_001.png' }
        ]
      }
    },
  }
</script>
