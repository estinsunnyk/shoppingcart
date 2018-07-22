import { NgModule } from '@angular/core';
// Import modules
import {MatMenuModule} from '@angular/material/menu';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatBadgeModule} from '@angular/material/badge';

const MATERIAL_MODULES = [
	MatMenuModule,
	BrowserAnimationsModule,
	MatIconModule,
	MatButtonModule,
	MatGridListModule,
	MatBadgeModule
]

@NgModule({
  imports: MATERIAL_MODULES,
  exports: MATERIAL_MODULES
})
export class MaterialModules {}