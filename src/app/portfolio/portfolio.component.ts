import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  imports: [CommonModule],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  portfolioItems = [
    {
      id: 1,
      title: 'Log Cabin',
      subtitle: 'Graphic Design',
      image: 'https://routeegy.github.io/startFramework/assets/images/portfolio/cabin.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.'
    },
    {
      id: 2,
      title: 'Tasty Cake',
      subtitle: 'Graphic Design',
      image: 'https://routeegy.github.io/startFramework/assets/images/portfolio/cake.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.'
    },
    {
      id: 3,
      title: 'Circus Tent',
      subtitle: 'Graphic Design',
      image: 'https://routeegy.github.io/startFramework/assets/images/portfolio/circus.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.'
    },
    {
      id: 4,
      title: 'Controller',
      subtitle: 'Graphic Design',
      image: 'https://routeegy.github.io/startFramework/assets/images/portfolio/game.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.'
    },
    {
      id: 5,
      title: 'Locked Safe',
      subtitle: 'Graphic Design',
      image: 'https://routeegy.github.io/startFramework/assets/images/portfolio/safe.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.'
    },
    {
      id: 6,
      title: 'Submarine',
      subtitle: 'Graphic Design',
      image: 'https://routeegy.github.io/startFramework/assets/images/portfolio/submarine.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.'
    }
  ];
}
