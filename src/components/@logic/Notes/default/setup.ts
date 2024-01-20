import { defineComponent, computed } from "vue"
import Note from '@/components/@logic/Note/default/index.vue'
// import { INote } from '@/schemes'
import { useNotesStore } from '@/stores/Notes'

export default defineComponent({
  name: 'Notes-Default',
  components: {
    Note
  },
  setup() {
    const store = useNotesStore()
    const notes = computed(() => store.notes)
    const open = async (id: number) => {
      const notesStore = useNotesStore()
      const result = await notesStore.getNote(id)
      console.log(result)
    }
    return {
      notes,
      open
    }
  }
})