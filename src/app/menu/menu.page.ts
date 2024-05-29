import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage {
  burgers = [
    {
      name: 'Hamburger Clássico',
      description: 'Um delicioso hamburger com queijo, alface e tomate.',
      price: 15.90,
      image: 'assets/icon/burguer.ico'
    },
    {
      name: 'Gotts-Complete-Cheeseburger',
      description: 'Hamburger com queijo cheddar derretido.',
      price: 17.90,
      image: 'assets/icon/gotts-complete-cheeseburger.ico'
    },
    {
      name: 'Gramercy-Tavern-Burger-and-Kielbasa',
      description: 'Hamburger com bacon crocante e molho especial.',
      price: 19.90,
      image: 'assets/icon/Gramercy-Tavern-Burger-and-Kielbasa.ico'
    },
    {
      name: 'Handf-Double-Stack-Burger',
      description: 'Hamburger com bacon crocante e molho especial.',
      price: 19.90,
      image: 'assets/icon/handf-double-stack-burger.ico'
    },
    {
      name: 'Shake-Shack-Shackburger',
      description: 'Hamburger com bacon crocante e molho especial.',
      price: 19.90,
      image: 'assets/icon/shake-shack-shackburger.ico'
    },
    {
      name: 'usda-prime-burgers-pack',
      description: 'Hamburger com bacon crocante e molho especial.',
      price: 19.90,
      image: 'assets/icon/usda-prime-burgers-pack.ico'
    },
    {
      name: 'Burger-au-Poivre',
      description: 'Hamburger com bacon crocante e molho especial.',
      price: 19.90,
      image: 'assets/icon/burger-au-poivre.ico'
    },
    {
      name: 'Goldbelly-Burger-Blend',
      description: 'Hamburger com bacon crocante e molho especial.',
      price: 19.90,
      image: 'assets/icon/goldbelly-burger-blend.ico'
    }
  ];

  constructor() { }
}
