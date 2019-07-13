import { browser, by, element } from 'protractor';

export class LoginTestCase {
	
	launchApp() {
		return browser.get('/'); /* http://localhost:4200/ */
	}


	doLogin() {
		browser.sleep(2000);
		
		element(by.name('username')).sendKeys('suresh');
		browser.sleep(3000);


		element(by.name('password')).sendKeys('admin123');
		browser.sleep(2000);

		element(by.name('email')).sendKeys('admin@gmail.com');

		element(by.buttonText('Login')).click();
		browser.sleep(1000);

		return element(by.css('login-component p')).getText();


	}
}