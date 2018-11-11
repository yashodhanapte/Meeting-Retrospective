import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-encapsulating',
  templateUrl: './encapsulating.component.html',
  styleUrls: ['./encapsulating.component.css']
})
export class EncapsulatingComponent implements OnInit {

  constructor() { }


  sectionFormat = [
    {
      id:'w-w-w',
      name:'What went well'
    },
    {
      id:'w-c-b-i',
      name:'What can be improved'
    },
    {
      id:'s-d',
      name:'Start doing'
    },
    {
      id:'a-i',
      name:'Action Items'
    }
  ];
  ngOnInit() {

  }

}

