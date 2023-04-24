import { loadRemoteModule } from '@angular-architects/module-federation';
import { Directive, ViewContainerRef, ChangeDetectorRef } from '@angular/core';
import { UserService } from '../services/user-service.service';
import { SmlUserDetailsWithToken } from '../model/sml-user-details-with-token';

@Directive({
  selector: '[appHostRemote]'
})
export class HostRemoteDirective {  

  

  constructor( private viewContainerRef : ViewContainerRef, private readonly userService : UserService, private changeDetectorRef : ChangeDetectorRef) { 
    console.log('HostRemoteDirective contstructor');

  }

  ngOnInit() : void {
    console.log('HostRemoteDirective ngOnInit');
    this.userService.smlUserDetailsWithTokenSubject.subscribe((smlUserDetailsWithToken : SmlUserDetailsWithToken | null) => {
      if (smlUserDetailsWithToken === null){
        console.log('clear ref in onInit');
        this.viewContainerRef.clear();
      }
      else{
        this.loadRemoteModuleAndSetToken();
      }      
    })

    this.loadRemoteModuleAndSetToken();
   

   
  }

  private loadRemoteModuleAndSetToken() : void{
    console.log('loadRemoteModuleAndSetToken');
    loadRemoteModule({
      type : 'module',
      remoteEntry : 'http://localhost:4201/remoteEntry.js',
      exposedModule: './PluginConnectionsComponent', // <<<< Use the component expose
    }).then((m) => {
      const componentType = m.PluginConnectionsComponent;      
      const componentInstance = this.viewContainerRef.createComponent(componentType).instance;
      (componentInstance as any).jwtTokenCurrentValue = this.userService.smlUserDetailsWithToken?.jwtTokenCustomized;
      console.log('token in remote component' + (componentInstance as any).jwtTokenCurrentValue);
      console.log('this.userService.smlUserDetailsWithToken' + this.userService.smlUserDetailsWithToken);
    }).catch(e => {
      console.error(e);
      return import('../epf-placeholder/epf-placeholder.module').then(m => m.EpfPlaceHolderModule);
    })

    this.changeDetectorRef.detectChanges();
  }

}
