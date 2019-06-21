import { Component, Renderer2 } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'videotest';
  previousUrl: string;
  innerpage:string='innerpage';

  constructor(private renderer: Renderer2, private router: Router) {
    this.router.events
    .subscribe((event) => {
      if (event instanceof NavigationStart) {
        if (this.previousUrl) {
          this.renderer.removeClass(document.body, this.previousUrl);
        }
        let currentUrlSlug = event.url.slice(1)
        if (currentUrlSlug) {
          this.renderer.addClass(document.body, this.innerpage);
        }
        this.previousUrl = this.innerpage;
      }
    });
  }
}
