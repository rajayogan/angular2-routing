import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {AboutUsComponent} from './aboutus.component';
import {PricingComponent} from './pricing.component';
import {MemberDetailsComponent} from './memberdetails.component';

@RouteConfig([
  {path: '/aboutus', name:'AboutUs', component: AboutUsComponent, useAsDefault: true},
  {path: '/pricing', name:'Pricing', component: PricingComponent},
  {path: '/memberdetails/:id', name:'MemberDetails', component: MemberDetailsComponent},
  {path: '/*other', name:'Other', redirectTo: ['AboutUs']}  
])

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class AppComponent { }
