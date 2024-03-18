import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from "ngx-spinner";
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSelectModule} from '@angular/material/select';
import { NgxStarsModule } from 'ngx-stars';
import {MatDividerModule} from '@angular/material/divider';
import { LoaderComponent } from './components/loader/loader/loader.component';
import { SlicePipe } from './pipes/slice/slice.pipe';
import { ProductComponent } from './components/product/product.component';


@NgModule({
  declarations: [
    LoaderComponent,
    SlicePipe,
    ProductComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    NgxSpinnerModule,
    MatCardModule,
    MatPaginatorModule,
    MatSelectModule,
    NgxStarsModule,
    MatDividerModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    NgxSpinnerModule,
    MatCardModule,
    MatPaginatorModule,
    MatSelectModule,
    NgxStarsModule,
    MatDividerModule,
    LoaderComponent,
    SlicePipe,
    ProductComponent
  ]
})
export class SharedModule { }
