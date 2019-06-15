<template>
  <div class="projects">
    <h1 class="subheading blue-grey--text">Proyectos</h1>

    <v-container class="my-3">
      <v-expansion-panel expand focusable>
        <VExpansionPanelContent v-for="project in myProjects" :key="project.title">
          <div slot="header">{{ project.title }}</div>
          <VCard>
            <v-card-text class="px-4 grey--text">
              <div class="font-weight-bold">{{ project.due }}</div>
              {{ project.content}}
            </v-card-text>
          </VCard>
        </VExpansionPanelContent>
      </v-expansion-panel>
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
    created(){
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
    computed: {
      myProjects(){
        return this.projects.filter(project => {
          return project.person === 'Sear'
        });
      }
    },
  }
</script>
