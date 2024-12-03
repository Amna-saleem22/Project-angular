import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'API';


  user: any[] = [];
  constructor( private http : HttpClient){
    this.getdata();
  }

   getdata(){
     this.http.get("https://jsonplaceholder.typicode.com/users").subscribe(
      (data:any) => {
        this.user = data
      },
      // (error) => {
      //   console.error('Error fetching users:', error);
      //   alert('Failed to fetch user data. Please try again later.');
      // }
     );
    
   }

}
