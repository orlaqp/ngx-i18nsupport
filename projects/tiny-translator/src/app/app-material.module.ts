import {NgModule} from '@angular/core';
import {
  MatAutocompleteModule,
  MatButtonModule, MatCardModule, MatCheckboxModule, MatDialogModule, MatIconModule, MatInputModule, MatListModule,
  MatMenuModule, MatOptionModule,
  MatProgressSpinnerModule,
  MatRadioModule, MatSelectModule, MatSlideToggleModule, MatSnackBarModule,
  MatToolbarModule, MatTooltipModule
} from '@angular/material';
import {OverlayModule} from '@angular/cdk/overlay';
import {FlexLayoutModule} from '@angular/flex-layout';
/**
 * All imports of used material components.
 */
@NgModule({
  declarations: [],
  imports: [
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatOptionModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatTooltipModule,
    OverlayModule,
    FlexLayoutModule
  ],
  exports: [
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatOptionModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatTooltipModule,
    OverlayModule,
    FlexLayoutModule
  ],
  providers: [],
})
export class AppMaterialModule { }
