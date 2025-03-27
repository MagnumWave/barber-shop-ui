import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
//import { MatCard, MatCardTitle, MatCardHeader } from '@angular/material/card';
//NOTE: meu auto-complete não pegou o modulo então tive que importar um por um antes.
//entendo que importar o módulo todo tenha suas desvantagens em tamanho de aplicação.

@Component({
  selector: 'app-card-header',
  imports: [MatCardModule],
  templateUrl: './card-header.component.html',
  styleUrl: './card-header.component.scss'
})
export class CardHeaderComponent {

}
