import { Component } from '@angular/core';
import { PeliculasService } from './services/peliculas.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nowDate:string;
  monthDate:number;
  monthStringDate:string;

  constructor(public _ps: PeliculasService,
              private datePipe: DatePipe) {

    this.nowDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    this.monthDate = new Date().setDate(new Date().getDate() + 30)
    this.monthStringDate = this.datePipe.transform(new Date(this.monthDate), 'yyyy-MM-dd');

    this._ps.getPopulares()
      .subscribe(data => console.log(data));

    this._ps.getMonthMovies(this.nowDate,this.monthStringDate)
      .subscribe(data => console.log(data));
  }

}
