<template>
  <div class="feedback-footer">
    <div class="feedback-footer__counters">
      <div>
        <font-awesome-icon icon="heart"></font-awesome-icon>
        <div>{{ votes }}</div>
      </div>
      <div>
        <font-awesome-icon icon="comment"></font-awesome-icon>
        <div>{{ answers }}</div>
      </div>
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
    cursor: pointer;
    margin-right: 0.5rem;
    display: inline-block;
  }
  &__counters {
    @extend .d-block;
    @extend .d-sm-inline;
    @extend .mb-2;
    @extend .mb-sm-0;
  }
}
</style>
