import * as _ from 'lodash';
import {Lesson} from '../shared/model/lesson';
import {Subject, Observable, Observer} from 'rxjs';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

class DataStore {
  private lessonsListSubject = new BehaviorSubject([]);
  public lessonsList$: Observable<Lesson[]> = this.lessonsListSubject.asObservable();

  initializeLessonsList(newList: Lesson[]) {
    this.lessonsListSubject.next(_.cloneDeep(newList));
  }

  addLesson(newLesson: Lesson) {
    const lessons = this.cloneLesson();
    lessons.push(_.cloneDeep(newLesson));
    this.lessonsListSubject.next(lessons);
  }

  deleteLesson(deleted: Lesson) {
    const lessons = this.cloneLesson();
    _.remove(lessons, lesson => lesson.id === deleted.id);
    this.lessonsListSubject.next(lessons);
  }

  toggleLessonViewed(toggled: Lesson) {
    const lessons = this.cloneLesson();
    const lesson = _.find(lessons, le => le.id === toggled.id);
    lesson.completed = !lesson.completed;
    this.lessonsListSubject.next(lessons);
  }

  // broadcast() {
  //   this.lessonsListSubject.next(_.cloneDeep(this.lessons));
  // }

  private cloneLesson() {
    return _.cloneDeep(this.lessonsListSubject.getValue());
  }
}

export const store = new DataStore();
