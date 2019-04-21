import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

export interface LoaderState {
  show: boolean;
}
@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  private loaderStatusState = new Subject<any>();
  loaderStatus = this.loaderStatusState.asObservable();

  constructor() {}

  displayLoader(value: boolean) {
    if (value === true) {
      setTimeout(() => {
        this.loaderStatusState.next(<LoaderState>{show: false});
      }, 60000);
    }
    this.loaderStatusState.next(<LoaderState>{show: value});
  }
}
