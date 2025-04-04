import { Component, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from "angular-datatables";
import { Config } from 'datatables.net';
import { CategoriesService } from '../../services/categories.service';
import { MatDialog } from '@angular/material/dialog';
import { CategoryCreateComponent } from '../../components/category-create/category-create.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@Component({
  selector: 'app-categories',
  imports: [
    MatIcon,
    MatButtonModule,
    CommonModule,
    DataTablesModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent implements OnInit {

  listCategories: any[] = [];
  isLoading: boolean = true;

  constructor(
    private categoriesService: CategoriesService,
    private dialog: MatDialog
  ) { }  

  ngOnInit(): void {
    this.loadCategories();
  }

  dtOptions: Config = {
    pagingType: 'full_numbers',
    pageLength: 10,
    ordering: true,
    language: {
      processing: 'Procesando...',
      search: 'Buscar:',
      lengthMenu: 'Mostrar _MENU_ elementos',
      info: 'Mostrando desde _START_ al _END_ de _TOTAL_ elementos',
      infoEmpty: 'Mostrando ningún elemento.',
      infoFiltered: '(filtrado _MAX_ elementos total)',
      infoPostFix: '',
      loadingRecords: 'Cargando registros...',
      zeroRecords: 'No se encontraron registros',
      emptyTable: 'No hay datos disponibles en la tabla',
      paginate: {
        previous: 'Anterior',
        next: 'Siguiente'
      }

    },
  }; 

  loadCategories(): void {
    this.categoriesService.getCategories().subscribe({
      next: (data: any) => {
        this.listCategories = data;
        this.isLoading = false;
        console.log(this.listCategories);
        console.log('Categorías cargadas con éxito', data);
      },
      error: (error) => {
        console.error('Error al cargar las categorías', error);
      }
    }
    );
  }

  openCategoriesCreateDialog() {
    const dialogRef = this.dialog.open(CategoryCreateComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadCategories(); // Reload categories after creating a new one
      }
    });
  }

  openCategoriesEditDialog(id: number) {
    // Logic to open the dialog for editing an existing category
  }

  deleteCategory(id: number) {
    // Logic to delete a category
  }


}
