import {Component, OnInit} from '@angular/core';
import {IonicPage, NavParams, NavController} from 'ionic-angular';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {L2nHttp} from "../../providers/l2n-http";

@IonicPage()
@Component({
  selector: 'page-my-garden-caring',
  templateUrl: 'my-garden-caring.html',
})

export class MyGardenCaringPage implements OnInit{

  public servicesForm: FormGroup;
  public serviceList:any;
  public selectOptions:any;

  constructor(public navParams: NavParams,
              private formBuilder: FormBuilder,
              private l2nHttp:L2nHttp,
              public navCtrl: NavController) {

  }

  ngOnInit(){

    this.selectOptions = {
      mode: 'md'
    };

    this.serviceList=[
      {text:'সাধারন পরিচর্যা', value:'1'},
      {text:'সেচ', value:'2'},
      {text:'কীটনাশক প্রয়োগ', value:'3'},
      {text:'ছত্রাকনাশক প্রয়োগ', value:'4'},
      {text:'রাসায়নিক সার প্রয়োগ', value:'5'},
      {text:'জৈব সার প্রয়োগ', value:'6'},
      {text:'ডালপালা ছাটাই', value:'7'},
      {text:'মাটি বদল', value:'8'},
      {text:'ফসল সংগ্রহ', value:'9'},
      {text:'অন্যান্য', value:'10'}
    ];

    this.servicesForm = this.formBuilder.group({
      refId: [this.navParams.data],
      serviceType: ['', [Validators.required]],
      serviceDate: [new Date().toLocaleString()],
      description: ['']
    });

  }

  submitValue(){

    console.log(this.servicesForm.value);
    this.l2nHttp.postRequest('service-each-tree',
      this.servicesForm.value, 'ডেটা সংরক্ষণ হচ্ছে...').then(
      data => {
        this.navCtrl.pop();
      }, err => {
        console.log(err);
      }
    );
  }

}
