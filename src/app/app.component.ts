import { Component, Renderer2 } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Vedy';
  previousUrl: string;
  innerpage:string='innerpage';

  private _opened: boolean = false;
  private _modeNum: number = 1;
  private _MODES: Array<string> = ['over', 'push', 'slide'];
  toggleSidebar() {
    this._opened = !this._opened;
    if (this._modeNum === this._MODES.length) {
      this._modeNum = 1;
    }    
  }

  constructor(private renderer: Renderer2, private router: Router) {
    this.router.events
    .subscribe((event) => {
      if (event instanceof NavigationStart) {
        if (this.previousUrl) {
          this.renderer.removeClass(document.body, this.previousUrl);
        }
        let currentUrlSlug = event.url.slice(1)
        if (currentUrlSlug!="") {
          this.renderer.addClass(document.body, this.innerpage);
        }
        this.previousUrl = this.innerpage;
      }
    });
  }
}
