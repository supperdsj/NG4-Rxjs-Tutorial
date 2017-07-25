import {Component, OnInit} from '@angular/core';
import {ADD_NEW_LESSON, globalEventBus, LESSONS_LIST_AVAILABLE, Observer} from '../event-bus-experiments/event-bus';
import {Lesson} from '../shared/model/lesson';
import * as _ from 'lodash';

@Component({
  selector: 'lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.css']
})
export class LessonsListComponent implements OnInit, Observer {

  lessons: Lesson[] = [];

  notify(data: Lesson[]) {
    console.log(`lessons-list get data`);
    this.lessons = data;
  }

  constructor() {
  }

  ngOnInit() {
    console.log(`lessons-list register as observer`);
    globalEventBus.registerObserver(LESSONS_LIST_AVAILABLE, this);
    globalEventBus.registerObserver(ADD_NEW_LESSON, {
      notify: lessonText => {
        this.lessons.push({
          id: Math.random(),
          description: lessonText,
          duration: '--:--'
        });
      }
    });
  }

  toggleLessonViewed(lesson: Lesson) {
    lesson.completed = !lesson.completed;
  }

  delete(lesson: Lesson) {
    _.remove(this.lessons, lesson);
  }

}
