import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatAutocomplete } from '@angular/material/autocomplete';
import { Observable, of } from 'rxjs';
import {map, startWith, tap} from 'rxjs/operators';
import { ImageUploaderOptions, FileQueueObject } from 'ngx-image-uploader-next';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

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

  filteredOptions: Observable<string[]>;

  imageOptions: ImageUploaderOptions = {
    uploadUrl: 'https://fancy-image-uploader-demo.azurewebsites.net/api/demo/upload',
    cropEnabled: false,
    thumbnailResizeMode: 'fill',
    autoUpload: false,
    resizeOnLoad: true,
    thumbnailWidth: 400,
    thumbnailHeight: 300
  };

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.streets.filter(streets => streets.toLowerCase().indexOf(filterValue) === 0);
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstName: ['' ],
      lastName: [''],
      email: [''],
      tel: [''],
      mobile: [''],
      houseNumber: [''],
      street: [''],
      town: [''],
      postCode: [''],
      land: [''],
      location: [''],
      evidence: [''],
      usefullInfo: [''],
      tipstreet: [''],
      obstructing: ['']
    });



    this.secondFormGroup  = this._formBuilder.group({
      firstName: ['' ],
      lastName: [''],
      email: [''],
      tel: [''],
      mobile: [''],
      houseNumber: [''],
      street: [''],
      town: [''],
      postCode: [''],
      land: [''],
      location: [''],
      evidence: [''],
      usefullInfo: [''],
      tipstreet: [''],
      obstructing: ['']
    });

    // @ts-ignore(2751)
    this.filteredOptions = this.secondFormGroup.get('tipstreet').valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    ) ;

  }

  // tslint:disable-next-line: member-ordering
  streets = [
    'ABBEY ROAD',
    'ABBEYFIELD CLOSE',
    'ABBOTSBURY ROAD',
    'ABBOTT AVENUE',
    'ABBOTTS ROAD',
    'ABERCONWAY ROAD',
    'ABINGDON CLOSE',
    'ABOYNE DRIVE',
    'ABOYNE DRIVE TO BEVERLEY WAY',
    'ACACIA ROAD',
    'ACACIA ROAD TO GROVE ROAD',
    'ACCESS ROAD FOR BISHOPSFORD LODGE',
    'ACCESS ROAD FROM KENLEY ROAD TO LONDON ROAD',
    'ACCESS ROAD REAR OF 68 TO 102 LONGTHORNTON ROAD',
    'ACCESS ROAD TO CAR PARK',
    'ACCESS ROAD TO DEEN CITY FARM',
    'ACCESS ROAD TO MITCHAM INDUSTRIAL ESTATE',
    'ACRE ROAD',
    'ACRE ROAD TO BOROUGH BOUNDARY',
    'ACUBA ROAD',
    'ADELA AVENUE',
    'ADVENTURE PLAYGROUND ACCESS ROAD',
    'ALAN ROAD',
    'ALBANY ROAD',
    'ALBERT GROVE',
    'ALBERT ROAD',
    'ALEXANDRA MEWS',
    'ALEXANDRA ROAD',
    'ALEXANDRA ROAD',
    'ALFRETON CLOSE',
    'ALL SAINTS ROAD',
    'ALLEN CLOSE',
    'ALLEYWAY REAR OF 2-22 EVELINE ROAD',
    'ALLGOOD CLOSE',
    'ALLINGTON CLOSE',
    'ALMER ROAD',
    'ALMOND WAY',
    'ALNWICK GROVE',
    'ALPHEA CLOSE',
    'ALT GROVE',
    'ALT GROVE TO DUNDONALD ROAD',
    'ALVERSTONE AVENUE',
    'ALWYNE ROAD',
    'AMBERLEY WAY',
    'AMENITY WAY',
    'AMITY GROVE',
    'AMITY GROVE TO DURHAM ROAD',
    'AMITY GROVE TO DURHAM ROAD PROW39',
    'ANCHORAGE CLOSE',
    'ANSON MEWS',
    'APPLETON SQUARE',
    'APPROACH ROAD',
    'ARAGON PLACE',
    'ARAGON ROAD',
    'ARBUTHNOT ROAD',
    'ARCHWAY CLOSE',
    'ARMFIELD CRESCENT',
    'ARNEY\'S LANE',
    'ARNOLD ROAD',
    'ARNOLD ROAD TO SWAINS ROAD',
    'ARRAS AVENUE',
    'ARTERBERRY ROAD',
    'ARTHUR ROAD',
    'ARTHUR ROAD',
    'ARUNDEL AVENUE',
    'ASCOT ROAD',
    'ASHBOURNE ROAD',
    'ASHBOURNE TERRACE',
    'ASHBURY PLACE',
    'ASHCOMBE ROAD',
    'ASHEN GROVE',
    'ASHLEY AVENUE',
    'ASHLEY ROAD',
    'ASHRIDGE WAY',
    'ASHTREE AVENUE',
    'ASPEN GARDENS',
    'ASTON ROAD',
    'ATHERTON DRIVE',
    'ATKINSON CLOSE',
    'AUTUMN CLOSE',
    'AVALON CLOSE',
    'AVEBURY ROAD',
    'AVENTINE AVENUE',
    'AVENUE ROAD',
    'AVENUE ROAD',
    'AVONDALE ROAD',
    'AYLWARD ROAD',
    'BAKER LANE',
    'BAKERS END',
    'BALFOUR ROAD',
    'BALTIC CLOSE',
    'BANK AVENUE',
    'BARDNEY ROAD',
    'BARHAM ROAD',
    'BARHAM ROAD TO BOROUGH BOUNDARY',
    'BARNARD GARDENS',
    'BARNARD ROAD',
    'BARNES END',
    'BARNFIELD AVENUE',
    'BARNSCROFT',
    'BARON GROVE',
    'BARTON MEWS',
    'BATHGATE ROAD',
    'BATHURST AVENUE',
    'BATSWORTH ROAD',
    'BATTLE CLOSE',
    'BAYHAM ROAD',
    'BAYHAM ROAD TO BEELEIGH ROAD',
    'BEAFORD GROVE',
    'BEAULIEU CLOSE',
    'BEAVER CLOSE',
    'BECKET CLOSE HIGH PATH',
    'BECKWAY ROAD',
    'BEDDINGTON LANE',
    'BEDFONT CLOSE',
    'BEECH CLOSE',
    'BEECH GROVE',
    'BEECHOLME AVENUE',
    'BEELEIGH ROAD',
    'BELGRAVE ROAD',
    'BELGRAVE WALK',
    'BRAESIDE AVENUE',
    'BRAILSFORD CLOSE',
    'BRAMCOTE AVENUE',
    'BRANGWYN CRESCENT',
    'BRANKSOME ROAD',
    'BREAKSPEAR GARDENS',
    'BRECON CLOSE',
    'BRENLEY CLOSE',
    'BRICKFIELD ROAD',
    'BRICKFIELD ROAD',
    'BRIDGES ROAD',
    'BRIDGES ROAD MEWS',
    'BRIGGS CLOSE',
    'BRISBANE AVENUE',
    'BRISBANE AVENUE TO THE PATH',
    'BRISCOE ROAD',
    'BRISTOL ROAD',
    'BROADWAY COURT',
    'BROADWAY GARDENS',
    'BROADWAY PLACE',
    'BROCKENHURST WAY',
    'BROCKHAM CLOSE',
    'BRONSON ROAD',
    'BROOK CLOSE',
    'BROOKFIELDS AVENUE',
    'BROOKLANDS AVENUE',
    'BRUCE ROAD',
    'BRUTON ROAD',
    'BUCKFAST ROAD',
    'BUCKINGHAM ROAD',
    'BUCKLAND WALK',
    'BUCKLEIGH AVENUE',
    'BUNTING CLOSE',
    'BURDETT AVENUE',
    'BURGESS MEWS',
    'BURGHLEY PLACE',
    'BURGHLEY ROAD',
    'BURLEY CLOSE',
    'BURLINGTON ROAD',
    'BURLINGTON ROAD TO BARNARD GARDENS',
    'BURNHAM ROAD',
    'BURNS CLOSE',
    'BURSTOW ROAD',
    'BURY GROVE',
    'BUSHEY COURT',
    'BUSHEY ROAD',
    'BUSHEY ROAD',
    'BUSHEY ROAD TO CARLTON PARK AVENUE',
    'BUSHEY ROAD TO EDNA ROAD',
    'BUSHEY ROAD TO GORE ROAD PROW120',
    'BUSHEY ROAD TO NORTH FAIRWAY',
    'BUSHEY ROAD TO PRINCE GEORGES AVENUE',
    'BUSHEY ROAD TO VERNON AVENUE',
    'BUTTERMERE CLOSE',
    'BYARDS CROFT',
    'BYEGROVE ROAD',
    'BYRON AVENUE',
    'CAERNARVON CLOSE',
    'CAESARS CAMP TO PROW1',
    'CAESARS WALK',
    'CAIRNS AVENUE',
    'CAIRNS PLACE',
    'CAITHNESS ROAD',
    'WHITEBRIDGE AVENUE',
    'WHITFORD GARDENS',
    'WIDE WAY',
    'WILBERFORCE WAY',
    'WILFRED OWEN CLOSE',
    'WILKINS CLOSE',
    'WILLIAM ROAD',
    'WILLIAMS LANE',
    'WILLMORE END',
    'WILLOW LANE',
    'WILLOW LANE TO GOAT ROAD',
    'WILLOW LANE TO THE CLOSE',
    'WILLOW VIEW',
    'WILLOWS AVENUE',
    'WILSON AVENUE',
    'WILTON CRESCENT',
    'WILTON GROVE',
    'WILTON ROAD',
    'WIMBLEDON BRIDGE',
    'WIMBLEDON HILL ROAD',
    'WINDERMERE AVENUE',
    'WINDERMERE ROAD',
    'WINDMILL AVENUE TO CEDARS AVENUE',
    'WINDMILL ROAD',
    'WINDMILL ROAD',
    'WINDMILL ROAD TO BOROUGH BOUNDARY',
    'WINDMILL ROAD TO THE BOROUGH BOUNDARY',
    'WINDSOR AVENUE',
    'WINDY RIDGE CLOSE',
    'WINIFRED ROAD',
    'WOBURN CLOSE',
    'WOLSELEY AVENUE',
    'WOLSEY CLOSE',
    'WOLSEY CRESCENT',
    'WOODHAYES ROAD',
    'WOODLAND WAY',
    'WOODLAND WAY',
    'WOODLANDS',
    'WOODLEY CLOSE',
    'WOODSIDE',
    'WOODSIDE WAY',
    'WOODSTOCK WAY',
    'WOODVILLE ROAD',
    'WOOL ROAD',
    'WORCESTER CLOSE',
    'WORCESTER ROAD',
    'WORPLE AVENUE',
    'WORPLE ROAD',
    'WORPLE ROAD',
    'WORPLE ROAD MEWS',
    'WORPLE ROAD TO ST GEORGES ROAD',
    'WORTHINGTON CLOSE',
    'WRIGHTS ALLEY RIDGWAY TO WOODHAYES ROAD PRW21',
    'WYCLIFFE ROAD',
    'WYDELL CLOSE',
    'WYKE ROAD',
    'YARBOROUGH ROAD',
    'YENSTON CLOSE',
    'YORK CLOSE',
    'YORK LANE',
    'YORK ROAD',
    'YORKSHIRE ROAD',

  ];

}


/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
