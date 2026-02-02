import { Component } from '@angular/core';

@Component({
  selector: 'app-animacja4',
  standalone: false,
  templateUrl: './animacja4.html',
  styleUrl: './animacja4.css',
})
export class Animacja4 {
  nazwaAnimacji: string = "Animacja 4";
  nazwaEfektuAnimacji: string = "Rotate 360";
  foto: string = "public/gato1.jpeg";
  transform: boolean = false;

  togglTransform() {
    this.transform = !this.transform;
  }
}
