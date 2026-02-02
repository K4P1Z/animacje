import { Component } from '@angular/core';

@Component({
  selector: 'app-animacja6',
  standalone: false,
  templateUrl: './animacja6.html',
  styleUrl: './animacja6.css',
})
export class Animacja6 {
  nazwaAnimacji: string = "Animacja 6";
  nazwaEfektuAnimacji: string = "Skew Transform";
  foto: string = "public/gato1.jpeg";
  transform: boolean = false;

  togglTransform() {
    this.transform = !this.transform;
  }
}
