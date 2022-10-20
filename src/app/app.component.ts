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
  <app-title *ngIf="destruir"></app-title>
  <br>
  <button (click)="destruirComponent()">Destruir componente</button>
  <router-outlet></router-outlet>`
})
export class AppComponent implements OnInit {

  public destruir: boolean = true;

  public valor: number = 1;

  constructor(){}

  public adicionar(): number {
    return this.valor += 1;
  }

  ngOnInit(): void {}

  public destruirComponent() {
    this.destruir = false;
  }

}
