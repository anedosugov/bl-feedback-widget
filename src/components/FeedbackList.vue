<template>
  <div class="feedback-list">
    <div class="row">
      <div
        class="feedback-list__item"
        v-for="feedback in feedbackList"
        :key="feedback.uuid"
      >
        <FeedbackHeader
          :avatar="
            'https://api.adorable.io/avatars/64/' + feedback.uuid + '.png'
          "
          :name="feedback.author.name"
          :dateSince="timeAgo(feedback.created_at)"
        ></FeedbackHeader>
        <FeedbackBody
          :title="feedback.title"
          :rating="feedback.rating"
          :body="feedback.body"
        >
        </FeedbackBody>
        <FeedbackFooter
          :votes="feedback.statistics.vote_count"
          :answers="feedback.statistics.answer_count"
          :dateSince="timeAgo(feedback.last_activity_at)"
        >
        </FeedbackFooter>
      </div>
    </div>
  </div>
</template>

<script>
import FeedbackHeader from "./Feedback/FeedbackHeader";
import FeedbackBody from "./Feedback/FeedbackBody";
import FeedbackFooter from "./Feedback/FeedbackFooter";
import { mapState, mapActions } from "vuex";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
TimeAgo.addLocale(en);

const timeAgo = new TimeAgo("en-US");

export default {
  components: {
    FeedbackHeader,
    FeedbackBody,
    FeedbackFooter
  },
  computed: mapState(["feedbackList", "page", "total", "perPage"]),
  methods: {
    timeAgo: date => timeAgo.format(Date.parse(date)),
    ...mapActions(["fetchFeedbacks"])
  }
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
}
</style>
