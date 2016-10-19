import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {
    constructor(
        private router: Router
    ) { }

    ngOnInit() { }

    gotoDetail(): void {
        this.router.navigate(['/todos'])
    }

    gotoAdmin(): void {
        this.router.navigate(['/admin'])
    }
}