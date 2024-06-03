import { Component } from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { provideAnimations } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatBottomSheetModule, CommonModule],
  providers: [
    provideAnimations()  // Provide animations for standalone component
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hajj';

  constructor(private router: Router) {}
}
