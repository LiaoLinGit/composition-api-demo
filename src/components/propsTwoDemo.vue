<template>
  <PropsCompDemo :count="x" />
</template>

<script>
import Utils from '../utils/propsTwoDemo.ts';

import PropsCompDemo from './propsCompDemo.vue';

export default {
    components: {
        PropsCompDemo,
    },
    setup() {
        const { x } = Utils.useCounter();
        return { x };
    }
}
</script>
