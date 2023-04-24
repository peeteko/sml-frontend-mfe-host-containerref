import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'sml-frontend-prototype';
  
  constructor(private readonly userService : UserService,
              private readonly router : Router){
  }

  ngOnInit(): void {
  }

  public loggedIn() : boolean{
    return this.userService.loggedIn;
  }

  public async goToPlugins(){
    console.log("start navigate to plugins")   
    this.router.navigateByUrl("/plugins");
  }

  public async signIn(){
    this.userService.loadUserDetails();
  }

  public async signOut(): Promise<void> {
    this.userService.signOut();
  }
}
