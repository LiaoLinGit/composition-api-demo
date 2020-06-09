<template>
  <button @click="add">点击加一</button>
</template>

<script>
import { watch, reactive, ref } from '@vue/composition-api';

export default {
  setup() {
    const count = reactive({
        count: 0
    });
    const countRef = ref(0);

    function add() {
        countRef.value ++;
        count.count ++;
    }

    watch([countRef, () => count.count], () => {
        console.log(countRef.value);
        console.log(count.count);
    })

    return {add};
  }
}
</script>
