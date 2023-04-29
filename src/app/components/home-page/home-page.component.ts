import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServeiceService } from 'src/app/serveice.service';
import { User } from '../Model/User';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  users: any[] | undefined
  url: string = "http://localhost:8080/";

  constructor(private service: ServeiceService, private router: Router) { 
   
  }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.service.getUserById(id).subscribe(data => {
      this.user = data
      console.log(this.user)
    })
  
  }
  updateUser(id: number){
    this.router.navigate(['update', id]);
  }
  signUpPage(){
    this.router.navigate(['signUp']);
  }
}
