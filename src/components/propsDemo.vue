<template>
  <div>{{name}}</div>
</template>

<script>
export default {
  props: {
    name: Number,
  },
  setup(props, context) {
    console.log(props.name, context);
  }
  // setup({ name }, context) {
  //   console.log(name, context);
  // }
}
</script>
