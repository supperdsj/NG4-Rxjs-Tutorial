import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ADD_NEW_LESSON, globalEventBus, LESSONS_LIST_AVAILABLE} from './event-bus';
import {testLessons} from '../shared/model/test-lessons';

@Component({
  selector: 'event-bus-experiments',
  templateUrl: './event-bus-experiments.component.html',
  styleUrls: ['./event-bus-experiments.component.css']
})
export class EventBusExperimentsComponent implements OnInit, AfterViewInit {
  ngAfterViewInit(): void {
    console.log(`event-bus-experiments notify data`);
    globalEventBus.notifyObservers(LESSONS_LIST_AVAILABLE, testLessons.slice(0));
  }

  constructor() {
  }

  ngOnInit() {
  }

  addLesson(lessonText: string) {
    if (lessonText.length > 0) {
      globalEventBus.notifyObservers(ADD_NEW_LESSON, lessonText);
    }
  }

}
