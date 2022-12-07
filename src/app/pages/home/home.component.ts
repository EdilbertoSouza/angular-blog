import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  mainList:string[][] = []
  dataList:string[][] = []
  limit:number = 2
  offset:number = 1
  min:number = 1
  max:number = 2

  constructor(private route:ActivatedRoute) { 
  }

  ngOnInit(): void {
    this.setValuesToComponent(1)
  }

  setValuesToComponent(offset:number){
    const result = dataFake[0]
    this.mainList.push([result.id, result.photoCover, result.title, result.description])
    this.max = (this.limit * this.offset)
    this.min = (this.max - this.limit) + 1

    for (let i = this.min; i <= this.max; i++) {
      const result = dataFake[i];
      this.dataList.push([result.id, result.photoCover, result.title, result.description])
    }
  }

  public buttonOnClick() {
    this.setValuesToComponent(this.offset++)
  }  

}
