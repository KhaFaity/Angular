import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public name= "Kha";
  public age = 13;
  public listName = ["Kha", "Huy"]
  constructor(){}
  ngOnInit(): void {}

  public tangtuoi(){
    this.age++;
    if(this.age === 18)
     { this.name = "chao anh";
      this.listName.push(this.name + ":" + this.age);}
      if(this.age > 18)
      this.changeNameAndAge();
  }
  public changeNameAndAge(){
    if (this.age >= 18) {
      this.name = this.name.toUpperCase();
      this.listName.push(this.name + ":" + this.age);
    }
  }
}
