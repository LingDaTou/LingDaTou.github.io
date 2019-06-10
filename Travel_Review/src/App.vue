<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
  </div>
</template>
s
<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
