import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { ArticlesComponent } from './articles/articles.component';

export interface Article {
  Authors: string;
  'Author(s) ID': string;
  Title: string;
  Year: string;
  'Source title': string;
  Volume: string;
  Issue: string;
  'Page start': string;
  'Page end': string;
  'Page count': string;
  'Cited by': string;
  DOI: string;
  Link: string;
  Abstract: string;
  References: string;
  'Document Type': string;
  'Publication Stage': string;
  'Open Access': string;
  Source: string;
  EID: string;
  Art: any;
}

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, ArticlesComponent],
  template: `
    <app-articles/>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
