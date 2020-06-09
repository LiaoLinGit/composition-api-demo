<template>
  <div ref="root">
      <PropsRefsDemo ref="rootProp" />
  </div>
</template>

<script>
  import { ref, onMounted } from '@vue/composition-api'

  import PropsRefsDemo from './propsRefsDemo.vue'

  export default {
        components: {
            PropsRefsDemo,
        },
        setup() {
            const root = ref(null)
            const rootProp = ref(null)

            onMounted(() => {
                console.log(root.value)
                console.log(rootProp.value)
            })

            return {
                root,
                rootProp
            }
        },
  }
</script>