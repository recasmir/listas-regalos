import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-regalo',
  templateUrl: './regalo.component.html',
  styleUrls: ['./regalo.component.css']
})
export class RegaloComponent implements OnInit {

  @Input() presents: any [] = []; 

  @Output() onViewDetails = new EventEmitter<Event>();

  constructor() { }

  ngOnInit(): void {
  }



  // clickedViewDetails(presentID:number){
  //   this.onViewDetails.emit({presentId: this.presents.id})
  // }


}
