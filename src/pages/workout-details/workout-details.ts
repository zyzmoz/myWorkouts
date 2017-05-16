import { Component } from '@angular/core';
import {  NavController, NavParams, AlertController } from 'ionic-angular';
import { WorkoutService } from '../../providers/workout.service';
import { WorkoutsPage } from '../workouts/workouts';

/**
 * Generated class for the WorkoutDetails page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-workout-details',
  templateUrl: 'workout-details.html',
})
export class WorkoutDetailsPage {
  public workout : any;
  public result : any;

  constructor(public navCtrl: NavController, private navParams : NavParams, private workoutService: WorkoutService, private alert: AlertController) {
    this.workout = navParams.get('workout');
  }

  showAlert(title,text){
    let msg = this.alert.create({
      title: title,
      subTitle: text,
      buttons: ['OK']
    });
    msg.present();
  }


  deleteWorkout(id){
    this.workoutService.deleteWorkout(id)
      .subscribe(res => {
      });

    this.navCtrl.push(WorkoutsPage);
  }

 

}
