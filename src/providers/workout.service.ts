import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Workout provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class WorkoutService {
  http: any;
  apiKey : string;
  workoutUrl : string;
  constructor(public _http: Http) {
    this.http = _http;
    this.apiKey = 'X57rJD3tKStpPKahbVqMzR2mhaLCYkD0';
    this.workoutUrl = 'https://api.mlab.com/api/1/databases/zyzmo/collections/workouts';
    
  }

  getWorkouts(){
    return this.http.get(this.workoutUrl + '?apiKey=' + this.apiKey)
      .map(res => res.json());
  }

  addWorkout(workout){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.workoutUrl + '?apiKey=' + this.apiKey, JSON.stringify(workout), {headers : headers} )
      .map(res => res.json());

  }

  deleteWorkout(id){
    return this.http.delete(this.workoutUrl + '/' + id + '?apiKey=' + this.apiKey)
      .map(res => res.json())
  }

}
