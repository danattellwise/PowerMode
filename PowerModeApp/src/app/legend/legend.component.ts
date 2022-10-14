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

  constructor(
    private keybindService:KeyBindService
  ) { }

  ngOnInit(): void {
    this.updateLegend();
  }

  updateLegend() {
    this.keyMap = this.keybindService.getKeyBinds();
  }
}
