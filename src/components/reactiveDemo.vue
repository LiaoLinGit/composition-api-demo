<template>
  <div>
    <div>{{x}}</div>
    <!-- <div>{{pos.x}}</div> -->
  </div>
</template>

<script>
import { reactive } from '@vue/composition-api';

function useMousePosition() {
  const pos = reactive({
    x: 0,
  })

  function increment () { pos.x++; console.log(pos.x) }

  setTimeout(() => {
    increment();
  }, 1000);

  return pos
  // return {pos}
}

export default {
  setup() {
    const { x } = useMousePosition()
    return {x};
    // const { pos } = useMousePosition()
    // return { pos };
  }
}
</script>
