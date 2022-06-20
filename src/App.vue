<template lang="pug">
v-app
  v-app-bar(color="primary")
    v-app-bar-title 番茄鐘
    v-spacer
    v-btn(icon to='/')
      v-icon mdi-timer
    v-btn(icon to='/list')
      v-icon mdi-format-list-bulleted
    v-btn(icon to='/settings')
      v-icon mdi-cog
  v-main
    v-container
      router-view(v-slot="{ Component }")
        keep-alive(include="HomeView")
          component(:is="Component")
</template>
