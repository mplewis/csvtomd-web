<template>
  <div id="app">
    <h1>csvtomd online</h1>
    <router-view/>
    <div class="footer">
      <p>Made by <a href="http://mplewis.com">Matt Lewis</a></p>
      <p>Fork this on <a href="https://github.com/mplewis/csvtomd-web">GitHub</a></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="stylus">
@import url('https://fonts.googleapis.com/css?family=Anonymous+Pro|Muli:400,700')

#app
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
  font-family: 'Muli', sans-serif

.footer
  text-align: center
  p
    display: inline-block
    &+p
      margin-left: 20px
</style>
