import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServeiceService } from 'src/app/serveice.service';
@Component({
  selector: 'app-signup-users',
  templateUrl: './signup-users.component.html',
  styleUrls: ['./signup-users.component.css']
})
export class SignupUsersComponent {
  constructor(private service: ServeiceService, private router: Router) { }

  data: any

  
  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
   
  })

  submit(){
    this.data = this.form.value
    console.log(this.data)

    this.service.addUser(this.data).subscribe(data => {
      console.log(data)
    })

    this.router.navigate(['/home-page']);
  }
}
