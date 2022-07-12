import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-of-games',
  templateUrl: './list-of-games.component.html',
  styleUrls: ['./list-of-games.component.css']
})
export class ListOfGamesComponent implements OnInit {

  constructor(private router :Router) { }

  ngOnInit(): void {
  }

  truthOrDare(){
    console.log("truthordare")
    this.router.navigate(["/truth-or-dare"]);
    console.log("truthordare2")

    
  }
  secretSanta(){
    console.log("Secret Santa");

  }
}
