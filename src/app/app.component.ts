import {  Component, OnInit } from '@angular/core';
/**
 * DoCheck,
 * AfterContentInit,
 * AfterContentChecked,
 * AfterViewInit,
 * AfterViewChecked
 */

@Component({
  selector: 'app-root',
  template: `
  <!--
    <app-title *ngIf="destruir"></app-title>
    <br>
    <button (click)="destruirComponent()">Destruir componente</button>
  -->
  <app-data-biding></app-data-biding>
  <app-diretivas-estruturais></app-diretivas-estruturais>
  <router-outlet></router-outlet>`
})
export class AppComponent implements OnInit {

  constructor(){}

  ngOnInit(): void {}

}
