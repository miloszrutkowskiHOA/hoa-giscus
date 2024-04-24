import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  OnInit,
  computed,
  effect,
  inject,
  input,
} from '@angular/core';
import { ArticlesService } from './articles.service';
import { AppConfigService } from './app-config.service';
import { GiscusComponent } from './giscus.component';

@Component({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [GiscusComponent],
  standalone: true,
  template: `
      <h1>{{article()?.title}}</h1>
      <p>{{article()?.content}}</p>
      <giscus [lang]="lang()" [theme]="theme()" />
      
  `,
})
export class ArticleComponent {
  private articleService = inject(ArticlesService);
  private appConfigService = inject(AppConfigService);

  id = input.required<string>();
  article = computed(() => this.articleService.getById(this.id()));
  lang = this.appConfigService.language;
  theme = this.appConfigService.theme;
}
