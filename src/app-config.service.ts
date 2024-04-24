import { Injectable, signal } from '@angular/core';

export type Language = 'pl' | 'en';
export type Theme = 'light' | 'dark';

@Injectable({ providedIn: 'root' })
export class AppConfigService {
  readonly language = signal<Language>('en');
  readonly theme = signal<Theme>('dark');
}
