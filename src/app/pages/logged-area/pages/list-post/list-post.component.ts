import { Component } from '@angular/core';
import { ButtonBackComponent } from '@shared/components/button-back/button-back.component';
import { PostLoadingComponent } from '@shared/components/loaders/post-loading/post-loading.component';
import { PostComponent } from '@shared/components/post/post.component';

@Component({
  selector: 'app-list-post',
  standalone: true,
  imports: [PostLoadingComponent, ButtonBackComponent, PostComponent],
  templateUrl: './list-post.component.html',
  styleUrl: './list-post.component.scss'
})
export class ListPostComponent {
  posts: any = []
}
