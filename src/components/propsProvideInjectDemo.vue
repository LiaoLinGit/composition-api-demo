<template>
  <div>{{count.countReac}}</div>
</template>

<script>
import { inject } from '@vue/composition-api';

export default {
  setup() {
      const count = inject('count');
      return {count};
  }
}
</script>
