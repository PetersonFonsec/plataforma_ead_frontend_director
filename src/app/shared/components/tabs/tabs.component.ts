import { CommonModule } from '@angular/common';
import {
  Component,
  computed,
  contentChildren,
  Directive,
  signal,
} from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Directive({
  standalone: true,
  selector: '[appTabHeader]',
})
export class TabHeaderDirective { }

@Directive({
  standalone: true,
  selector: '[appTabContent]',
})
export class TabContentDirective { }

@Component({
  selector: 'app-tabs',
  imports: [
    CommonModule,
  ],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss'
})
export class TabsComponent {
  tabs = contentChildren(TabComponent);

  tabsData = computed(() => {
    return this.tabs().map(({ content, header }) => {
      return {
        header,
        content
      };
    });
  });

  selectedTab = signal(0);

  selectedTabContent = computed(
    () => this.tabsData()[this.selectedTab()]?.content()
  );

  onSelectTab(index: number) {
    this.selectedTab.set(index);
  }
}
