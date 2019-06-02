<template>
  <div class="dashboard">
    <h1 class="subheading blue-grey--text">Dashboard</h1>

    <v-container class="my-3">

      <v-layout row class="mb-3">
        <v-btn flat color="grey" @click="sortBy('title')">
          <v-icon left small>folder</v-icon>
          <span class="caption text-lowercase">Por Nombre</span>
        </v-btn>
        
        <v-btn flat color="grey" @click="sortBy('person')">
          <v-icon left small>person</v-icon>
          <span class="caption text-lowercase">por creador</span>
        </v-btn>
      </v-layout>

      <v-card class="pa-3" v-for="project in projects" :key="project.title">
        <v-layout row wrap :class="`pa-3 project ${project.status}`">
          <v-flex xs12 md6>
            <div class="caption grey--text">
              Proyecto
            </div>
            <div>{{ project.title }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">
              Creador
            </div>
            <div>{{ project.person }}</div>
          </v-flex>

          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">
              Fecha
            </div>
            <div>{{ project.due }}</div>
          </v-flex>

          <v-flex xs6 sm4 md2>
            <div class="right"> 
              <v-chip small :class="`${project.status} white--text caption my-2`">{{ project.status }}</v-chip>
            </div>
          </v-flex>
        </v-layout>
      </v-card>
    </v-container>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        projects: [
          { 
            title: 'Diseñar Nuevo Sitio', person: 'Sear', due: '01/01/2019', status: 'Proceso', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
          { title: 'Codificar Sitio', person: 'Sear', due: '10/01/2019', status: 'Completo', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
          { title: 'Diseñar Imagenes Adaptativas', person: 'Sear', due: '02/06/2019', status: 'Completo', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
          { title: 'Crear Foro', person: 'Pito Pérez', due: '03/06/2019', status: 'Retraso', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        ]
      }
    },

    methods: {
      sortBy(prop){
        let self = this
        self.projects.sort((a, b) => a[prop] < b[prop] ? -1 : 1)
      }
    },
  }
</script>

<style>
  .project.Completo{
    border-left: 4px solid rgba(0,255,127, .7);
  }
  
  .project.Proceso{
    border-left: 4px solid rgba(37,171,224, .7);
  }

  .project.Retraso{
    border-left: 4px solid rgba(255,99,71, .7);
  }

  .v-chip.Completo{
    background: rgba(0,255,127, .7);
  }
  
  .v-chip.Proceso{
    background: rgba(37,171,224, .7);
  }

  .v-chip.Retraso{
    background: rgba(255,99,71, .7);
  }
</style>