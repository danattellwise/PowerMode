import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KeyBindService {
  keyBinds: any = {
    q: {
      actionType: 'No Action Assigned',   // ADD_TO_SALESFLOW
      resourceId: 'Unassigned',
      resourceName: 'No Salesflow Assigned'
    },
    w: {
      actionType: 'No Action Assigned',
      resourceId: 'Unassigned',
      resourceName: 'No Salesflow Assigned'
    },
    e: {
      actionType: 'No Action Assigned',
      resourceId: 'Unassigned',
      resourceName: 'No Salesflow Assigned'
    },
    r: {
      actionType: 'No Action Assigned',
      resourceId: 'Unassigned',
      resourceName: 'No Salesflow Assigned'
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
