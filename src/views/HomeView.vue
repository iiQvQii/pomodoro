<template lang="pug">
v-row.text-center#home
  v-col(cols="12")
    h1 {{ currentText }}
    h1#time {{ timeText }}
  v-col(cols="12")
    v-btn.mx-3(icon v-if="status !== 1" @click="startTimer")
      v-icon mdi-play
    v-btn.mx-3(icon v-else @click="pauseTimer")
      v-icon mdi-pause
    v-btn.mx-3(icon v-if="current.length > 0" @click="finishTimer(true)")
      v-icon mdi-skip-next
  v-col(cols="12" style="height: 400px;")
    TomatoImg
</template>

<script setup>
import { computed, ref, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { gsap } from 'gsap'
import { useListStore } from '@/stores/list'
import { useSettingsStore } from '@/stores/settings'
import TomatoImg from '../components/TomatoImg.vue'

onMounted(() => {
  gsap.to('#tomatoA,#tomatoB', {
    background: 'linear-gradient(0deg, rgba(236,132,132,1) 0%, rgba(255,112,163,1) 100%)',
    scale: 1.1,
    transformOrigin: 'center center',
    duration: 3,
    yoyo: true,
    repeat: -1,
    ease: 'power4'
  })
  gsap.from('h1', {
    y: -100,
    duration: 1,
    ease: 'power4'
  })
})
const list = useListStore()
const { current, items, timeleft } = storeToRefs(list)
const { countdown, start, finish } = list

const settings = useSettingsStore()
const { selectedAlarmFile } = storeToRefs(settings)

// 顯示文字
const currentText = computed(() => {
  return current.value.length > 0 ? current.value : items.value.length > 0 ? 'CLICK TO START' : 'NO EVENTS'
})
const timeText = computed(() => {
  const m = Math.floor(timeleft.value / 60).toString().padStart(2, '0')
  const s = (timeleft.value % 60).toString().padStart(2, '0')
  return m + ':' + s
})

let timer
// 0 = 停止
// 1 = 倒數中
// 2 = 暫停
const status = ref(0)

const pauseTimer = () => {
  status.value = 2
  clearInterval(timer)
}

const finishTimer = (skip) => {
  clearInterval(timer)
  status.value = 0
  finish()
  if (!skip) {
    const audio = new Audio()
    audio.src = selectedAlarmFile.value
    audio.play()
  }
  if (items.value.length > 0) {
    startTimer()
  }
}

const startTimer = () => {
  if (status.value === 0 && items.value.length > 0) {
    start()
  }
  if (current.value.length > 0) {
    status.value = 1
    timer = setInterval(() => {
      countdown()
      if (timeleft.value === 0) {
        finishTimer(false)
      }
    }, 1000)
  }
}

</script>
