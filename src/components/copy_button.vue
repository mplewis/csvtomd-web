<template>
  <button
    v-if="content && content !== ''"
    :disabled="copied"
    v-clipboard:copy="content"
    v-clipboard:success="onCopy"
    class="copy-button"
  >
    {{ copied ? 'Copied!' : 'Copy to clipboard' }}
  </button>
</template>

<script>
import Vue from 'vue'
import VueClipboard from 'vue-clipboard2'

Vue.use(VueClipboard)

export default {
  name: 'CopyButton',
  props: { content: { type: String, required: true } },
  data: () => ({ copied: false }),
  methods: {
    onCopy () {
      this.copied = true
      setTimeout(() => (this.copied = false), 1000)
    }
  }
}
</script>
