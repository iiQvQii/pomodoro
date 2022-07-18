<template lang="pug">
v-row#settings
  v-col(cols="12")
    .line
    h1.text-center SETTINGS
  v-col(cols="12")
    v-table.scrollable
      thead
        tr
          th.text-center Name
          th.text-center Rings
          th.text-center Option
      tbody
        tr(v-for="alarm in alarms")
          td.text-center {{ alarm.name }}
          td.text-center
            audio(controls :src="alarm.file")
          td
            v-radio.d-inline-block( color="#d03c21" v-model="selectedAlarm" :value="alarm.id")
            //- v-radio(v-model="settings.selectedAlarm" :value="alarm.id")不解構pinia的做法
</template>

<script setup>
import { reactive } from 'vue'
import { useSettingsStore } from '@/stores/settings'
import { storeToRefs } from 'pinia'

const settings = useSettingsStore()
const { selectedAlarm, alarms } = storeToRefs(settings)

</script>
