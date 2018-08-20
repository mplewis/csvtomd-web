<template>
  <div>
    <textarea v-model="input" />
    <pre><code>{{output}}</code></pre>
  </div>
</template>

<script>
import { fromString } from 'csvtomd-lib'

export default {
  name: 'Layout',
  data: () => ({ input: '' }),
  computed: { output () { return fromString(this.input) } }
}
</script>

<style scoped lang="stylus">

</style>
