import { Component } from '@angular/core';
import { SecundaryButtonComponent } from '../_components/secundary-button/secundary-button.component';

@Component({
  selector: 'app-item-certificado',
  standalone: true,
  imports: [SecundaryButtonComponent],
  templateUrl: './item-certificado.component.html',
  styleUrl: './item-certificado.component.css'
})
export class ItemCertificadoComponent {}
