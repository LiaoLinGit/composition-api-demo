<template>
  <div>
      <!-- <button @click="add">点击加一</button> -->
      <PropsProvideInjectDemo />
    </div>
</template>

<script>
import { provide, ref, reactive } from '@vue/composition-api';

import PropsProvideInjectDemo from './propsProvideInjectDemo.vue';

export default {
    components: {
        PropsProvideInjectDemo,
    },
    setup() {
        const count = ref(1);
        const countReac = reactive({
            countReac: 5,
        })
        // function add() {
        //     count.value += 1;
        // }
        setTimeout(() => {
            count.value += 1;
            countReac.countReac += 1;
            console.log(count.value, countReac.countReac);
        }, 1000);
        provide('count', countReac);
    }
}
</script>
