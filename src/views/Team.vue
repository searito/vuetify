<template>
  <div class="team">
    <h1 class="subheading blue-grey--text">Equipo</h1>

     <v-container class="my-3">
      <v-layout row wrap>
        <v-flex xs12 md6>
          <v-btn outline block class="primary">1</v-btn>
        </v-flex>

        <v-flex xs12 md6>
          <v-btn outline block class="primary">2</v-btn>
        </v-flex>
      </v-layout>

      <v-layout row wrap>
        <v-flex xs3 md6>
          <v-btn block outline color="success">3</v-btn>
        </v-flex>

        <v-flex xs3 md2>
          <v-btn block outline color="success">4</v-btn>
        </v-flex>

        <v-flex xs3 md2>
          <v-btn block outline color="success">5</v-btn>
        </v-flex>

        <v-flex xs3 md2>
          <v-btn block outline color="success">6</v-btn>
        </v-flex>
      </v-layout>

      <v-layout row wrap justify-center>
        <v-flex xs4 md3>
          <v-btn outline block class="warning">7</v-btn>
        </v-flex>
        <v-flex xs4 md3>
          <v-btn outline block class="warning">8</v-btn>
        </v-flex>
      </v-layout>
    </v-container>

  </div>
</template>

<script>

  export default {
    
  }
</script>
