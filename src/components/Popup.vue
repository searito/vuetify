<template>
   <v-dialog max-width="600px" v-model="dialog">
       <v-btn flat color="success" slot="activator">Nuevo Proyecto</v-btn>

       <VCard>
           <v-card-title class="blue-grey lighten-4">
               <h2>Agregar Proyecto</h2>
           </v-card-title>
       </VCard>
   </v-dialog>
</template>

<script>
export default {
    data(){
        return {
            dialog: false
        }
    }
}
</script>