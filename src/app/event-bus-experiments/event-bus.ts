import * as _ from 'lodash';

export interface Observer {
  notify(data: any);
}

export const ADD_NEW_LESSON = 'ADD_NEW_LESSON';
export const LESSONS_LIST_AVAILABLE = 'LESSONS_LIST_AVAILABLE';

interface Subject {
  registerObserver(eventType: string, obs: Observer);

  unregisterObserver(eventType: string, obs: Observer);

  notifyObservers(eventType: string, data: any);
}


class EventBus implements Subject {

  private observers: { [key: string]: Observer[] } = {};

  private observersPerEventType(eventType: string) {
    const observerPerType = this.observers[eventType];
    if (!observerPerType) {
      this.observers[eventType] = [];
    }
    return this.observers[eventType];
  }

  registerObserver(eventType: string, obs: Observer) {
    this.observersPerEventType(eventType).push(obs);
  }

  unregisterObserver(eventType: string, obs: Observer) {
    _.remove(this.observersPerEventType(eventType), el => el === obs);
  }

  notifyObservers(eventType: string, data: any) {
    this.observersPerEventType(eventType).forEach(obs => obs.notify(data));
  }
}

export const globalEventBus = new EventBus();
