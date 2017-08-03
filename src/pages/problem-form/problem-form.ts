import {Component, OnInit} from '@angular/core';
import {IonicPage, Platform, ActionSheetController, AlertController, NavController} from 'ionic-angular';
import {FormGroup, FormBuilder, Validators, FormArray} from "@angular/forms";
import { Geolocation } from '@ionic-native/geolocation';
import {LocationAccuracy} from "@ionic-native/location-accuracy";
import { Camera } from '@ionic-native/camera';
import {L2nHttp} from "../../providers/l2n-http";
import {ImagePicker} from "@ionic-native/image-picker";

@IonicPage()
@Component({
  selector: 'page-problem-form',
  templateUrl: 'problem-form.html'
})
export class ProblemFormPage implements OnInit{

  public registrationForm: FormGroup;
  public selectOptions:any;
  public SELECT_SUBJECT_LABEL:any;
  public SELECT_STAGE_LABEL:any;
  private base64Image='assets/img/cameraIcon .png';
  private photoLists =[];

  constructor(private formBuilder: FormBuilder,
              private locationAccuracy: LocationAccuracy,
              public platform: Platform,
              private geolocation: Geolocation,
              private addPhotoActionSheet: ActionSheetController,
              private camera: Camera,
              private alertCtrl : AlertController,
              private l2nHttp:L2nHttp,
              public navCtrl: NavController,
              public imagePicker:ImagePicker) {

  }


  ngOnInit(){

    this.photoLists.push(this.base64Image);

    this.selectOptions = {
      mode: 'md'
    };

    this.SELECT_SUBJECT_LABEL=[
      {text:'সবজি', value:'1'},
      {text:'ফুল', value:'2'},
      {text:'ফল', value:'3'},
      {text:'সৌন্দর্য বর্ধক গাছ', value:'4'},
      {text:'অন্যান্য', value:'5'}
    ];

    this.SELECT_STAGE_LABEL=[
      {text:'বীজ', value:'1'},
      {text:'ছোট চারা', value:'2'},
      {text:'মাঝারি চারা', value:'3'},
      {text:'মাঝ বয়সী গাছ', value:'4'},
      {text:'পূর্ণবয়স্ক গাছ', value:'5'},
      {text:'ফুলের কলি', value:'6'},
      {text:'প্রস্ফুটিত ফুল', value:'7'},
      {text:'অপরিপক্ব ফল', value:'8'},
      {text:'পরিপক্ব ফল', value:'9'},
      {text:'পাকা ফল', value:'10'},
      {text:'শীকড়', value:'11'},
      {text:'গাছের গোড়া বা কান্ড', value:'12'},
      {text:'পাতা', value:'13'},
      {text:'ডালপালা', value:'14'},
      {text:'অন্যান্য', value:'15'}
    ];

    let options= {
      timeout: 10000,
      enableHighAccuracy: true
    };

    this.registrationForm = this.formBuilder.group({
      category: ['', [Validators.required]],
      stage: ['',[Validators.required]],
      images: this.formBuilder.array([]),
      audio:[''],
      description: [''],
      latitude:[''],
      longitude:['']
    });

    if(this.platform.is('android')){
      this.locationAccuracy.canRequest().then((canRequest: boolean) => {

        if(canRequest) {

          this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY)

            .then(() =>{
                this.geolocation.getCurrentPosition(options).then((resp) => {
                  this.registrationForm.controls['latitude'].setValue(resp.coords.latitude);
                  this.registrationForm.controls['longitude'].setValue(resp.coords.longitude);
                }).catch((error) => {
                  console.log('Error getting location', error);
                })

              },
              error => console.log('Error requesting location permissions', error)
            );
        }

      });
    }

  }

  removePhotos(i: number) {
    const control = <FormArray>this.registrationForm.controls['photos'];
    control.removeAt(i);

    let confirm = this
      .alertCtrl
      .create({
        title: 'নিশ্চিত আপনি এই ছবিটি মুছে দিতে চান? কোন পূর্বাবস্থা নেই!',
        message: '',
        buttons: [
          {
            text: 'না',
            handler: () => {
              console.log('Disagree clicked');
            }
          }, {
            text: 'হাঁ',
            handler: () => {
              console.log('Agree clicked');
              this.photoLists
                .splice(i, 1);
              //return true;
            }
          }
        ]
      });
    confirm.present();

  }

  submitValue(){

    let formData = this.registrationForm.value;
    formData.images = this.photoLists;

    this.l2nHttp.postRequest('new-problem-save',formData, 'ডেটা সংরক্ষণ হচ্ছে...').then(
      data => {
        console.log('success');
        this.navCtrl.popToRoot();
      }, err => {
        console.log(err);
      }
    );
  }


  addMedia(id){

    if(id == (this.photoLists.length - 1)){
      const actionSheet = this.addPhotoActionSheet.create({
        title: 'চিত্র যুক্ত করুন',
        cssClass:'custom-font',
        buttons: [
          {
            text: 'ছবি তোল',
            icon:'ios-camera-outline',
            handler: () => {
              this.openCamera();
            }
          },

          {
            text: 'গ্যালারি থেকে ছবি',
            icon:'ios-albums-outline',
            handler: () => {
              this.selectFromGallery();
            }
          }
        ]
      });

      actionSheet.present();
    }

  }

  selectFromGallery() {

    var options = {
      maximumImagesCount: 10,
      width: 164,
      height: 164,
      quality: 100,
      outputType: 0
    };

    this.imagePicker.getPictures(options).then((results) => {

      this.photoLists.reverse();

      for (var i = 0; i < results.length; i++) {
        this.photoLists.push(results[i]);
      }

      this.photoLists.reverse();
    }, (err) => { });


  }

  openCamera() {

    var options = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.CAMERA,
      allowEdit: true,
      targetWidth: 164,
      targetHeight:164,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      saveToPhotoAlbum: false
    };
    this.camera.getPicture(options).then((imageData) => {
      this.photoLists.reverse();
      this.photoLists.push('data:image/jpeg;base64,' + imageData);
      this.photoLists.reverse();
    }, (err) => {
      // Handle error
    });
  }

}
