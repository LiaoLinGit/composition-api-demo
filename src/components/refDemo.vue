<template>
  <button @click="add">点击加一</button>
</template>

<script>
import { ref } from '@vue/composition-api';

export default {
  setup() {
    const count = ref(0);

    function add() {
        count.value ++;
        console.log(count.value);
    }
    return {add};
  }
}
</script>
