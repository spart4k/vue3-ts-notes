import { defineComponent, ref, PropType } from "vue"
import { INote } from '@/schemes'
import { useRouter } from "vue-router";

export default defineComponent({
  name: 'Note-Default',
  components: {},
  props: {
    note: {
      type: Object as PropType<INote>
    }
  },
  setup(props) {
    const router = useRouter();
    const open = (id: number) => {
      router.push({
        path: `/notes/${id}`
      })
    }
    return {
      open,
    }
  }
})