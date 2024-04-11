import { Routes } from '@angular/router';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DrawerComponent } from './drawer/drawer.component';

export const routes: Routes = [
	{path: "sidenav", component: SidenavComponent},
	{path: "drawer", component: DrawerComponent},
];
