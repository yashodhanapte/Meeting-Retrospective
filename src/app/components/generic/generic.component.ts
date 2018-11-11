import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import classes from '../encapsulating/id-maps.js';
@Component({
  selector: 'app-generic',
  templateUrl: './generic.component.html',
  styleUrls: ['./generic.component.css']
})
export class GenericComponent implements OnInit {

  @Input('in') section;
  cards: CardsProto[] = [];
  classNames = classes;
  constructor() { }

  ngOnInit() {
    console.log(this.section,`seciton from input`);
  }
  addCard(){
    this.cards.push(new CardsProto());
  }

}

export class CardsProto{
  text: string;
  }

