import { defineComponent, ref } from "vue"
import Notes from '@/components/@logic/Notes/default/index.vue'
export default defineComponent({
  name: 'Main-View',
  components: {
    Notes,
  },
  setup() {
    const hello = ref<string>('hello')
    return {
      hello,
    }
  }
})