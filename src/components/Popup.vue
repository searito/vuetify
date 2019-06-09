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

                   <v-menu>
                       <VTextField label="Fecha" slot="activator" prepend-icon="date_range" :value="formattedDate"/>
                       <VDatePicker v-model="due" :landscape="false" :reactive="true"></VDatePicker>
                   </v-menu>

                   <VSpacer/>

                   <v-btn color="blue-grey lighten-4" class="mx-0 mt-3" @click="submit">
                       Añadir Proyecto
                    </v-btn>
               </v-form>
           </v-card-text>
       </VCard>
   </v-dialog>
</template>

<script>
import format from 'date-fns/format'

export default {
    data(){
        return {
            dialog: false,
            title: '',
            content: '',
            due: null,
        }
    },

    computed: {
        formattedDate(){
            return this.due ? format(this.due, 'Do MMM YYYY') : ''
        }
    },

    methods: {
        submit(){
            //let self = this;
            //console.log(self.title, self.content);
        }
    },
}
</script>