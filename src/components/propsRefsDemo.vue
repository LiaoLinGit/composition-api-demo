<template>
  <div>{{count}}</div>
</template>

<script>
  import { ref } from '@vue/composition-api'

  export default {
    setup() {
        const count = ref('1')
        return {count}
    },
  }
</script>