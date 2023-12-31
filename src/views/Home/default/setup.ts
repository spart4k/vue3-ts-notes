import { defineComponent, ref } from "vue"
export default defineComponent({
  name: 'Main-View',
  components: {
  },
  setup() {
    const hello = ref<string>('hello')
    return {
      hello,
    }
  }
})