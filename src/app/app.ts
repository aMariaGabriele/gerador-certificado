import { Component } from '@angular/core';
import { NavbarComponent } from './_components/navbar/navbar';
import { PrimaryButtonComponent } from "./primary-button/primary-button.component";
import { SecundaryButtonComponent } from "./_components/secundary-button/secundary-button.component";
import { ItemCertificadoComponent } from "./item-certificado/item-certificado.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    PrimaryButtonComponent,
    SecundaryButtonComponent,
    ItemCertificadoComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = "gerador-certificado";
  exibeNavbar: boolean = true;
}
