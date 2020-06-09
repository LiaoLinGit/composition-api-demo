<template>
  <div>{{count}}</div>
</template>

<script>
import { reactive /* readonly */ } from '@vue/composition-api';

export default {
  setup() {
    const count = reactive({ count: 2});
    // console.log(reactive, readonly);
    // const countOnly2 = readonly(count2);
    // console.log(countOnly2)
    return count;
  }
}
</script>
