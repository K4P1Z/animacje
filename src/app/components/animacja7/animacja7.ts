import { Component } from '@angular/core';

@Component({
  selector: 'app-animacja7',
  standalone: false,
  templateUrl: './animacja7.html',
  styleUrl: './animacja7.css',
})
export class Animacja7 {
  nazwaAnimacji: string = "Animacja 7";
  nazwaEfektuAnimacji: string = "Fade Out";
  foto: string = "public/gato1.jpeg";
  transform: boolean = false;

  togglTransform() {
    this.transform = !this.transform;
  }
}
