import { Component } from '@angular/core';

@Component({
  selector: 'app-animacja13',
  standalone: false,
  templateUrl: './animacja13.html',
  styleUrl: './animacja13.css',
})
export class Animacja13 {
  nazwaAnimacji: string = "Animacja 13";
  nazwaEfektuAnimacji: string = "Pulse";
  foto: string = "public/gato1.jpeg";
  transform: boolean = false;

  togglTransform() {
    this.transform = !this.transform;
  }
}
