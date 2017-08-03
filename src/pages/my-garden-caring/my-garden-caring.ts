import {Component, OnInit} from '@angular/core';
import { IonicPage } from 'ionic-angular';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {L2nHttp} from "../../providers/l2n-http";

@IonicPage()
@Component({
  selector: 'page-my-garden-caring',
  templateUrl: 'my-garden-caring.html',
})
export class MyGardenCaringPage implements OnInit{

  public registrationForm: FormGroup;
  private loadedData =[];
  treeList:any;
  constructor(private l2nHttp:L2nHttp,
              private formBuilder: FormBuilder) {

  }

  ngOnInit(){

    this.registrationForm = this.formBuilder.group({
      category: ['', [Validators.required]],
      treeNo: ['',[Validators.required]],
      images: this.formBuilder.array([]),
      entryDate:[''],
      description: ['']
    });

    this.l2nHttp.getRequest('selected-tree-list','ডাটা লোড করা হচ্ছে...').then(
      data => {
        this.loadedData =data;

        for(let i=0;i<this.loadedData.length;i++){
           this.treeList.push(this.loadedData[i].banglaName);
        }

      },
      err => {}
    );

  }





}
