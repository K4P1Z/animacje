import { Component } from '@angular/core';

@Component({
  selector: 'app-animacja1',
  standalone: false,
  templateUrl: './animacja1.html',
  styleUrl: './animacja1.css',
})
export class Animacja1 {
  nazwaAnimacji:string = "Animacja 1"
  nazwaEfektuAnimacji:string = "Move X Axis"
  foto:string = "public/gato1.jpeg"

  transform:boolean = false;


  togglTransform(){
    this.transform= !this.transform;
  }
}
