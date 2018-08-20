<template>
  <div class="cols">
    <textarea class="input" v-model="input" placeholder="Paste a CSV into this box." wrap="off" />
    <div>
      <pre><code>{{output}}</code></pre>
      <CopyButton v-bind:content="output" />
    </div>
  </div>
</template>

<script>
import { fromString } from 'csvtomd-lib'
import hd from 'heredocument'

import CopyButton from './copy_button'

const placeholder = hd`
  Name,Position,Wanted
  "Andromedus, Darrow au",Leader,Yes
  "Augustus, Victoria au",Accomplice,Yes
`.trim()

export default {
  name: 'Layout',
  components: { CopyButton },
  data: () => ({ input: placeholder }),
  computed: {
    output () {
      if (this.input === '') return 'Paste a CSV into the box on the left.'
      return fromString(this.input)
    }
  }
}
</script>

<style scoped lang="stylus">
.cols
  display: grid
  grid-gap: 20px
  grid-template-columns: 50% 50%
  @media(max-width: 800px)
    grid-template-columns: 1fr

.input, code
  font-family: 'Anonymous Pro', monospace
  font-size: 14px

pre
  background-color: #ddd
  margin-top: 0
  padding: 10px
  max-width: 600px
  overflow-x: scroll

</style>
