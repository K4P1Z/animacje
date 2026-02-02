import { Component } from '@angular/core';

@Component({
  selector: 'app-animacja8',
  standalone: false,
  templateUrl: './animacja8.html',
  styleUrl: './animacja8.css',
})
export class Animacja8 {
  nazwaAnimacji: string = "Animacja 8";
  nazwaEfektuAnimacji: string = "Flip 3D";
  foto: string = "public/gato1.jpeg";
  transform: boolean = false;

  togglTransform() {
    this.transform = !this.transform;
  }
}
