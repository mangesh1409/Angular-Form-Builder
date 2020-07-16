import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FormBuilder';
  data;

  constructor(private fb:FormBuilder){}

  profileForm=this.fb.group({
    nfgname: [''],
    nfgemail: [''],
    nfgaddress:this.fb.group({
      street: [''],
      city: [''],
      state: [''],
    })
  });

  Submitdata(profileForm){
    // console.log(profileForm.value);
    this.data = profileForm.value;
    // console.log(profileForm.controls);
    console.log(profileForm.controls.nfgname.value);
    console.log(profileForm.controls.nfgemail.value);
    console.log(profileForm.nfgaddress.controls.street.value);
    // console.log(profileForm.controls.city.value);
    // console.log(profileForm.controls.state.value);

}
  updateProfile() {
    this.profileForm.patchValue({
      nfgname: 'Rohan',
      nfgemail: '234@gmail.com',
      nfgaddress: {
        street: '123 Drew',
        city: 'Mumbai',
        state: 'Maharashtra'
      }
    });
  }
}
