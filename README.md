# Lab 5 - Starter
Arjun Varshney
David Wang


Part 3:
1. No, I would not use unit tests to test the "message" feature. This is because ensuring that a message one user sent is received by another user involves multiple parts of the application such as the server, the client, and the network connection between the two users. It has too many moving parts to unit test.
2. Yes, I would use a unit test to test the "max message length" feature of a messaging application. This constraint is something simple that can be easily isolated and tested within a unit test without a dependency on other components. The unit test can verify that the input message is truncated to 80 characters.

