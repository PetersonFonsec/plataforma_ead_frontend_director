import { Component, Inject, inject, OnInit } from '@angular/core';
import { ButtonBackComponent } from '@shared/components/button-back/button-back.component';
import { PostLoadingComponent } from '@shared/components/loaders/post-loading/post-loading.component';
import { PostComponent } from '@shared/components/post/post.component';
import { PostService } from '@shared/services/post/post.service';
import { AsyncPipe } from '@angular/common';
import { TrustHtmlPipe } from '@shared/pipes/trust-html/trust-html.pipe';

@Component({
    selector: 'app-list-post',
    imports: [
        PostLoadingComponent,
        ButtonBackComponent,
        PostComponent,
        AsyncPipe,
        TrustHtmlPipe
    ],
    templateUrl: './list-post.component.html',
    styleUrl: './list-post.component.scss'
})
export class ListPostComponent {
  #postService = inject(PostService);
  posts = this.#postService.list();
}
