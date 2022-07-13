import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-truth-or-dare',
  templateUrl: './truth-or-dare.component.html',
  styleUrls: ['./truth-or-dare.component.css']
})
export class TruthOrDareComponent implements OnInit {
  
    gameForm!: FormGroup;
   personName:any;
   nameList1:any=[];
   nameList:any=["name"];

  //  array = [{id: 1}]
  //  arraycount=1;
 

  constructor(
   private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
     this.getform();
  }

  public getform(){
    this.gameForm=this.formBuilder.group({
      name:[""]
    })
  }

  nameInput(event:any){
    this.personName=event.target.value
  }

  onAdd(){
    console.log(this.personName)
    let personobj={
      name:this.personName,
    }
    this.nameList1.push(personobj)
    this.nameList.push(this.personName)
  }

  onSubmit(){
    console.log(this.nameList1)
    let randomName1 = this.nameList1[Math.floor(Math.random() * this.nameList1.length)];
    console.log(randomName1.name)
  }

  // printValue(value: any){
  //   console.log(value);
  //   let containputiner = document.querySelector("#"+value);
  //   console.log(containputiner);
  //   this.arraycount+=1
  // }
}