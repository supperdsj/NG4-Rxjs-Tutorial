import {Component, OnInit} from '@angular/core';
import {ADD_NEW_LESSON, globalEventBus, LESSONS_LIST_AVAILABLE, Observer} from '../event-bus-experiments/event-bus';
import {Lesson} from '../shared/model/lesson';

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
    globalEventBus.registerObserver(LESSONS_LIST_AVAILABLE, this);
    globalEventBus.registerObserver(ADD_NEW_LESSON, {
      notify: lessonText =>
        this.lessonsCounter = this.lessonsCounter + 1
    });
  }

  notify(data: Lesson[]) {
    console.log(`lesson-counter get data`);
    this.lessonsCounter = data.length;
  }
}
