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

  export default {
    data() {
      return {
        projects: [
          { title: 'Diseñar Nuevo Sitio', person: 'Sear', due: '01/01/2019', status: 'Proceso', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
          { title: 'Codificar Sitio', person: 'Sear', due: '10/01/2019', status: 'Completo', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
          { title: 'Diseñar Imagenes Adaptativas', person: 'Sear', due: '02/06/2019', status: 'Completo', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
          { title: 'Crear Foro', person: 'Pito Pérez', due: '03/06/2019', status: 'Retraso', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        ]
      }
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
