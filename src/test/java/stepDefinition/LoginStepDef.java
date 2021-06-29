package stepDefinition;

import base.TestBase;
import cucumber.api.PendingException;
import cucumber.api.java.en.When;
import pages.HomePage;
import pages.LoginPage;
import cucumber.api.java.en.Then;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;


public class LoginStepDef extends TestBase{
	
		LoginPage loginPage;
		HomePage homePage;
		String user_name = null;
		
		public LoginStepDef(){
			super();
		}
		
		@Before
		public void init() throws Exception {
			initialization();
			loginPage = new LoginPage();
		}

		@When("^User enters (.+) and (.+)$")
	    public void user_enters_username_and_password(String username, String password) {
	    	loginPage.enterUserName(username);
	    	loginPage.enterPassword(password);
	    	user_name = username;
	    }

	    @Then("^Username is displayed on the home page$")
	    public void username_is_displayed_on_the_home_page() throws Throwable {
	    	homePage.verifyUsernameOnHomePage(user_name);
	    }

	    @When("^User enters (.+) on LoginPage$")
	    public void user_enters_password_on_loginpage(String password) {
	    	loginPage.enterPassword(password);
	    }
	    
	    @Then("^Error message popup is displayed$")
	    public void error_message_popup_is_displayed() throws Throwable {
	    	loginPage.switchToAlert();
	        loginPage.verifyAlertMessage();
	        loginPage.dismissAlert();
	    }

	    @And("^User clicks on Login button$")
	    public void user_clicks_on_login_button() throws Throwable {
	        homePage = loginPage.clickLoginButton();
	    }
	    
	    //@After
	    public void tear_down() {
	    	tearDown();
	    }

	}

