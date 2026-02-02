import { Component } from '@angular/core';

@Component({
  selector: 'app-animacja10',
  standalone: false,
  templateUrl: './animacja10.html',
  styleUrl: './animacja10.css',
})
export class Animacja10 {
  nazwaAnimacji: string = "Animacja 10";
  nazwaEfektuAnimacji: string = "Bounce";
  foto: string = "public/gato1.jpeg";
  transform: boolean = false;

  togglTransform() {
    this.transform = !this.transform;
  }
}
