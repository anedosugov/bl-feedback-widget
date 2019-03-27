<template>
  <div class="feedback-list-controls">
    <div class="row">
      <div class="text-center col-12">
        <div v-show="loading" class="spinner-border text-primary" role="status">
          <span class="sr-only">Loading...</span>
        </div>
        <button
          class="feedback-list-controls__btn-loadmore"
          v-show="isThereMore && !loading"
          @click="fetchFeedbacks"
        >
          load more
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: mapState(["isThereMore", "loading"]),
  methods: mapActions(["fetchFeedbacks"])
};
</script>

<style lang="scss" scoped>

.feedback-list-controls {
  @extend .container-fluid;
  @extend .py-3;
  @extend .px-4;
  max-width: 900px;
  &__btn-loadmore {
    @extend .btn;
    @extend .btn-outline-primary;
    border-radius: 50% !important;
    border-width: 2px !important;
    width: 90px !important;
    height: 90px !important;
    font-size: 0.8rem !important;
  }
}
</style>
