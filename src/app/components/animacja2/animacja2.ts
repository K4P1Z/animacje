import { Component } from '@angular/core';

@Component({
  selector: 'app-animacja2',
  standalone: false,
  templateUrl: './animacja2.html',
  styleUrl: './animacja2.css',
})
export class Animacja2 {
  nazwaAnimacji:string = "Animacja 2"
  nazwaEfektuAnimacji:string = "Powiększenie  -  Zoom"
  foto:string = "public/gato2.jpg"

  transform:boolean = false;


  togglTransform(){
    this.transform= !this.transform;
  }

}
