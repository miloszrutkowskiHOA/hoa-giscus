import { Component, inject } from '@angular/core';
import { ArticlesService } from './articles.service';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink],
  template: `
    @for(article of articles; track article.id) {
      <article [routerLink]="article.id">
        <h2>{{article.title}}</h2>
        <p>{{article.content.slice(0,200)}}...</p>
      </article>
    }
  `,
  styles: `
    :host {
      display: flex;
      gap: 3rem;
      flex-wrap: wrap;
    }
  
    article {
      max-width: 30rem;
      border: solid 1px black;
      padding: 1rem;
    }
  `,
})
export class ArticlesComponent {
  readonly articles = inject(ArticlesService).getAll();
}
