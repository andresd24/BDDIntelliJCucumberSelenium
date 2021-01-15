
# proof on point to open browser using whole BDD stack
Feature: Test opening a Firefox browser to Google
  Testing the configuration of Cucumber

  Scenario: User opens a Firefox browser to Google
    Given The user opens a Firefox browser and navigates to Google
    Then Close browser after 5 seconds


