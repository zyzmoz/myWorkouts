import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WorkoutService } from '../../providers/workout.service';
import { WorkoutsPage } from '../workouts/workouts';

/**
 * Generated class for the AddWorkout page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-add-workout',
  templateUrl: 'add-workout.html',
})
export class AddWorkoutPage {
  public title: string;
  public note: string;
  public type: string;
  public result : any;

  constructor(public navCtrl: NavController, private workoutService : WorkoutService) {
    

  }

  onSubmit(){
    var workout = {
      title: this.title,
      note : this.note,
      type: this.type
    }

    //add workout
    this.workoutService.addWorkout(workout)
      .subscribe(res => {
        this.result = res;
      });

    this.navCtrl.push(WorkoutsPage);
  }

  

}
