<template>
    <nav>
      <v-app-bar app clipped-left>
        <v-app-bar-nav-icon @click="drawer = !drawer" class="grey--text"></v-app-bar-nav-icon>
        <v-toolbar-title class="text-uppercase grey--text">
          <span class="font-weight-light">Dash</span>
          <span>Board</span>
          <!-- <v-icon class="grey--text pl-2">mdi-access-point</v-icon>-->
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn outlined color="grey">
          <span>Jonas Pertschy</span>
          <v-icon small right>mdi-logout</v-icon>
        </v-btn>
      </v-app-bar>
      <v-navigation-drawer clipped app floating v-model="drawer" class="background" >
        <v-list>
        <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-item-action>
            <v-icon class="grey--text">{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="grey--text">{{ link.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
       </v-navigation-drawer>
  
    </nav>
    
  </template>
  
  <script>
  export default {
  data() {
        return {
        drawer: false,
        navDrawerPinned: true,
        links: [
            { icon: 'mdi-monitor-dashboard', text: 'Dashboard', route: '/' },
            { icon: 'mdi-folder', text: 'My Projects', route: '/projects' },
            { icon: 'mdi-account-group-outline', text: 'Team', route: '/team' },
        ]
        }
    }
    }
  </script>
  
  <style>
  
  </style>