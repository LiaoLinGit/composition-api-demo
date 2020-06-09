<template>
    <div>
        <button @click="increment">{{count}}</button>
    </div>
</template>

<script>
import Utils from '../utils/index.ts';

import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from '@vue/composition-api';

export default {
    setup() {
        const { count, increment } = Utils.useCounter()

        onBeforeMount(() => {
            console.log(count.value);
        });
        onMounted(() => {
            console.log(count.value);
        });
        onBeforeUpdate(() => {
            console.log(count.value);
        });
        onUpdated(() => {
            console.log(count.value);
        });
        onBeforeUnmount(() => {
            console.log(count.value);
        });
        onUnmounted(() => {
            console.log(count.value);
        });

        return {
            count,
            increment,
        }
    }
}
</script>