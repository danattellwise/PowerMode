import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KeyBindService {
  keyBinds: any = {
    q: {
      actionType: null,   // ADD_TO_SALESFLOW
      resourceId: null,
      resourceName: null
    },
    w: {
      actionType: null,
      resourceId: null,
      resourceName: null
    },
    e: {
      actionType: null,
      resourceId: null,
      resourceName: null
    },
    r: {
      actionType: null,
      resourceId: null,
      resourceName: null
    },
  };

  constructor() { }

  setKeyBind(keyBind: any, letter: string) {
    this.keyBinds[letter] = keyBind
    console.log('===========', this.keyBinds);
  }

  getKeyBinds() {
    return this.keyBinds;
  }

  getKeyBindByLetter(letter: string) {
    return this.keyBinds[letter];
  }
}
