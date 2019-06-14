<template>
   <v-dialog max-width="600px" v-model="dialog">
       <v-btn flat color="success" slot="activator">Nuevo Proyecto</v-btn>

       <VCard>
           <v-card-title class="blue-grey lighten-4">
               <h2>Agregar Proyecto</h2>
           </v-card-title>

           <v-card-text>
               <v-form class="px-3" ref="form">
                   <VTextField v-model="title" label="Título" prepend-icon="folder" :rules="inputRules"/>

                   <VTextarea label="Información" v-model="content" prepend-icon="edit" :rules="inputRules"/>

                   <v-menu>
                       <VTextField label="Fecha" slot="activator" prepend-icon="date_range" :value="formattedDate"/>
                       <VDatePicker v-model="due" :landscape="true" :reactive="true" :rules="inputRules"></VDatePicker>
                   </v-menu>

                   <VSpacer/>

                   <v-btn color="blue-grey lighten-4" class="mx-0 mt-3" @click="submit" :loading="loading">
                       Añadir Proyecto
                    </v-btn>
               </v-form>
           </v-card-text>
       </VCard>
   </v-dialog>
</template>

<script>
import format from 'date-fns/format'
import db from './../fb'

export default {
    data(){
        return {
            dialog: false,
            title: '',
            content: '',
            due: null,
            inputRules: [
                v => (v && v.length >= 3) || '3 caracteres como mínimo'
            ],
            loading: false,
            //due: new Date().toISOString().substring(0, 10)
        }
    },

    computed: {
        formattedDate(){
            return this.due ? format(this.due, 'Do MMM YYYY') : ''
        }
    },

    methods: {
        submit(){
            let self = this;

            if(self.$refs.form.validate()){
                self.loading = true;

                const project = {
                    title: self.title,
                    content: self.content,
                    due: format(self.due, 'DD MMM YYYY'),
                    person: 'Sear',
                    status: 'Proceso'
                }

                db.collection('projects').add(project).then(() => {
                    self.loading = false;
                })

                self.$refs.form.reset();
                self.dialog = false;
                
            }
        }
    },
}
</script>