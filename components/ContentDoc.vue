
<template>
  <div>
    <h1>Content Document</h1>
    <template v-if="document">
      <!-- Display the content -->
      <div v-html="document.body"></div>
    </template>
    <template v-else>
      <!-- Not found message -->
      <h2>Document not found</h2>
    </template>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    try {
      const document = await $content(params.slug).fetch()

      return { document }
    } catch (error) {
      return { document: null }
    }
  },
}
</script>

<style scoped>
/* Add any necessary styles for your component */
</style>
