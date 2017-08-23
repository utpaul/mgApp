import {Component, OnInit} from '@angular/core';
import {IonicPage, NavParams, NavController} from 'ionic-angular';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {API_CONFIG} from "../../constants/api";
import {L2nHttp} from "../../providers/l2n-http";
@IonicPage()
@Component({
  selector: 'page-admin-problem-form',
  templateUrl: 'admin-problem-form.html',
})
export class AdminProblemFormPage implements OnInit{

  private loadData:any;
  public solutionForm: FormGroup;
  private imageUrl:any;
  private imagesList:Array<string>;
  constructor( public navParams: NavParams,
               private formBuilder: FormBuilder,
               public navCtrl: NavController,
               private l2nHttp:L2nHttp) {
    this.imageUrl =API_CONFIG.misBase2;
  }

  ngOnInit(){

    this.loadData = this.navParams.data;

    if(this.loadData.image != '---'){
      this.imagesList = this.loadData.image.split(",");
    }

    this.solutionForm = this.formBuilder.group({
      id:[this.loadData.id],
      audio:[''],
      description: ['',[Validators.required]]
    });

  }

  submitValue(){

    this.l2nHttp.postRequest('solution-of-problem-save', this.solutionForm.value, 'ডেটা সংরক্ষণ হচ্ছে...').then(
      data => {
        console.log('success');
        this.navCtrl.popToRoot();
      }, err => {
        console.log(err);
      }
    );
  }

}
