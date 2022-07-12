import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  dropdown:any;
  selectedDropdown:any;
  constructor() { }

  ngOnInit(): void {
   // this.dropdown=["How to Use?","Report to Developers","Release Notes"];

    console.log(this.dropdown)
  }
  howToUse(){
    console.log("How To Use");
  }
  reportToDev(){
    console.log("reportToDev");
  }
  openReleaseNotes(){
    console.log("openReleaseNotes");
  }

}
