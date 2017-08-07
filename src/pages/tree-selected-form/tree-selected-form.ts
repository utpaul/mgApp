import {Component, OnInit} from '@angular/core';
import {IonicPage, NavParams, ViewController} from 'ionic-angular';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {API_CONFIG} from "../../constants/api";

@IonicPage()
@Component({
  selector: 'page-tree-selected-form',
  templateUrl: 'tree-selected-form.html',
})
export class TreeSelectedFormPage implements OnInit {

  public selectedTreeFilterForm: FormGroup;
  private loadData:any;
  private imageUrl:any;

  private type:any;
  private selectOptions:any;

  constructor( public navParams: NavParams,
               private formBuilder: FormBuilder,
               public viewCtrl: ViewController) {
    this.imageUrl =API_CONFIG.misBase;
  }

  ngOnInit(){
    this.loadData = this.navParams.data;

    this.selectOptions = {
      mode: 'md'
    };

    this.type = [
      {text:'একক',value:'1'}, {text:'গ্রুপ',value:'2'}
    ];

    this.loadData = this.navParams.data;

    this.selectedTreeFilterForm = this.formBuilder.group({
      dateOfSeeding: ['', [Validators.required]],
      typeOfSeeding: ['',[Validators.required]],
      numberOfGroupElement: [''],
      chemicalFartilizer:[''],
      organicFartilizer: ['']
    });
    
  }

  submitValue(){
    console.log(this.selectedTreeFilterForm.value);
    this.viewCtrl.dismiss(this.selectedTreeFilterForm.value);
  }


}
