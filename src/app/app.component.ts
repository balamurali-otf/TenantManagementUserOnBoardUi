import { Component, HostBinding, OnInit} from '@angular/core';
import {ThemeService} from './modules/shared/services/theme.service';
import {OverlayContainer} from '@angular/cdk/overlay';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tenant-management-ui';

  @HostBinding('class') className = '';

  constructor(
    private tService: ThemeService,
    private overlay: OverlayContainer) {}

  ngOnInit(): void {

    this.tService.getDarkThemeEnabledStatus().subscribe((darkMode: boolean) => {
      const darkClassName = 'darkMode';
      this.className = darkMode ? darkClassName : '';
      if (darkMode) {
        this.overlay.getContainerElement().classList.add(darkClassName);
      } else {
        this.overlay.getContainerElement().classList.remove(darkClassName);
      }
    });


  }
}
