<template lang="pug">
v-app
  v-card
    v-navigation-drawer(d-lg-block v-model="drawer" :rail="rail" permanent @click="rail = false" width="180")
      v-list-item(id="logo" prepend-avatar="../tomato.png")
        template(v-slot:append)
          v-btn(variant="text" icon="mdi-chevron-left" @click.stop="rail = !rail")
      v-divider
      v-list(density="compact" nav)
        v-list-item(color="#d03c21" two-line prepend-icon="mdi-timer" title="Timer" value="Timer" to='/')
        v-list-item(prepend-icon="mdi-format-list-bulleted" title="To Do List" value="List" to='/list')
        v-list-item(prepend-icon="mdi-cog" title="Settings" value="Settings" to='/settings')
          //- v-btn(icon="mdi-timer" to='/')
          //- v-btn(icon="mdi-format-list-bulleted" to='/list')
          //- v-btn(icon="mdi-cog" to='/settings')
          //- v-btn(icon="mdi-bell" v-if="notify" @click="toggleNotify")
          //- v-btn(icon="mdi-bell-off" v-else @click="toggleNotify")
    v-main(style="height: 250px")
      v-container(fluid)
        router-view(v-slot="{ Component }")
          keep-alive(include="HomeView")
            component(:is="Component")
</template>

<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useListStore } from '@/stores/list'
const list = useListStore()
const { notify } = storeToRefs(list)
const { toggleNotify } = list
const drawer = ref()
const rail = ref(true)
console.log(rail)
</script>

<style>
</style>
