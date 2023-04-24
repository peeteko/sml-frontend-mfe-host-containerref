import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user-service.service';

@Component({
  selector: 'app-host-plugin',
  templateUrl: './host-plugin.component.html',
  styleUrls: ['./host-plugin.component.scss']
})
export class HostPluginComponent implements OnInit{  
  

  constructor(private readonly userService : UserService){
    console.log('host plugin component constructor')
  }

  ngOnInit(): void {
    console.log('host plugin component init')
  }

  

}
