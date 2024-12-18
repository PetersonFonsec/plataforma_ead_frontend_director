import { HttpErrorResponse } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ButtonBackComponent } from '@shared/components/button-back/button-back.component';
import { ButtonComponent } from '@shared/components/button/button.component';
import { TabComponent } from '@shared/components/tab/tab.component';
import { TabContentDirective, TabHeaderDirective, TabsComponent } from '@shared/components/tabs/tabs.component';
import { VideoPlayerComponent } from '@shared/components/video-player/video-player.component';
import { LessonService } from '@shared/services/lesson/lesson.service';

@Component({
  selector: 'app-single',
  imports: [
    ButtonComponent,
    ButtonBackComponent,
    TabsComponent,
    TabComponent,
    TabContentDirective,
    TabHeaderDirective,
    VideoPlayerComponent
  ],
  templateUrl: './single.component.html',
  styleUrl: './single.component.scss'
})
export class SingleComponent implements OnInit {
  #router = inject(ActivatedRoute);
  #lesson = inject(LessonService);
  lesson = signal<any>({});

  loading = signal(true);
  playerVideoOptions: any = {
    autoplay: true,
    controls: true,
    fluid: true,
    sources: [],
  }

  public ngOnInit(): void {
    this.#router.paramMap.subscribe({
      next: params => {
        const lessonId = params.get('id');
        if (!lessonId) return this.loading.set(false);

        this.#lesson.get(lessonId).subscribe({
          next: (res) => {
            console.log(res);

            this.lesson.update((lesson) => lesson = res)
            this.playerVideoOptions.sources.push({ src: "https://www.youtube.com/watch?v=Toij3ZYxrzE" })
            this.loading.set(false);
          },
          error: () => {
            this.loading.set(false);
          }
        })
      }
    });
  }
}
