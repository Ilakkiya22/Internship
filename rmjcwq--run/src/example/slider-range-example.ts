import {Component} from '@angular/core';
import {MatSliderModule} from '@angular/material/slider';

/**
 * @title Range slider
 */
@Component({
  selector: 'slider-range-example',
  templateUrl: 'slider-range-example.html',
  styleUrls: ['slider-range-example.css'],
  standalone: true,
  imports: [MatSliderModule],
})
export class SliderRangeExample {}


/**  Copyright 2023 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */