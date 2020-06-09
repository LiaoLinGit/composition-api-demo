<template>
  <div>{{computedCount2}}</div>
</template>

<script>
import { computed, ref, reactive } from '@vue/composition-api';

export default {
  setup() {
    const count1 = ref(1)
    const count2 = reactive({
        num: 1,
    })
    const computedCount1 = computed(() => count1.value += 1)
    const computedCount2 = computed(() => count2.num += 1)
    console.log(computedCount1);
    return {computedCount2};
  }
}
</script>
