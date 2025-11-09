import { Component } from '@angular/core';
import { NavbarComponent } from './_components/navbar/navbar';
import { PrimaryButton } from "./primary-button/primary-button";
import { SecundaryButton } from "./_components/secundary-button/secundary-button";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, PrimaryButton, SecundaryButton],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = "gerador-certificado";
  exibeNavbar: boolean = true;
}

