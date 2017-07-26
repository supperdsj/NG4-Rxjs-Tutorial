import {Component, OnInit} from '@angular/core';
import {Lesson} from '../shared/model/lesson';
import * as _ from 'lodash';
import {Observer, store} from '../event-bus-experiments/app-data';

@Component({
  selector: 'lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.css']
})
export class LessonsListComponent implements OnInit, Observer {

  lessons: Lesson[] = [];


  constructor() {
  }

  ngOnInit() {
    console.log(`lessons-list register as observer`);
    store.subscribe(this);
  }

  next(data: Lesson[]) {
    console.log(`lessons-list get data`);
    this.lessons = data;
  }

  toggleLessonViewed(lesson: Lesson) {
    store.toggleLessonViewed(lesson);
  }

  deleteLesson(lesson: Lesson) {
    store.deleteLesson(lesson);
  }

}
