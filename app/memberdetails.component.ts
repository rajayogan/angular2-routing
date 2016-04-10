import {Component} from 'angular2/core';
import {Router} from 'angular2/router';

@Component({
    selector: 'member-details',
    templateUrl : 'app/memberdetails.html'
})

export class MemberDetailsComponent {
    
    constructor(private _router: Router){
        
    }
    
    movetopage(){
        this._router.navigate(['AboutUs']);
    }
    
}