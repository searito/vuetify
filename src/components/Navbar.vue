<template>
    <div>
        <nav>

            <v-snackbar v-model="snackbar" :timeout="6000" top color="green darken-4">
                <span>Genial, Has Agregado Un Nuevo Proyecto...!!!</span>
                <v-btn flat color="orange" @click="snackbar = false">Cerrar</v-btn>
            </v-snackbar>

            <v-toolbar flat app class="blue-grey darken-3">
                <v-toolbar-side-icon class="grey--text" @click="drawer =! drawer">
                </v-toolbar-side-icon>

                <v-toolbar-title class="text-uppercase grey--text">
                    <span class="font-weight-light">Todo</span>
                    <span>Sear</span>
                </v-toolbar-title>

                <v-spacer></v-spacer>

                <v-menu offset-y>
                    <v-btn color="blue-grey darken-3" dark slot="activator">
                        <v-icon left>expand_more</v-icon>
                        <span>Menú</span>
                    </v-btn>
                    <v-list>
                        <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
                            <v-list-tile-title>{{ link.text }}</v-list-tile-title>
                        </v-list-tile>
                    </v-list>
                </v-menu>

                <v-btn color="blue-grey lighten-4">
                    <span>Salir</span>
                    <v-icon right>power_settings_new</v-icon>
                </v-btn>
            </v-toolbar>

            <v-navigation-drawer v-model="drawer" app class="blue-grey darken-3">
                <v-layout column align-center>
                    <v-flex class="mt-5">
                        <v-avatar size="100">
                            <img src="/avatar_004.png" alt="alt">
                        </v-avatar>
                        <p class="white--text subheading mt-1">Sear Clímaco</p>
                    </v-flex>

                    <v-flex class="mt-4 mb-3">
                        <Popup @projectAdded="snackbar = true"/>
                    </v-flex>
                </v-layout>
                
                <v-list>
                    <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
                        <v-list-tile-action>
                            <v-icon class="white--text">{{ link.icon }}</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title class="white--text">
                                {{ link.text }}
                            </v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>
            </v-navigation-drawer>
        </nav>
    </div>
</template>

<script>
import Popup from './Popup'

export default {
    components: {Popup},

    data() {
        return {
            drawer: false,
            links: [
                { icon: 'dashboard', text :'Dashboard', route: '/' },
                { icon: 'folder', text :'Proyectos', route: '/projects' },
                { icon: 'person', text :'Equipo', route: '/team' },
            ],
            snackbar: false,
        }
    },
}
</script>
