import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { HostPluginComponent } from './host-plugin/host-plugin.component';


const routes: Routes = [
   {
      path: 'plugins', 
      component: HostPluginComponent
    }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
