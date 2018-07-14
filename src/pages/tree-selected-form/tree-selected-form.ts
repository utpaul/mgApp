import {Component, OnInit} from '@angular/core';
import {IonicPage, NavParams, ViewController, NavController} from 'ionic-angular';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {API_CONFIG} from "../../constants/api";
import {L2nHttp} from "../../providers/l2n-http";

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
               public viewCtrl: ViewController,
               private l2nHttp:L2nHttp,
               public navCtrl: NavController) {
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
    console.log(this.loadData);

    this.selectedTreeFilterForm = this.formBuilder.group({
      banglaName: [this.loadData.banglaName],
      englishName: [this.loadData.englishName],
      photo: [this.loadData.photo],
      scientificName: [this.loadData.scientificName],
      season: [this.loadData.season],
      seedingTime: [this.loadData.seedingTime],
      type: [this.loadData.type],
      flag: ['1'],
      dateOfSeeding: ['', [Validators.required]],
      typeOfSeeding: ['',[Validators.required]],
      numberOfGroupElement: [''],
      chemicalFartilizer:[''],
      organicFartilizer: ['']
    });

  }

  submitValue(){

    console.log(this.selectedTreeFilterForm.value);

    this.l2nHttp.postRequest('selected-fruit-list-post',
      this.selectedTreeFilterForm.value, 'তথ্য সংগৃহীত হচ্ছে...').then(
      data => {
        console.log('success');
        this.navCtrl.popToRoot();
      }, err => {
        console.log(err);
      }
    );

  }


}
