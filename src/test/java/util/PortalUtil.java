package util;

import org.openqa.selenium.WebElement;

public class PortalUtil {
	
	public static void textField_enterData(WebElement e, String value) {
		e.sendKeys(value);
	}
	
	public static void button_submit(WebElement e) {
		e.submit();
	}
	
	
}
