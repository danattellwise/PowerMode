import { Component, OnInit, Output } from '@angular/core';
import { KeyBindService } from '../Service/key-bind.service';

@Component({
  selector: 'app-legend',
  templateUrl: './legend.component.html',
  styleUrls: ['./legend.component.scss']
})
export class LegendComponent implements OnInit {
  keyMap: any = {
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

  constructor(
    private keybindService:KeyBindService
  ) { }

  ngOnInit(): void {
    this.updateLegend();
  }

  updateLegend() {
    this.keyMap = this.keybindService.getKeyBinds();
    const keys = Object.entries(this.keyMap);

    keys.forEach(key => {
      if(key[0] == null)
        key[0] = 'Unassigned';
    })
  }
}
