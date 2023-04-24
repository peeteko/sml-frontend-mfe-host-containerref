
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EpfPlaceholderComponent } from './epf-placeholder.component';


const routes: Routes = [
    { path: '', component: EpfPlaceholderComponent, pathMatch: 'full' }
 ];
 
@NgModule({
    declarations: [ EpfPlaceholderComponent ],
    imports: [ RouterModule.forChild(routes)],
    providers: [],
    bootstrap: [EpfPlaceholderComponent]
  })
export class EpfPlaceHolderModule{ }