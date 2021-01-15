package webpages;

import java.net.MalformedURLException;
import java.net.URL;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;

public class BasePage {
    protected static WebDriver driver;

    public void setWebDriver(WebDriver driver) {
        BasePage.driver = driver;
    }

    public void startBrowser() throws MalformedURLException {
        DesiredCapabilities capabilities = DesiredCapabilities.firefox();
        driver = new RemoteWebDriver(new URL("http://localhost:4444/wd/hub"), capabilities	);
        setWebDriver(driver);
    }

    public void navigateToGoogle() {
        driver.navigate().to("http://www.google.com/");
    }

    public void closeBrowser() {
        driver.quit();
    }
}
