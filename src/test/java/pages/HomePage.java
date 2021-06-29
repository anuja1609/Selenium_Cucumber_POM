package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

import base.TestBase;

public class HomePage extends TestBase{
	
	//@FindBy(xpath="//span[contains(text(),'Welcome')]//a")
	@FindBy(xpath="//div[@id='welcomeMsg'//a")
	WebElement username_link;
		
	public HomePage() {
		PageFactory.initElements(driver, this);
	}
	
	public String getUsernameOnHomePage() {
		return username_link.getText();
	}
	
	public void verifyUsernameOnHomePage(String username) {
		Assert.assertEquals(getUsernameOnHomePage(), username);
	}
	
}