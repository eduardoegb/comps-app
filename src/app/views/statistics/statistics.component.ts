import { Component, Input } from '@angular/core';
import { Stat } from './statistics.interfaces';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent {
  @Input() data: Stat[] = [];
}
