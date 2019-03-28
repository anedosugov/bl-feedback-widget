<template>
  <div class="feedback-header">
    <img
      class="feedback-header__avatar"
      :src=avatar
      alt="author avatar"
    />
    <div class="feedback-header__namedate">
      <div>{{ name }}</div>
      <div>{{ dateSince }}</div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['name', 'dateSince', 'avatar'],
  }
</script>

<style lang="scss" scoped>
.feedback-header {
  @extend .mb-2;
  display: flex;
  &__avatar {
    @extend .rounded-circle;
    @extend .mr-2;
    width: 40px;
    height: 40px;
  }
  &__namedate {
    font-size: 0.9rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
