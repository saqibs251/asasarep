import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {
//Cities - add new city input
 city;
//Cities - added Cities inputs
 addedCities;
 //Location - Add new Location Inputs
 selectedCity;
 newLocation;
 selectAddedLocation;
 subLocation;
 //Location - Added Locations Inputs
 selectAddedCity;
 selectLocation;
 selectSubLocation;
 

  constructor(private fb: FormBuilder) {
   }

  ngOnInit(): void {
  }

}
