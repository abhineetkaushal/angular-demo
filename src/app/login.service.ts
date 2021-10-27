import { Injectable } from '@angular/core';

@Injectable({
  providedIn: null
})
export class LoginService {

  constructor() { }
  login(){
    console.log("Firing")
  /*
  API CALLS AND STUFF
  */
    return "You are logged in";
  }
}
