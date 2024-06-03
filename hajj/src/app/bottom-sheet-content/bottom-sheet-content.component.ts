import { Component, Inject } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-bottom-sheet-content',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './bottom-sheet-content.component.html',
  styleUrls: ['./bottom-sheet-content.component.scss']
})
export class BottomSheetContentComponent {
  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: string,
    private bottomSheetRef: MatBottomSheetRef<BottomSheetContentComponent>
  ) {}

  close(): void {
    this.bottomSheetRef.dismiss();
  }
}
