import {Component, OnInit} from '@angular/core';
import {Lesson} from '../shared/model/lesson';
import {store} from '../event-bus-experiments/app-data';
import {Observer} from 'rxjs/Observer';

@Component({
  selector: 'lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.css']
})
export class LessonsListComponent implements OnInit, Observer<Lesson[]> {

  lessons: Lesson[] = [];


  constructor() {
    console.log(`lessons-list register as observer`);
    store.lessonsList$.subscribe(this);
  }

  ngOnInit() {
  }

  next(data: Lesson[]) {
    console.log(`lessons-list get data`);
    console.log(data);
    console.log(this);
    this.lessons = data;
  }

  error(err: any) {
  }

  complete() {
  }

  toggleLessonViewed(lesson: Lesson) {
    store.toggleLessonViewed(lesson);
  }

  deleteLesson(lesson: Lesson) {
    store.deleteLesson(lesson);
  }

}
