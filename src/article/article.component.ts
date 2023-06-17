import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Article } from '../main';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class ArticleComponent implements OnInit {
  @Input() article!: Article;

  constructor() {}

  ngOnInit() {}
}
