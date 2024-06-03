import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BottomSheetContentComponent } from '../../bottom-sheet-content/bottom-sheet-content.component';
import { CommonModule } from '@angular/common';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-nusuk-general',
  standalone: true,
  imports: [CommonModule, MatBottomSheetModule],
  templateUrl: './nusuk-general.component.html',
  styleUrls: ['./nusuk-general.component.scss']
})
export class NusukGeneralComponent {
  constructor(private bottomSheet: MatBottomSheet) {}

  openBottomSheet(): void {
    this.bottomSheet.open(BottomSheetContentComponent, {
      data: 'Résultat pour Image 2',
      panelClass: 'custom-bottom-sheet'
    });
  }
}
