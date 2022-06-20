import { defineStore } from 'pinia'

const time = parseInt(import.meta.env.VITE_TIME)
const timebreak = parseInt(import.meta.env.VITE_TIMEBREAK)

export const useListStore = defineStore({
  id: 'list',
  state() {
    return {
      items: [],
      finished: [],
      current: '',
      id: 1,
      break: false,
      timeleft: time
    }
  },
  actions: {
    addItem(data) {
      this.items.push({
        id: this.id++,
        name: data,
        edit: false,
        model: data
      })
    },
    delItem(i) {
      this.items.splice(i, 1)
    },
    editItem(i) {
      this.items[i].edit = true
    },
    confirmEditItem(i) {
      this.items[i].name = this.items[i].model
      this.items[i].edit = false
    },
    cancelEditItem(i) {
      this.items[i].model = this.items[i].name
      this.items[i].edit = false
    },
    countdown() {
      this.timeleft--
    },
    start() {
      this.current = this.items.shift().name
    },
    finish() {
      this.finished.push({
        name: this.current,
        id: this.id++
      })
      this.current = ''
    }
  },
  persist: {
    key: 'pomodoro-fist'
  }
})
