<template>
  <div class="home">
    <h1>Inicio</h1>

    <v-btn class="pink white--text">
      Clickeame
    </v-btn>

    <v-btn dark color="teal darken-2">
      Click a mi
    </v-btn>

    <v-btn dark drepressed color="light-blue darken-4">
      Otro Click
    </v-btn>

    <v-btn flat color="amber">Más Click</v-btn>


    <v-btn class="deep-orange white--text">
      <v-icon left>translate</v-icon>
      <span>Traducir</span>
    </v-btn>

    <v-btn class="white--text red" small>
      <span>Touch Me</span>
      <v-icon right small>fingerprint</v-icon>
    </v-btn>

    <v-btn class="white--text purple" large>
      <span>Grande</span>
      <v-icon right large>fullscreen</v-icon>
    </v-btn>

     <v-btn fab small dark color="red">
      <v-icon>favorite</v-icon>
    </v-btn>
  </div>
</template>

<script>

  export default {
    
  }
</script>
