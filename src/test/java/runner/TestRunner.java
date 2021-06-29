package runner;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(
        features = "src/test/java/resources/features",
        glue = {"stepDefinition"},
        plugin = { "pretty", "json:cucumber-reports/Cucumber.json",
        				 "junit:cucumber-reports/Cucumber.xml",
        				 "html:cucumber-reports"},
        monochrome = true)
public class TestRunner extends AbstractTestNGCucumberTests {

}
