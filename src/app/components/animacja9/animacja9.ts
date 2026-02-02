import { Component } from '@angular/core';

@Component({
  selector: 'app-animacja9',
  standalone: false,
  templateUrl: './animacja9.html',
  styleUrl: './animacja9.css',
})
export class Animacja9 {
  nazwaAnimacji: string = "Animacja 9";
  nazwaEfektuAnimacji: string = "Blur Effect";
  foto: string = "public/gato1.jpeg";
  transform: boolean = false;

  togglTransform() {
    this.transform = !this.transform;
  }
}
