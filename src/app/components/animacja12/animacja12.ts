import { Component } from '@angular/core';

@Component({
  selector: 'app-animacja12',
  standalone: false,
  templateUrl: './animacja12.html',
  styleUrl: './animacja12.css',
})
export class Animacja12 {
  nazwaAnimacji: string = "Animacja 12";
  nazwaEfektuAnimacji: string = "Shake";
  foto: string = "public/gato1.jpeg";
  transform: boolean = false;

  togglTransform() {
    this.transform = !this.transform;
  }
}
