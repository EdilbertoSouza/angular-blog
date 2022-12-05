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

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.setValuesToComponent()
  }

  setValuesToComponent(){
    const result = dataFake[0]
    this.mainList.push([result.id, result.photoCover, result.title, result.description])
    
    for (let i = 1; i < dataFake.length; i++) {
      const result = dataFake[i];
      this.dataList.push([result.id, result.photoCover, result.title, result.description])
    }    
  }
}
