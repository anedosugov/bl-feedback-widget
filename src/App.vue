<template>
  <div class="feedback-app">
    <FeedbackList/>
    <FeedbackListControls/>
  </div>
</template>

<script>
import FeedbackList from './components/FeedbackList.vue'
import FeedbackListControls from './components/FeedbackListControls.vue'

export default {
  name: 'app',
  components: {
    FeedbackList,
    FeedbackListControls
  }
}
</script>
<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700');
  .feedback-app {
    background-color: $gray-lightest;
    font-family: 'Roboto', sans-serif;
    color: $gray-dark;
  }
</style>