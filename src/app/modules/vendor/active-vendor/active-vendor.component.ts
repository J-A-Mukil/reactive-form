import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { JsonPipe } from '@angular/common';


@Component({
  selector: 'app-active-vendor',
  templateUrl: './active-vendor.component.html',
  styleUrls: ['./active-vendor.component.scss']
})
export class ActiveVendorComponent implements OnInit {

  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
  }

  // myForm = new FormGroup({
  //   userName: new FormControl(''),
  //   email: new FormControl(''),
  //   bio: new FormControl(''),
  //   domain: new FormControl(''),
  // })

  myForm = this.fb.group({
    userName : ['', Validators.required],
    email : ['', Validators.required],
    bio : ['', Validators.required],
    domain: ['', Validators.required]
  })

  data!: any;

  onSubmit() {
    this.data = this.myForm.value
    console.log(this.data);
    this.myForm.reset()
  }


  get userName(){
    return this.myForm.get('userName')
  }
  get email(){
    return this.myForm.get('email')
  }
  get bio(){
    return this.myForm.get('bio')
  }
  get domain(){
    return this.myForm.get('domain')
  }
}
