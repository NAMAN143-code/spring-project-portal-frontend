import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {


  public user={
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',

  }

  constructor(private userService: UserService) {}
  submitForm(){
    console.log(this.user);
    
    this.userService.addUser(this.user).subscribe(
      (data) => {
        console.log(data)
        alert("success")
      },
      (err)=>{
        console.log("error")
        alert("something went wrong")
        

      }
    )
    
  }




}
