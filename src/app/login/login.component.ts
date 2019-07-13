import { Component } from '@angular/core';

@Component({
	selector: 'login-component',
	templateUrl: './login.component.html'
})

export class LoginComponent {
	
	status = "";

	validateLogin() {
		this.status = "Login Success!";

		//if success redirect
		//else show error message
	}
}