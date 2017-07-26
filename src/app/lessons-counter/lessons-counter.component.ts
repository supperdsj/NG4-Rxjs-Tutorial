import {Component, OnInit} from '@angular/core';
import {Lesson} from '../shared/model/lesson';
import {Observer, store} from '../event-bus-experiments/app-data';

@Component({
  selector: 'lessons-counter',
  templateUrl: './lessons-counter.component.html',
  styleUrls: ['./lessons-counter.component.css']
})
export class LessonsCounterComponent implements OnInit, Observer {


  lessonsCounter = 0;

  constructor() {
  }

  ngOnInit() {
    console.log(`lesson-counter registered as observer`);
    store.subscribe(this);
    // globalEventBus.subscribe(LESSONS_LIST_AVAILABLE, this);
    // globalEventBus.subscribe(ADD_NEW_LESSON, {
    //   next: lessonText =>
    //     this.lessonsCounter = this.lessonsCounter + 1
    // });
  }

  next(data: Lesson[]) {
    console.log(`lesson-counter get data`);
    this.lessonsCounter = data.length;
  }
}