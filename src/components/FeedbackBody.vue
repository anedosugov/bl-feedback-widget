<template>
  <div class="feedback-body">
    <h5>
      {{ title }}
      <div class="feedback-body__rating ">
        <font-awesome-icon
          icon="star"
          v-for="i in rating"
          :key="i"
        ></font-awesome-icon>
      </div>
    </h5>
    <div v-html="body"></div>
  </div>
</template>

<script>
  export default {
    props: ['title', 'rating', 'body'],
  }
</script>

<style lang="scss" scoped>
.feedback-body {
  margin-bottom: 1rem;
  &__rating {
    @extend .text-primary;
    @extend .d-md-inline-block;
    font-size: 1.1rem;
    svg {
      margin-right: 0.2rem;
    }
  }
}
</style>
