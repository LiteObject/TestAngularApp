import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductOneComponent } from './product-one/product-one.component';
import { ProductTwoComponent } from './product-two/product-two.component';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ProductListComponent, ProductOneComponent, ProductTwoComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    MatCheckboxModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    FlexLayoutModule,
    FormsModule
    /* RouterModule.forChild([
      {path: '', component: ProductListComponent},
      {path: 'product-one', component: ProductOneComponent},
      {path: 'product-two', component: ProductTwoComponent},
    ]) */
  ],
  exports: [ProductListComponent, ProductOneComponent, ProductTwoComponent]
})
export class ProductModule { }
