<template lang="pug">
v-app
  v-card
    v-navigation-drawer(expand-on-hover rail permanent width="180")
      v-list-item(id="logo" prepend-avatar="../tomato.png")
      v-divider
      v-list(density="compact" nav)
        v-list-item(color="#d03c21" two-line prepend-icon="mdi-timer" title="TIMER" value="TIMER" to='/')
        v-list-item(color="#d03c21" prepend-icon="mdi-format-list-bulleted" title="TO DO LIST" value="LIST" to='/list')
        v-list-item(color="#d03c21" prepend-icon="mdi-cog" title="SETTINGS" value="SETTINGS" to='/settings')
    v-main#content
      v-container
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
</script>

<style>
</style>
