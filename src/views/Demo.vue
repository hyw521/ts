<template>
  <div class="demo">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
import { greeter } from '@/TS/demo1'
export default {
  data() {
    return {}
  },
  created() {
    console.log(1)
  },
  methods: {
    clickButton() {
      console.log(1)
    },
  },
}
</script>