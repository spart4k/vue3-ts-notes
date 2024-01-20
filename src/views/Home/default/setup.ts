import { defineComponent, ref } from "vue"
import Frame from '@/components/@logic/Frame/default/index.vue'
export default defineComponent({
  name: 'Main-View',
  components: {
    Frame,
  },
  setup() {
    const hello = ref<string>('hello')
    return {
      hello,
    }
  }
})