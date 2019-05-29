<template>
    <div>
        <nav>
            <v-toolbar flat app class="blue-grey darken-3">
                <v-toolbar-side-icon class="grey--text" @click="drawer =! drawer">
                </v-toolbar-side-icon>

                <v-toolbar-title class="text-uppercase grey--text">
                    <span class="font-weight-light">Todo</span>
                    <span>Sear</span>
                </v-toolbar-title>

                <v-spacer></v-spacer>

                <v-btn color="blue-grey lighten-4">
                    <span>Salir</span>
                    <v-icon right>power_settings_new</v-icon>
                </v-btn>
            </v-toolbar>

            <v-navigation-drawer v-model="drawer" app class="blue-grey lighten-1">
                <p>Prueba</p>
            </v-navigation-drawer>
        </nav>
    </div>
</template>

<script>
export default {
    data() {
        return {
            drawer: false,
        }
    },
}
</script>
