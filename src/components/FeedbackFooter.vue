<template>
  <div class="feedback-footer">
    <div>
      <font-awesome-icon icon="heart"></font-awesome-icon>
      <div>{{ votes }}</div>
    </div>
    <div>
      <font-awesome-icon icon="comment"></font-awesome-icon>
      <div>{{ answers }}</div>
    </div>
    <div>{{ dateSince }}</div>
    <div>
      Kommentieren
    </div>
  </div>
</template>

<script>
  export default {
    props: ['votes', 'answers', 'dateSince'],
  }
</script>

<style lang="scss" scoped>
.feedback-footer {
  color: $gray-light;
  line-height: 1;
  font-size: 0.9rem;
  * {
    margin-right: 0.5rem;
    display: inline-block;
  }
  > * {
    cursor: pointer;
    margin-right: 0.8rem;
  }
}
</style>
