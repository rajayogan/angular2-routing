import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'about-us',
    templateUrl: 'app/aboutus.html',
    directives: [ROUTER_DIRECTIVES]
})

export class AboutUsComponent {
    teammembers: String[];
    
    constructor() {
        
    }
    
    ngOnInit() {
        this.teammembers = ['raja', 'steve', 'trevor'];
    }
    
}