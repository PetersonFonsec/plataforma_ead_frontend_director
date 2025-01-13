import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';
import { CalendarDayEvents } from './calendar-day.model';

@Component({
  selector: 'app-calendar-day',
  templateUrl: './calendar-day.component.html',
  imports: [NgClass],
  styleUrl: './calendar-day.component.scss'
})
export class CalendarDayComponent {
  event = input(CalendarDayEvents.NOTHING);
  selected = input(false);
}
