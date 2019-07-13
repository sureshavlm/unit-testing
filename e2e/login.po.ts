import { browser, by, element } from 'protractor';

export class LoginTest {
	
	launchApp(){
		return browser.get('/');
	} 

	doLogin() {

		element(by.name('username')).sendKeys('john');
		browser.sleep(5000);

		element(by.name('password')).sendKeys('john123');
		browser.sleep(5000);
		
		element(by.buttonText('Login')).click();

		return element(by.css('app-root p')).getText();


	}
}