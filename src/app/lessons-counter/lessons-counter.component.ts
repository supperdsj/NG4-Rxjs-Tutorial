import {Component, OnInit} from '@angular/core';
import {Lesson} from '../shared/model/lesson';
import {store} from '../event-bus-experiments/app-data';
import {Observer} from 'rxjs/Observer';

@Component({
  selector: 'lessons-counter',
  templateUrl: './lessons-counter.component.html',
  styleUrls: ['./lessons-counter.component.css']
})
export class LessonsCounterComponent implements OnInit, Observer<Lesson[]> {


  lessonsCounter = 0;

  constructor() {
  }

  ngOnInit() {
    console.log(`lesson-counter registered as observer`);
    store.lessonsList$.subscribe(this);
    // globalEventBus.subscribe(LESSONS_LIST_AVAILABLE, this);
    // globalEventBus.subscribe(ADD_NEW_LESSON, {
    //   next: lessonText =>
    //     this.lessonsCounter = this.lessonsCounter + 1
    // });
  }

  next(data: Lesson[]) {
    console.log(`lesson-counter get data`);
    this.lessonsCounter = data.length;
    console.log(data);
    console.log(this);
  }

  error(err: any) {
  }

  complete() {
  }

}
