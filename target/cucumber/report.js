$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri('FirstFeature.feature');
formatter.feature({
  "comments": [
    {
      "line": 2,
      "value": "# proof on point to open browser using whole BDD stack"
    }
  ],
  "line": 3,
  "name": "Test opening a Firefox browser to Google",
  "description": "Testing the configuration of Cucumber",
  "id": "test-opening-a-firefox-browser-to-google",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 6,
  "name": "User opens a Firefox browser to Google",
  "description": "",
  "id": "test-opening-a-firefox-browser-to-google;user-opens-a-firefox-browser-to-google",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "The user opens a Firefox browser and navigates to Google",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Close browser after 5 seconds",
  "keyword": "Then "
});
formatter.match({
  "location": "FirstFeatureSteps.navigateToChrome()"
});
formatter.result({
  "duration": 6581431388,
  "status": "passed"
});
formatter.match({
  "location": "FirstFeatureSteps.closeBrowserAfter5Seconds()"
});
formatter.result({
  "duration": 5527900544,
  "status": "passed"
});
});