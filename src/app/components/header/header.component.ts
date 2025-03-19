import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterLinkActive, Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isMenuOpen = false;

  constructor(private location: Location, private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      // Removed the isAboutPage logic since the back button is removed
    });
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    if (this.isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('menu-open');
    } else {
      document.body.style.overflow = 'auto';
      document.body.classList.remove('menu-open');
    }
  }

  closeMenu() {
    if (this.isMenuOpen) {
      this.isMenuOpen = false;
      document.body.style.overflow = 'auto';
      document.body.classList.remove('menu-open');
    }
  }
}
