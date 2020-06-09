<template>
  <div>{{count}}</div>
  <!-- <div>{{props.count}}</div> -->
</template>

<script>

export default {
    props: {
        count: Number
    },
    setup({ count }) {
        return count;
    }
    // setup(props) {
    //     return {props};
    // }
}
</script>
