<template>
  <div class="dashboard">
    <h1 class="subheading blue-grey--text">Dashboard</h1>

    <v-container class="my-3">

      <v-layout row class="mb-3">
        <v-tooltip top>
          <v-btn flat color="grey" @click="sortBy('title')" slot="activator">
            <v-icon left small>folder</v-icon>
            <span class="caption text-lowercase">Por Nombre</span>
          </v-btn>
          <span>Ordenar Por Nombre</span>
        </v-tooltip>
        
        <v-tooltip top>
          <v-btn flat color="grey" @click="sortBy('person')" slot="activator">
            <v-icon left small>person</v-icon>
            <span class="caption text-lowercase">por creador</span>
          </v-btn>
          <span>Ordenar Por Creador</span>
        </v-tooltip>
      </v-layout>

      <v-card class="pa-3" v-for="project in projects" :key="project.id">
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
  import db from '@/fb';

  export default {
    data() {
      return {
        projects: [],
      }
    },

    created() {
      db.collection('projects').onSnapshot(res => {
        const changes = res.docChanges()

        changes.forEach(change => {
          if(change.type === 'added'){
            this.projects.push({
              ...change.doc.data(),
              id: change.doc.id
            });
          }
        });
      });
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