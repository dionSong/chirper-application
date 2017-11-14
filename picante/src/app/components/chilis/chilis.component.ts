import { Component, OnInit } from '@angular/core';
import { ChilisService } from "../../services/chilis.service";


@Component({
  selector: 'app-chilis',
  templateUrl: './chilis.component.html',
  styleUrls: ['./chilis.component.sass']
})
export class ChilisComponent  {
  chilis: Array<any> = [];


  
  constructor(private svc: ChilisService) { 
    
  }

  ngOnInit() {
    this.svc.getChilis()
      .subscribe((response) => {
        this.chilis = response;
      })
  }

}




