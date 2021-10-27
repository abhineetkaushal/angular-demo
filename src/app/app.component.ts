import { Component } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-demo';
  count = 0;
  show = true;
  list = [1,2,3,4,5]
  proopertyBindingExample = "https://www.google.co.in"
  onClick(e:any){
     console.log(this.count);
  }
}

 