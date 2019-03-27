(function () {
  var blFeedbackStyleEl = document.createElement('link');
  blFeedbackStyleEl.setAttribute('href', 'http://localhost:5000/css/app.css');
  blFeedbackStyleEl.setAttribute('rel', 'stylesheet');

  document.head.appendChild(blFeedbackStyleEl);
})();
(function () {
  var feedbackRootWrapper = document.createElement('div');
  feedbackRootWrapper.classList.add('bl-feedback-widget');

  var feedbackApp = document.createElement('div');
  feedbackApp.id = 'bl-feedback-app';

  feedbackRootWrapper.appendChild(feedbackApp);

  document.body.appendChild(feedbackRootWrapper);
})();
(function () {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.async = true;
  script.src = 'http://localhost:5000/js/app.js';

  document.body.appendChild(script);
})();