import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  name = 'Liz';
  age = 18;
  img = 'https://source.unsplash.com/random ';
  btnDisabled = true;
  person = {
    name: 'ANDREA',
    age: 18,
    avatar: 'https://source.unsplash.com/random '
  }

toggleButton(){
  this.btnDisabled = !this.btnDisabled;
}

ageIncrease(){
  this.person.age += 1;
}

onScroll(event: Event){
  const element = event.target as HTMLElement;
  console.log(element.scrollTop);
}

changeName(event: Event){
  const element = event.target as HTMLInputElement;
  this.person.name = element.value;
}

}
