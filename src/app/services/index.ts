import { NgModule } from '@angular/core';
// Import service modules
import { ProductService } from './product.service';
import { GlobalService } from './global.service';

export const SERVICE_MODULES = [
    ProductService,
	GlobalService
]

// @NgModule({
//     imports: SERVICE_MODULES,
//     exports: SERVICE_MODULES
// })
// export class ServiceModules {}