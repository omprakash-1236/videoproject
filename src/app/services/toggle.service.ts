import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToggleService {

  private _opened: boolean = false;
  private _modeNum: number = 1;
  private _MODES: Array<string> = ['over', 'push', 'slide'];
  toggleSidebar() {
    this._opened = !this._opened;
    if (this._modeNum === this._MODES.length) {
      this._modeNum = 1;
    }    
  }

  constructor() { }
}
