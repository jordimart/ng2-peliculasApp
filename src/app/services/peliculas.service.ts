import { Injectable } from '@angular/core';

import { Jsonp, Http } from '@angular/http';
import 'rxjs/Rx'; //Map

@Injectable()
export class PeliculasService {

  private apikey: string = "d1ba87d6a907e9f6a3f3935ff428bd56";
  private urlMoviedb: string = "https://api.themoviedb.org/3";

  constructor(private jsonp: Jsonp ) { }

  getPopulares() {

    let url = `${this.urlMoviedb}/discover/movie?sort_by=popularity.desc&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url)
      .map(res => res.json());
  }

  getMonthMovies(nowDate:string, monthDate:string ) {

    let url = `${this.urlMoviedb}/discover/movie?primary_release_date.gte=${ nowDate }&primary_release_date.lte=${ monthDate }&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url)
      .map(res => res.json());
  }

}
