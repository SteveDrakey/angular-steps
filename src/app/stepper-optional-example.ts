import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

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

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['' ],
      lastCtrl: [''],
      houseNumberCtrl: [''],
      postCodeCtrl: ['']
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ''
    });
  }
}


/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */