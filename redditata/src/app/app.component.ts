import { Component } from '@angular/core';
import { Article } from './models/article.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  article : Article[];
  
  constructor(){
    this.article = [
      new Article('Angular 2', 'http://angular.io', 3),
      new Article('Fullstack', 'http://fullstack.io', 2),
      new Article('Angular Homepage', 'http://angular.io', 1),
    
    ];
  }
  addArticle(nome: HTMLInputElement, cognome: HTMLInputElement): boolean {
    console.log(`Adding article nome: ${nome.value} and cognome: ${cognome.value}`);
    this.article.push(new Article(nome.value, cognome.value, 0));
    nome.value = '';
    cognome.value = '';
    return false;
  }
  sortedArticles(): Article[] {
    return this.article.sort((a: Article, b: Article) => b.votes - a.votes);
  }








}
