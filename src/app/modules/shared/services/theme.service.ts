import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  // tslint:disable-next-line:variable-name
  private darkThemeEnabled: BehaviorSubject<boolean>;

  constructor() {
    this.darkThemeEnabled = new BehaviorSubject<boolean>(true);
  }


  getDarkThemeEnabledStatus(): Observable<boolean> {
    return this.darkThemeEnabled.asObservable();
  }

  setDarkThemeEnabledStatus(value: boolean): void {
    this.darkThemeEnabled.next(value);
  }

}
