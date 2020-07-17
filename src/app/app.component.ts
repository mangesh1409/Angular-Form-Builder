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
    this.data = profileForm.value;
    // console.log(profileForm.controls);
    console.log(profileForm.controls.nfgname.value);
    console.log(this.profileForm.get('nfgname').value);
    console.log(this.profileForm.controls.nfgemail.value);
    console.log(this.profileForm.get('nfgaddress.street').value);
    console.log(this.profileForm.get('nfgaddress.city').value);
    console.log(this.profileForm.get('nfgaddress.state').value);
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
