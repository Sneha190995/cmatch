import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl  } from '@angular/forms';
import { RecomService} from '../services/recom.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  display ="none";
  users : any;

  userForm = new FormGroup({
    id : new FormControl(""),
    first_name: new FormControl(""),
    last_name: new FormControl(""),
    user_name: new FormControl(""),
    password : new FormControl(""),
    email: new FormControl(""),
    mobile_number: new FormControl("")
  });
  constructor( private _recomService :RecomService) { }

  ngOnInit(): void {
    let res = this._recomService.getUser();
      res.subscribe( data => {
        this.users = data;
        console.log(this.users);
      });
    }
  
    //submit function 
  onSubmit(userForm) {
		console.log(userForm.value);
		this._recomService.createUser(userForm);
		// modal display unvisible
		this.display = "none" ;
  }
  }

