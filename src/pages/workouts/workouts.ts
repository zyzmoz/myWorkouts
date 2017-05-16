import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WorkoutService } from '../../providers/workout.service';
import { WorkoutDetailsPage } from '../workout-details/workout-details';

/**
 * Generated class for the Workouts page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-workouts',
  templateUrl: 'workouts.html',
})
export class WorkoutsPage implements OnInit{
  workouts: any;

  constructor(public navCtrl: NavController, private workoutService : WorkoutService) {
  } 

  ngOnInit(){
    this.workoutService.getWorkouts()
      .subscribe(res => {
        this.workouts = res;
      });
  }

  workoutSelected(event, workout){
    this.navCtrl.push(WorkoutDetailsPage, {
      workout: workout
    });
  }

  ionViewWillEnter(){
    this.ngOnInit();
  }
}
