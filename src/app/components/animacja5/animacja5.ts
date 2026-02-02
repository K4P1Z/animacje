import { Component } from '@angular/core';

@Component({
  selector: 'app-animacja5',
  standalone: false,
  templateUrl: './animacja5.html',
  styleUrl: './animacja5.css',
})
export class Animacja5 {
  nazwaAnimacji: string = "Animacja 5";
  nazwaEfektuAnimacji: string = "Scale 2x";
  foto: string = "public/gato1.jpeg";
  transform: boolean = false;

  togglTransform() {
    this.transform = !this.transform;
  }
}
