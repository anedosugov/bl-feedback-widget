<template>
  <div class="feedback-list">
    <div class="row">
      <div
        class="feedback-list__item"
        v-for="feedback in feedbackList"
        :key="feedback.uuid"
      >
        <div class="feedback-list__item-heading">
          <img class="feedback-list__item-heading-avatar"
            :src="'https://api.adorable.io/avatars/64/' + feedback.uuid + '.png'"
            alt="author avatar"
          />
          {{ feedback.author.name }}
        </div>
        <div class="feedback-list__item-body">
          <h5>
            {{ feedback.title }}
            <div class="feedback-list__rating ">
              <font-awesome-icon
                icon="star"
                v-for="i in feedback.rating"
                :key="i"
              ></font-awesome-icon>
            </div>
          </h5>
          <div v-html="feedback.body"></div>
        </div>
        <div class="feedback-list__item-footer">
          <div>
            <font-awesome-icon icon="heart"></font-awesome-icon>
            <div>{{ feedback.statistics.vote_count }}</div>
          </div>
          <div>
            <font-awesome-icon icon="comment"></font-awesome-icon>
            <div>{{ feedback.statistics.answer_count }}</div>
          </div>
          <div>
            Kommentieren
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: mapState(["feedbackList", "page", "total", "perPage"]),
  methods: mapActions(["fetchFeedbacks"])
};
</script>

<style lang="scss" scoped>

.feedback-list {
  @extend .container-fluid;
  @extend .py-3;
  @extend .px-4;
  max-width: 900px;
  &__item {
    @extend .col-12;
    @extend .p-3;
    @extend .mb-3;
    list-style: none;
    background-color: white;
  }
  &__item-heading {
    @extend .mb-2;
    &-avatar {
      @extend .rounded-circle;
      @extend .mr-1;
      width: 40px;
      height: 40px;
    }
  }

  &__item-body {
    margin-bottom: 1rem;
  }
  &__rating {
    @extend .text-primary;
    @extend .d-md-inline-block;
    font-size: 1.1rem;
    svg {
      margin-right: 0.2rem;
    }
  }
  &__item-footer {
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
}
</style>
