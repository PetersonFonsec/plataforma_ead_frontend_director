import { Component, Input, OnInit } from '@angular/core';
import { faCheck, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-button-play',
  imports: [FontAwesomeModule, NgClass],
  templateUrl: './button-play.component.html',
  styleUrl: './button-play.component.scss'
})
export class ButtonPlayComponent implements OnInit {
  @Input() finished: boolean = false;
  icon = faPlay;

  ngOnInit(): void {
    if (this.finished) this.icon = faCheck;
  }
}
