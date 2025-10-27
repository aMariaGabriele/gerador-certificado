import { Component } from '@angular/core';
import { NavbarComponent } from './_components/navbar/navbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = "gerador-certificado";
  exibeNavbar: boolean = true;
}

