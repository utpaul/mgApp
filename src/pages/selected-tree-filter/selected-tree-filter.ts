import {Component, OnInit} from '@angular/core';
import {IonicPage, NavParams} from 'ionic-angular';
import {API_CONFIG} from "../../constants/api";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";

@IonicPage()
@Component({
  selector: 'page-selected-tree-filter',
  templateUrl: 'selected-tree-filter.html',
})
export class SelectedTreeFilterPage implements OnInit{

  public selectedTreeFilterForm: FormGroup;
  private loadData:any;
  private imageUrl:any;

  private type:any;
  private selectOptions:any;

  constructor(public navParams: NavParams,
              private formBuilder: FormBuilder) {
    this.imageUrl =API_CONFIG.misBase;
  }

  ngOnInit(){

    this.selectOptions = {
      mode: 'md'
    };

    this.type = [
      {text:'একক',value:1}, {text:'গ্রুপ',value:2}
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
  }

}
