<template>
  <button @click="add">点击加一 {{count}}</button>
</template>

<script>
import { ref, watchEffect } from '@vue/composition-api';

export default {
  setup() {
    const count = ref(0);

    function add() {
        count.value ++;
    }

    // const addWacth = watchEffect(() => {
    //     console.log(count.value);
    // })
    // addWacth();
    watchEffect(() => {
        console.log(count.value);
    })
    return {count, add};
  }
}
</script>
