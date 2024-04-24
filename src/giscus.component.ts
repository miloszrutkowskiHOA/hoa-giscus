import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  computed,
  input,
} from '@angular/core';
import { Language, Theme } from './app-config.service';
import { Theme as GiscusTheme } from 'giscus';

@Component({
  standalone: true,
  selector: 'giscus',
  template: `
    <giscus-widget
        src="https://giscus.app/client.js"
        repo="miloszrutkowskiHOA/giscus-test"
        repoid="R_kgDOLyCimA"
        category="General"
        categoryid="DIC_kwDOLyCimM4Ce4Br"
        mapping="url"
        strict="0"
        reactionsenabled="1"
        emitmetadata="0"
        inputposition="bottom"
        [theme]="giscusTheme()"
        crossorigin="anonymous"
        [lang]="lang()"
        async
    ></giscus-widget>
  `,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class GiscusComponent {
  lang = input.required<Language>();
  theme = input.required<Theme>();

  giscusTheme = computed<GiscusTheme>(() =>
    this.theme() === 'dark' ? 'dark_tritanopia' : 'light_tritanopia'
  );
}
