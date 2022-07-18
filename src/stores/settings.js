import { defineStore } from 'pinia'

export const useSettingsStore = defineStore({
  id: 'settings',
  state() {
    return {
      selectedAlarm: 1,
      alarms: [
        { id: 1, name: 'Alarm_1', file: new URL('../assets/alarm_1.mp3', import.meta.url).href },
        { id: 2, name: 'Alarm_2', file: new URL('../assets/alarm_2.mp3', import.meta.url).href },
        { id: 3, name: 'Alarm_3', file: new URL('../assets/alarm_3.mp3', import.meta.url).href },
        { id: 4, name: 'Alarm_4', file: new URL('../assets/alarm_4.mp3', import.meta.url).href }
      ]
    }
  },
  getters: {
    // 傳鈴聲檔案
    selectedAlarmFile() {
      const idx = this.alarms.findIndex(a => a.id === this.selectedAlarm)
      return this.alarms[idx].file
    }
  },
  persist: {
    key: 'pomodoro-settings',
    path: ['selectedAlarm']
  }
})
