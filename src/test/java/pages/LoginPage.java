package pages;

import org.openqa.selenium.Alert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

import base.TestBase;
import util.PortalUtil;

public class LoginPage extends TestBase{
	
	@FindBy(id="txtBizPassUserID")
	WebElement txt_UserName;
	
	@FindBy(id="txtBizPassUserPassword")
	WebElement txt_pwd;
	
	@FindBy(id="login")
	WebElement btn_login;
	
	Alert alert;
	
	public LoginPage() {
		PageFactory.initElements(driver, this);
	}
	
	public void enterUserName(String username) {
		System.out.println(username);
		txt_UserName.sendKeys(username);
	}
	
	public void enterPassword(String password) {
		txt_pwd.sendKeys(password);
	}
	
	public HomePage clickLoginButton() {
		btn_login.submit();
		return new HomePage();
	}
	
	public void switchToAlert() {
		alert = driver.switchTo().alert();
	}
	
	public void dismissAlert() {
		alert.dismiss();
	}
	public String getAlertMessage() {	
		return alert.getText();
	}
	
	public void verifyAlertMessage() {
		Assert.assertEquals(getAlertMessage(), "Please enter Username");
	}
		
}
