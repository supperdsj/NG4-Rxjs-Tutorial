import {AfterViewInit, Component, OnInit} from '@angular/core';
import {testLessons} from '../shared/model/test-lessons';
import {store} from './app-data';

@Component({
  selector: 'event-bus-experiments',
  templateUrl: './event-bus-experiments.component.html',
  styleUrls: ['./event-bus-experiments.component.css']
})
export class EventBusExperimentsComponent implements OnInit, AfterViewInit {
  ngAfterViewInit(): void {
    console.log(`event-bus-experiments notify data`);
  }

  constructor() {
    store.initializeLessonsList(testLessons);
    setTimeout(() => {
      const newLosson = {
        id: Math.random(),
        description: 'test lesson',
        duration: '--:--'
      };
      store.addLesson(newLosson);
    }, 10000);
  }

  ngOnInit() {
  }

  addLesson(lessonText: string) {
    if (lessonText.length > 0) {
      const newLosson = {
        id: Math.random(),
        description: lessonText,
        duration: '--:--'
      };
      store.addLesson(newLosson);
    }
  }

}
