import { CommonModule, DatePipe, NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { Utils } from '@shared/services/utils/utils.service';
import { CalendarDayComponent } from '../calendar-day/calendar-day.component';

@Component({
  selector: 'app-calendar',
  imports: [FontAwesomeModule, DatePipe, CalendarDayComponent],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})
export class CalendarComponent {
  allDays = computed(() => this.generateDays());
  month = computed(() => this.getMonth());
  year = computed(() => this.getYear());

  currentDay = signal(new Date());
  daysInWeek = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
  prevIcon = faAngleLeft;
  nextIcon = faAngleRight;

  selectDay: Date | null = null;

  generateDays() {
    //1° passo - Recuperar o mes e ano
    const year = this.currentDay().getFullYear();
    const month = this.currentDay().getMonth();
    let date = new Date(`${year}/${month + 1}/01`);

    const dayOfWeek: any = {
      0: [],
      1: [],
      2: [],
      3: [],
      4: [],
      5: [],
      6: []
    };

    //2° passo - Recuperar os dias do mês
    while (date.getMonth() === month) {
      //3° passo - Separar os dias por semana
      dayOfWeek[date.getDay()].push(new Date(date));
      date.setDate(date.getDate() + 1);
    }

    //4° passo - Converter novamente em um array para conseguir dar um for no html
    console.log(dayOfWeek);

    const days = [];
    for (const dayInWeek in dayOfWeek) {
      days.push(dayOfWeek[dayInWeek]);
    }

    console.log(days);
    return days;
  }

  getMonth() {
    const month = new Date(this.currentDay().setMonth(this.currentDay().getMonth()));
    return new Intl.DateTimeFormat("pt-BR", { month: "long" }).format(month);
  }

  getYear() {
    return this.currentDay().getFullYear();
  }

  prev() {
    const prevMonth = Utils.subtractMonth(this.currentDay(), 1);
    this.currentDay.set(prevMonth);
  }

  next() {
    const nextMonth = Utils.addMonth(this.currentDay(), 1);
    this.currentDay.set(nextMonth);
  }
}
