Feature: Admin User login

Scenario Outline: User logins to Portal with valid credentials
When User enters <username> and <password> on LoginPage
And User clicks on Login button
Then Username is displayed on the home page
Examples:
|username|password|
|ebms|ebms|


Scenario Outline: User logs to Portal with blank username
When User enters <password>
And User clicks on Login button
Then Error message popup is displayed
Examples:
|password|
|ebms|