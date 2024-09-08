import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MaterialModule } from '../../modulos/material/material.module';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejemplo1',
  standalone: true,
  imports: [MaterialModule, FormsModule],
  templateUrl: './ejemplo1.component.html',
  styleUrls: ['./ejemplo1.component.scss']
})
export class Ejemplo1Component {
  @Input() imagenDelPadre: string = ''; // Recibe la imagen desde el componente padre
  @Output() emisor = new EventEmitter<string>(); // Emite un evento hacia el padre

  imagen = 'https://material.angular.io/assets/img/examples/shiba2.jpg';

  nombre = '';
  nombres = ['Andres', 'Juan Carlos', 'Lorena', 'Verónica'];

  setName() {
    this.nombre = 'Darth Vader';
    this.emisor.emit('Nuevo nombre establecido desde Ejemplo1');
  }

  trackByIndex(index: number): number {
    return index;
  }
}
