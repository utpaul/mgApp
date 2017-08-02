import {Component, forwardRef, Input, OnDestroy} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {ModalController} from "ionic-angular";
import {AudioRecordingModal} from "./audio-recording";
import {File} from '@ionic-native/file';
import {MediaObject, MediaPlugin} from "@ionic-native/media";

@Component({
    selector: 'audio-input',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => AudioInputComponent),
            multi: true
        }
    ],
    templateUrl: 'audio-input.html'
})
export class AudioInputComponent implements ControlValueAccessor, OnDestroy {

    @Input("value") private _audioData = "";
    @Input() title;
    @Input() duration = 0;

    public window: any = window;

    private file: MediaObject;
    private isPlaying: boolean = false;

    constructor(public modalCtrl: ModalController, private fs: File, private media: MediaPlugin) {

    }

    propagateChange = (_: any) => {

    };

    writeValue(value: any) {
        if (value !== undefined) {
            this._audioData = value;
        } else {
            this._audioData = ""
        }
    }

    set audioData(value: string) {
        this._audioData = value;
        this.propagateChange(this._audioData);
    }

    record() {
        console.log(this.window.plugins.audioRecorderAPI);
        let modal = this.modalCtrl.create(AudioRecordingModal, {second: this.duration});
        modal.present();
        modal.onDidDismiss(action => {
            if (action == 'stop') {
                this.window.plugins.audioRecorderAPI.stop(
                    path => this.handleAudioFile(path),
                    err => this.onError(err)
                );
            }
        });

        this.window.plugins.audioRecorderAPI.record(
            path => this.handleAudioFile(path),
            err => this.onError(err),
            this.duration
        );
    }

    private handleAudioFile(path) {
        this.file = this.media.create('file://' + path, (status) => this.statusUpdate(status));
        this.fs.readAsDataURL('file:///', path.replace(/^\/+/g, '')).then(
            data => this.audioData = data,
            err => this.onError(err)
        );
    }

    onError(err) {
        if (this.file) {
           try {
               this.file.release();
           }catch (e){
               console.log(e);
           }
            this.file = null;
        }
        this.audioData = '';
        console.error("RONI: " + JSON.stringify(err));
    }

    play() {
        if (this.file) {
            this.file.play();
            this.isPlaying = true;
        }
    }

    pause() {
        if (this.file) {
            this.file.pause();
            this.isPlaying = false;
        }
    }

    stop() {
        if (this.file) {
            this.file.stop();
            this.isPlaying = false;
        }
    }

    registerOnChange(fn) {
        this.propagateChange = fn;
    }

    registerOnTouched(fn: any): void {

    }

    ngOnDestroy() {
        if (this.file) {
            this.file.release();
        }
    }

    private statusUpdate(status: any) {
        console.log('status:' + status);
        this.isPlaying = status == 2 || status == 1
    }
}
