package steps;

import  webpages.BasePage;
import cucumber.annotation.en.Given;
import cucumber.annotation.en.Then;
import java.net.MalformedURLException;

public class FirstFeatureSteps {
    BasePage basePage;

    public FirstFeatureSteps() {
        basePage = new BasePage();
    }


    @Given("^The user opens a Firefox browser and navigates to Google$")
    public void navigateToChrome() throws MalformedURLException {

        basePage.startBrowser();
        basePage.navigateToGoogle();

    }

    @Then("^Close browser after 5 seconds$")
    public void closeBrowserAfter5Seconds() throws InterruptedException {

        Thread.sleep(5000);
        basePage.closeBrowser();

    }

}
