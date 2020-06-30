import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatAutocomplete } from '@angular/material/autocomplete';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';

export interface Fruit {
  name: string;
}


/**
 * @title Stepper with optional steps
 */
@Component({
  selector: 'stepper-optional-example',
  templateUrl: 'stepper-optional-example.html',
  styleUrls: ['stepper-optional-example.css']
})


export class StepperOptionalExample implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isOptional = false;

  howMuch = [
    'Single item',
    'Single black bag',
    'Car boot load or less',
    'Significant / Multiple Loads',
    'Small van load',
    'Large van load'];

  sliderValue: number;


  constructor(private _formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['' ],
      lastCtrl: [''],
      houseNumberCtrl: [''],
      postCodeCtrl: [''],
      tel: [''],
      mobile: ['']
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: '',
      footPathCtrl: [''],
      land: ''
    });
  }


}


/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
