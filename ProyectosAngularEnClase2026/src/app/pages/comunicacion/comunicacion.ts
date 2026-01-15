import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Para @if y clases comunes
import { FormsModule } from '@angular/forms'; 
import { Hijo } from './hijo/hijo';

@Component({
  selector: 'app-comunicacion',
  standalone: true,
  imports: [CommonModule, FormsModule, Hijo],
  templateUrl: './comunicacion.html',
  styleUrl: './comunicacion.css',
})
export class Comunicacion {
  showModal: boolean = false;
  mensajeDelPadre: string = '';
  mensajeDelHijo: string = '';

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  recibirMensajeDelHijo(event: string) {
    this.mensajeDelHijo = event;
  }
}