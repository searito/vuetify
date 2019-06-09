<template>
   <v-dialog max-width="600px" v-model="dialog">
       <v-btn flat color="success" slot="activator">Nuevo Proyecto</v-btn>

       <VCard>
           <v-card-title class="blue-grey lighten-4">
               <h2>Agregar Proyecto</h2>
           </v-card-title>

           <v-card-text>
               <v-form class="px-3">
                   <VTextField v-model="title" label="Título" prepend-icon="folder"/>

                   <VTextarea label="Información" v-model="content" prepend-icon="edit"/>

                   <v-btn color="blue-grey lighten-4" class="mx-0 mt-3" @click="submit">
                       Añadir Proyecto
                    </v-btn>
               </v-form>
           </v-card-text>
       </VCard>
   </v-dialog>
</template>

<script>
export default {
    data(){
        return {
            dialog: false,
            title: '',
            content: '',
        }
    },

    methods: {
        submit(){
            let self = this;
            console.log(self.title, self.content);
        }
    },
}
</script>