Feature: Admin User login

Scenario Outline: User logins to Portal with valid credentials
When User enters <username> and <password>
And User clicks on Login button
Then Username is displayed on the home page
Examples:
|username|password|
|ebms|ebms|

