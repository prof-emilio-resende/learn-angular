import { Routes } from '@angular/router';
import { RouteOneComponent } from './route-one/route-one.component';
import { RouteTwoComponent } from './route-two/route-two.component';

export const routes: Routes = [
    { path: '1', component: RouteOneComponent },
    { path: '2', component: RouteTwoComponent }
];
