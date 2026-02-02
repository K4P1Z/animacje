import { Component } from '@angular/core';

@Component({
  selector: 'app-animacja11',
  standalone: false,
  templateUrl: './animacja11.html',
  styleUrl: './animacja11.css',
})
export class Animacja11 {
  nazwaAnimacji: string = "Animacja 11";
  nazwaEfektuAnimacji: string = "Slide Up";
  foto: string = "public/gato1.jpeg";
  transform: boolean = false;

  togglTransform() {
    this.transform = !this.transform;
  }
}
