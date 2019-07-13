import { browser } from 'protractor';

import { LoginTestCase } from './login.test.po';


describe('Demo App', () => {

	let login: LoginTestCase;

	beforeEach(() => {
		login = new LoginTestCase();
	});

	it('login test', () => {

		login.launchApp(); //load app into browser

		expect(login.doLogin()).toEqual('Login Success!');

		browser.sleep(2000);
	});

});