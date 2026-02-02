import { Component } from '@angular/core';

@Component({
  selector: 'app-animacja3',
  standalone: false,
  templateUrl: './animacja3.html',
  styleUrl: './animacja3.css',
})
export class Animacja3 {
 nazwaAnimacji:string = "Animacja 3"
  nazwaEfektuAnimacji:string = "Opacity "
  foto:string = "public/gato3.jpg"

  transform:boolean = false;


  togglTransform(){
    this.transform= !this.transform;
  }
}
