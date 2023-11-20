import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-code-snippet',
  templateUrl: './code-snippet.component.html',
  styleUrl: './code-snippet.component.css',
})
export class CodeSnippetComponent {
  code: string = `
  import { HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

  bootstrapApplication(AppComponent, {
    providers: [
      {
        provide: HIGHLIGHT_OPTIONS,
        useValue: {
          coreLibraryLoader: () => import('highlight.js/lib/core'),
          lineNumbersLoader: () => import('ngx-highlightjs/line-numbers'), // Optional, only if you want the line numbers
          languages: {
            typescript: () => import('highlight.js/lib/languages/typescript'),
            css: () => import('highlight.js/lib/languages/css'),
            xml: () => import('highlight.js/lib/languages/xml')
          },
          themePath: 'path-to-theme.css' // Optional, and useful if you want to change the theme dynamically
        }
      }
    ]
  })
  `
}
