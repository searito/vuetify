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

            <v-navigation-drawer v-model="drawer" app class="blue-grey darken-3">
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
export default {
    data() {
        return {
            drawer: false,
            links: [
                { icon: 'dashboard', text :'Dashboard', route: '/' },
                { icon: 'folder', text :'Proyectos', route: '/projects' },
                { icon: 'person', text :'Equipo', route: '/team' },
            ],
        }
    },
}
</script>
