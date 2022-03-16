import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from'@angular/forms';
import { RecomService } from '../services/recom.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  display ="none";

  loginForm = new FormGroup({
    contact_email : new FormControl(""),
    password : new FormControl("")
  });
  constructor( private recomService : RecomService) { }

  ngOnInit(): void {

  }
  loginSubmit(loginForm){
    this.recomService.loginCustomer(loginForm);
    this.display ="none";
  }

}
