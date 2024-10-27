import { Component } from '@angular/core';
import { TabComponent } from '@shared/components/tab/tab.component';
import { TabContentDirective, TabHeaderDirective, TabsComponent } from '@shared/components/tabs/tabs.component';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [
    TabsComponent,
    TabComponent,
    TabContentDirective,
    TabHeaderDirective
  ],
  templateUrl: './student.component.html',
  styleUrl: './student.component.scss'
})
export class StudentComponent {
  tabs = ["Atividades", "Avaliações", "Materias"]
}
