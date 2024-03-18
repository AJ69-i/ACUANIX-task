import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as iziToast from "iziToast";
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { ShowLayoutService } from 'src/app/core/services/show-layout/show-layout.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  hide:boolean = true;
  loginForm:FormGroup = new FormGroup({
    username : new FormControl(null, [Validators.required]),
    password : new FormControl(null, [Validators.required]),
  });

  constructor(private router: Router, private Auth: AuthService, private ShowLayout: ShowLayoutService) {
  }

  login(loginForm:FormGroup) {
    if(loginForm.valid) {
      this.Auth.login(loginForm.value).subscribe({
        next: (response)=> {
          if(response) {
            iziToast.default.success({
              title: "Success",
              message: "OK",
              timeout: 3000,
              position: 'bottomRight',
              transitionIn: 'fadeIn',
              transitionOut: 'fadeOutLeft',
              drag: true,
              transitionInMobile: 'fadeInDown',
              transitionOutMobile: 'fadeOutDown',
            });
            this.ShowLayout.setValue("auth" , loginForm.value);
            this.router.navigateByUrl("/products", { replaceUrl: true });
          }
        }
      });
    }
  }
}
