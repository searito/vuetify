<template>
  <div class="team">
    <h1 class="subheading blue-grey--text">Equipo</h1>

    <v-container class="my-3">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
          <v-card class="text-xs-center ma-3">
            <v-responsive class="pt-4">
              image goes here
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
          { name: 'Sear', role: 'CEO' },
          { name: 'Pito Perez', role: 'Diseñador Gráfico' },
          { name: 'Minerva', role: 'Desarrollador Web' },
          { name: 'Godofredo', role: 'Community Manager' },
          { name: 'Jhora', role: 'Gerente Ventas' }
        ]
      }
    },
  }
</script>
