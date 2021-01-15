$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri('FirstFeature.feature');
formatter.feature({
  "line": 1,
  "name": "Login and Registration",
  "description": "Testing the configuration of Cucumber",
  "id": "login-and-registration",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "User opens a firefox browser to Google",
  "description": "",
  "id": "login-and-registration;user-opens-a-firefox-browser-to-google",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "The user opens a Firefox browser and navigates to Google",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Close browser after 5 seconds",
  "keyword": "Then "
});
formatter.match({
  "location": "FirstFeatureSteps.navigateToChrome()"
});
formatter.result({
  "duration": 6930267167,
  "status": "passed"
});
formatter.match({
  "location": "FirstFeatureSteps.closeBrowserAfter5Seconds()"
});
formatter.result({
  "duration": 5797633247,
  "status": "passed"
});
});