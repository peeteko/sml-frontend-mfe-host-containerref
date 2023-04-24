import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SmlUserDetails } from '../model/sml-user-details';
import { Observable , Subject} from 'rxjs';
import { environment } from 'src/environments/environment';
import { SmlUserDetailsWithToken } from '../model/sml-user-details-with-token';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  smlUserDetailsWithToken : SmlUserDetailsWithToken | null = null;
  smlUserDetailsWithTokenSubject : Subject<SmlUserDetailsWithToken | null>
  loggedIn : boolean = false;

  constructor( private readonly httpClient: HttpClient,private readonly router: Router) { 
    this.smlUserDetailsWithTokenSubject = new Subject<SmlUserDetailsWithToken | null>();
  }

  public loadUserDetails() {
    this.httpClient.get<SmlUserDetailsWithToken>(`${environment.smlCustomerApiEndpoint}/customer/user/me`, 
    {headers : this._getBaseHeaders()} )
    .subscribe((smlUserDetailsWithToken) => {
      this.smlUserDetailsWithToken = smlUserDetailsWithToken;
      this.smlUserDetailsWithTokenSubject.next(smlUserDetailsWithToken);
      console.log('loaded user details in userservice '+ smlUserDetailsWithToken);
      this.loggedIn = true;
    },
    error => {
      this.signOut();
    });
  }

  public signOut(){
    this.loggedIn = false;
    this.smlUserDetailsWithToken = null;
    this.smlUserDetailsWithTokenSubject.next(this.smlUserDetailsWithToken);
    this.router.navigateByUrl("/");
  }

  private _getBaseHeaders() : HttpHeaders{
    return new HttpHeaders({
      'Cache-Control': 'no-cache, no-store, must-revalidate, post-check=0, pre-check=0',
      'Pragma': 'no-cache',
      'Expires': '0',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE, PUT, OPTIONS'
    });
  }
}
