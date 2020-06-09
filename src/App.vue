<template>
  <div id="app">
    <div>
      <h2>setup</h2>
      <button @click="increment">{{count}}</button>
      <PropsDemo :name="count" />
      <h4>setup props</h4>
      <PropsTwoDemo />
    </div>

    <div>
      <h2>响应式系统API</h2>
      <div>
        <h4>ref</h4>
        <RefDemo />

        <h4>reactive</h4>
        <ReactiveDemo />

        <h4>computed</h4>
        <ComputedDemo />
        
        <h4>readOnly</h4>
        <ReadOnlyDemo />

        <h4>watchEffect</h4>
        <WatchEffect />

        <h4>watch</h4>
        <Watch />
      </div>
    </div>

    <div>
      <h2>生命周期钩子函数</h2>
      <LifeCycleDemo />
    </div>

    <div>
      <h2>依赖注入</h2>
      <ProvideInjectDemo />
    </div>

    <div>
      <h2>模板Refs</h2>
      <RefsDemo />
    </div>
  </div>
</template>

<script>
import Utils from './utils/index.ts';

import PropsDemo from './components/propsDemo.vue'
import PropsTwoDemo from './components/propsTwoDemo.vue'
import LifeCycleDemo from './components/lifeCycleDemo.vue'
import RefDemo from './components/refDemo.vue'
import ReactiveDemo from './components/reactiveDemo.vue'
import ComputedDemo from './components/computedDemo.vue'
import ReadOnlyDemo from './components/readOnlyDemo.vue'
import ProvideInjectDemo from './components/provideInjectDemo.vue'
import RefsDemo from './components/RefsDemo.vue'
import WatchEffect from './components/watchEffectDemo.vue'
import Watch from './components/watchDemo.vue'

export default {
  name: 'App',
  components: {
    PropsDemo,
    PropsTwoDemo,
    LifeCycleDemo,
    RefDemo,
    ReactiveDemo,
    ComputedDemo,
    ReadOnlyDemo,
    ProvideInjectDemo,
    RefsDemo,
    WatchEffect,
    Watch
  },
  setup() {
    const { count, increment } = Utils.useCounter()
    return {
      count,
      increment
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
