import { DatePipe, NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { Utils } from '@shared/services/utils/utils.service';

@Component({
  selector: 'app-calendar',
  imports: [FontAwesomeModule, DatePipe, NgClass],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})
export class CalendarComponent {
  days = computed(() => this.generateDays());
  month = computed(() => this.getMonth());
  year = computed(() => this.getYear());

  currentDay = signal(new Date());
  daysInWeek = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
  prevIcon = faAngleLeft;
  nextIcon = faAngleRight;

  selectDay: Date | null = null;

  generateDays() {
    const year = this.currentDay().getFullYear();
    const month = this.currentDay().getMonth();

    let date = new Date(`${year}/${month + 1}/01`);
    let days = [];

    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }

    return days;
  }

  getMonth() {
    const month = new Date(this.currentDay().setMonth(this.currentDay().getMonth()));
    const test = new Intl.DateTimeFormat("pt-BR", { month: "long" }).format(month);
    return test;
  }

  getYear() {
    return this.currentDay().getFullYear();
  }

  prev() {
    const prevMonth = Utils.subtractMounth(this.currentDay(), 1);
    this.currentDay.set(prevMonth);
  }

  next() {
    const nextMonth = Utils.addMounth(this.currentDay(), 1);
    this.currentDay.set(nextMonth);
  }
}
