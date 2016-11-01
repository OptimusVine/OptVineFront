import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeopleService } from '../services/people.service'
import { AuthenticationService } from '../services/auth.service'

@Component({
    selector: 'home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {
    private auth

    private email: string;
    private password: string;
    private userSet: boolean

    constructor(
        private router: Router,
        private peopleService: PeopleService,
        private authenticationService: AuthenticationService
    ) { }

    ngOnInit() { 
        this.loggedIn()
    }

    loggedIn(): void{
        if(localStorage.getItem('currentUser')){
            this.userSet = true 
        } else {
            this.userSet = false
        }
    }
    

    signup(): void {
      this.peopleService.signup(this.email, this.password).subscribe(res => this.auth = res)
    }

    login(): void {
      this.authenticationService.login(this.email, this.password).subscribe(res => this.auth = res)
    }

    logout(): void {
      this.authenticationService.logout()
      this.userSet = false
    }

    gotoDetail(): void {
        this.router.navigate(['/todos'])
    }

    gotoAdmin(): void {
        this.router.navigate(['/admin'])
    }
}