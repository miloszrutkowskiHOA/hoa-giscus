import {
  AfterViewInit,
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  Directive,
  ElementRef,
  OnInit,
  Renderer2,
  SecurityContext,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { DomSanitizer, bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import {
  RouterOutlet,
  Routes,
  provideRouter,
  withComponentInputBinding,
} from '@angular/router';
import { ArticlesComponent } from './articles.component';
import { ArticleComponent } from './article.component';
import { AppConfigService, Language, Theme } from './app-config.service';
import 'giscus';

@Component({
  selector: 'app-root',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [RouterOutlet],
  template: `
    <h1>Angular Love</h1>

    <div>
      <button (click)="onLangChange('pl')">PL</button>
      <button (click)="onLangChange('en')">EN</button>
    </div>

    <br />

    <div>
    <button (click)="onThemeChange('light')">Light</button>
      <button (click)="onThemeChange('dark')">Dark</button>
    </div>
    <br />

    <router-outlet></router-outlet>
  `,
})
export class App {
  private appConfigService = inject(AppConfigService);

  onLangChange(lang: Language) {
    this.appConfigService.language.set(lang);
  }

  onThemeChange(theme: Theme) {
    this.appConfigService.theme.set(theme);
  }
}

const routes: Routes = [
  { path: '', component: ArticlesComponent },
  { path: ':id', component: ArticleComponent },
];

bootstrapApplication(App, {
  providers: [provideRouter(routes, withComponentInputBinding())],
});
