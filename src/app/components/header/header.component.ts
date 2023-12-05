import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {

  
  constructor( private router: Router) {}

  ngOnInit(): void {}

  /* --- This to be able navigate between sections inside one page or from section to other pages or vice versa --- */
  onBackToHome() {
    const element = document.getElementById('#main');
    if (element) {
      window.history.replaceState('', 'main', '#main');
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      location.href = '/';
    }
  }

  /* ---- To navigate from main to services section---- */
  onGetStarted() {
    this.router.navigateByUrl('/#services');

    setTimeout(() => {
      const element = document.getElementById('services');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 0);
  }
}
