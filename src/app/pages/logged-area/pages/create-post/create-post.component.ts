import { Component } from '@angular/core';
import { PostLoadingComponent } from '@shared/components/loaders/post-loading/post-loading.component';

@Component({
  selector: 'app-create-post',
  standalone: true,
  imports: [PostLoadingComponent],
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.scss'
})
export class CreatePostComponent {

}
