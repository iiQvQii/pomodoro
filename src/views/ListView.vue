<template lang="pug">
v-row#list
  v-col(cols='12')
    .line
    h1 TO DO LIST
  v-col(cols='12')
    v-text-field(
      variant="underlined"
      append-icon="mdi-plus"
      clear-icon="mdi-close-circle"
      clearable
      placeholder="Let's write something to do!"
      v-model="newItem"
      :rules="[required]"
      @click:append="onInputSubmit"
      @keydown.enter="onInputSubmit"
    )
    v-table
      thead
        tr
          th Title
          th Edit / Delete
      tbody
        tr(v-if="items.length === 0")
          td.text-center(colspan="2") NO EVENTS
        tr(v-for="(item, i) in items")
          td
            v-text-field(v-if="item.edit" v-model="item.model" autofocus)
            span(v-else) {{ item.name }}
          td
            span(v-if="item.edit")
              v-btn(icon variant="plain" flat color="green" @click="confirmEditItem(i)")
                v-icon mdi-check
              v-btn(icon variant="plain" flat color="red" @click="cancelEditItem(i)")
                v-icon mdi-undo
            span(v-else)
              v-btn(icon variant="plain" flat color="green" @click="editItem(i)")
                v-icon mdi-pencil
              v-btn(icon variant="plain" flat color="red" @click="delItem(i)")
                v-icon mdi-delete
</template>

<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useListStore } from '@/stores/list'

const newItem = ref('')
const required = value => {
  return !!value // true/false message
}

const list = useListStore()
const { items } = storeToRefs(list)
const { addItem, delItem, editItem, confirmEditItem, cancelEditItem } = list

const onInputSubmit = () => {
  const valid = required(newItem.value)
  if (!valid) return
  addItem(newItem.value)
  newItem.value = ''
}
</script>
