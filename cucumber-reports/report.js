$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Admin User login",
  "description": "",
  "id": "admin-user-login",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "User logins to Portal with valid credentials",
  "description": "",
  "id": "admin-user-login;user-logins-to-portal-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User enters \u003cusername\u003e and \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "User clicks on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Username is displayed on the home page",
  "keyword": "Then "
});
formatter.examples({
  "line": 7,
  "name": "",
  "description": "",
  "id": "admin-user-login;user-logins-to-portal-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 8,
      "id": "admin-user-login;user-logins-to-portal-with-valid-credentials;;1"
    },
    {
      "cells": [
        "ebms",
        "ebms"
      ],
      "line": 9,
      "id": "admin-user-login;user-logins-to-portal-with-valid-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 8139791398,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "User logins to Portal with valid credentials",
  "description": "",
  "id": "admin-user-login;user-logins-to-portal-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User enters ebms and ebms",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "User clicks on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Username is displayed on the home page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "ebms",
      "offset": 12
    },
    {
      "val": "ebms",
      "offset": 21
    }
  ],
  "location": "LoginStepDef.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 43137202757,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 560800815,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.username_is_displayed_on_the_home_page()"
});
formatter.result({
  "duration": 224951908,
  "error_message": "org.openqa.selenium.InvalidSelectorException: Unable to locate an element with the xpath expression //div[@id\u003d\u0027welcomeMsg\u0027//a because of the following error:\nError: Unclosed predicate expression.\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/invalid_selector_exception.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027NBMUMANUJA8\u0027, ip: \u0027192.168.99.1\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.ie.InternetExplorerDriver\nCapabilities {acceptInsecureCerts: false, browserName: internet explorer, browserVersion: 11, javascriptEnabled: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:ieOptions: {browserAttachTimeout: 0, elementScrollBehavior: 0, enablePersistentHover: true, ie.browserCommandLineSwitches: , ie.edgechromium: false, ie.edgepath: , ie.ensureCleanSession: false, ie.fileUploadDialogTimeout: 3000, ie.forceCreateProcessApi: false, ignoreProtectedModeSettings: false, ignoreZoomSetting: false, initialBrowserUrl: http://localhost:14591/, nativeEvents: true, requireWindowFocus: false}, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 3aee6641-95f9-4eb2-ab80-0fcc878ae608\n*** Element info: {Using\u003dxpath, value\u003d//div[@id\u003d\u0027welcomeMsg\u0027//a}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.getText(Unknown Source)\r\n\tat pages.HomePage.getUsernameOnHomePage(HomePage.java:21)\r\n\tat pages.HomePage.verifyUsernameOnHomePage(HomePage.java:25)\r\n\tat stepDefinition.LoginStepDef.username_is_displayed_on_the_home_page(LoginStepDef.java:39)\r\n\tat ???.Then Username is displayed on the home page(Login.feature:6)\r\n",
  "status": "failed"
});
});