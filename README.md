# feedback-widget

## Project setup
```
npm install
npm run build
```

## JSON-Server setup
```
npm i -g json-server serve
```

### Start fake API
```
cd fakeAPI
json-server db.json
```

### Start local file server
```
serve dist
```
Widget should be running on http://localhost:5000/

### To test embedding add loader script to your page
```
<script async src="http://localhost:5000/blFeedbackWidget.js"></script>
```

### Compiles and hot-reloads for development
```
npm run serve
```

## [TESTS are WIP]

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your unit tests
```
npm run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
