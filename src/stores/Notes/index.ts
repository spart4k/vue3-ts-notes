import { defineStore } from 'pinia'
import { INote } from '@/schemes'
export const useNotesStore = defineStore('user', {
  state: () => {
    return {
      // для изначально пустых списков
      notes: [
        {
          "id": 0,
          "label": "Покупки",
          "content": "Купить молоко, яйца, хлеб",
          "date": "03.08.2022"
        },
        {
          "id": 1,
          "label": "Встреча с друзьями",
          "content": "Встреча в кафе в 19:00",
          "date": "05.08.2022"
        },
        {
          "id": 2,
          "label": "Занятия йогой",
          "content": "Записаться на утреннюю занятие",
          "date": "07.08.2022"
        },
        {
          "id": 3,
          "label": "План на выходные",
          "content": "Посетить музей и погулять в парке",
          "date": "09.08.2022"
        },
        {
          "id": 4,
          "label": "Запись на массаж",
          "content": "Записаться на массаж на вечер",
          "date": "11.08.2022"
        }  
      ] as INote[],
      activeNote: {} as INote 
      // для данных, которые еще не загружены
    }
  },
  actions: {
    // since we rely on `this`, we cannot use an arrow function
    async getNote(id: number) {
      console.log(this.notes[0], id)
      const result: Promise<INote> = await new Promise<INote>((resolve, reject) => {
        setTimeout(() => {
          const note = this.notes.find((el) => el.id == id)
          resolve(note)
        }, 300);
      })
      this.activeNote = result
      return result
    },
  },
  // action:
})
