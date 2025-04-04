import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-tag-create',
  imports: [
    MatIcon,
    CommonModule,
    MatButtonModule
  ],
  templateUrl: './tag-create.component.html',
  styleUrl: './tag-create.component.scss'
})
export class TagCreateComponent implements OnInit {

  listCategories: any[] = [];

  constructor(
    public dialogRef: MatDialogRef<TagCreateComponent>,
    private categoriesService: CategoriesService
  ) {}

  ngOnInit(): void {
    this.getAllCategories();
  }

  closeTagCreateDialog() {
    this.dialogRef.close();
  }

  getAllCategories() {
    this.categoriesService.getCategories().subscribe({
      next: (response: any) => {
        this.listCategories = response;
      },
      error: (error: any) => {
        console.error('Error al obtener las categorías', error);
        // Aquí puedes manejar el error al obtener las categorías
      }
    });
  }

  

}
