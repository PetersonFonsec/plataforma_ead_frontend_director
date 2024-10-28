import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ITimeLine } from '@shared/interfaces/timeline.model';
import { DateItemComponent } from '../date-item/date-item.component';

@Component({
  selector: 'app-time-line',
  standalone: true,
  imports: [DateItemComponent],
  templateUrl: './time-line.component.html',
  styleUrl: './time-line.component.scss'
})
export class TimeLineComponent implements OnInit {
  @Input() events: ITimeLine[] = []

  ngOnInit(): void {
    const event1: ITimeLine = {
      date: new Date().toISOString(),
      title: "Data limite para entregar a atividade de matematica",
      description: ""
    }

    const event2: ITimeLine = {
      date: new Date("2024/8/9").toISOString(),
      title: "Data limite para entregar a atividade de conceitos computacionais",
      description: ""
    }

    const event3: ITimeLine = {
      date: new Date("2024/7/12").toISOString(),
      title: "Data final para marcar as provas presenciais",
      description: ""
    }

    this.events = [event1, event2, event3]

  }
}
