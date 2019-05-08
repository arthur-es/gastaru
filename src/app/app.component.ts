import { Component, OnInit } from '@angular/core';
import { TourService } from 'ngx-tour-md-menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private tourService: TourService){}

  ngOnInit(): void {
    setTimeout(()=> {
      console.log("Iniciou");
      this.tourService.initialize([{
        anchorId: 'home.anchor',
        content: 'Essa é a tela inicial do Gastaru app',
        title: 'Tela inicial'
      }, 
      {
        anchorId: 'home.anchor2',
        content: 'Esse é um item exeplo da lista',
        title: 'Item da lista'
      }]);

      this.tourService.start();
    }, 3000);
  }

  title = 'gastaru';
}
