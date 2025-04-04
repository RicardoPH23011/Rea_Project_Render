import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { TagCreateComponent } from '../../components/tag-create/tag-create.component';
import { MatButtonModule } from '@angular/material/button';
import { DataTablesModule } from "angular-datatables";
import { Config } from 'datatables.net';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-tags',
  imports: [
    MatIcon,
    CommonModule,
    MatButtonModule,
    DataTablesModule,
  ],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.scss'
})
export class TagsComponent implements OnInit, OnDestroy {

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

  listTags: any[] = [];
  dtTrigger: Subject<void> = new Subject<void>(); // Control de inicialización de DataTables

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadTags();
  }

  loadTags() {
    // Simulación de carga de datos (puede venir de una API)
    this.listTags = [
      { id: 1, name: 'Programación', description: 'Aprende a programar desde cero', icon: 'code' },
      { id: 2, name: 'Diseño', description: 'Aprende a diseñar desde cero', icon: 'brush' },
      { id: 3, name: 'Marketing', description: 'Aprende a hacer marketing desde cero', icon: 'trending_up' },
      { id: 4, name: 'Negocios', description: 'Aprende a hacer negocios desde cero', icon: 'business' },
      { id: 5, name: 'Finanzas', description: 'Aprende a manejar tus finanzas desde cero', icon: 'attach_money' },
      { id: 6, name: 'Salud', description: 'Aprende a cuidar tu salud desde cero', icon: 'favorite' },
      { id: 7, name: 'Cocina', description: 'Aprende a cocinar desde cero', icon: 'restaurant' },
      { id: 8, name: 'Música', description: 'Aprende a tocar un instrumento desde cero', icon: 'music_note' },
      { id: 9, name: 'Fotografía', description: 'Aprende a tomar fotos desde cero', icon: 'photo_camera' },
      { id: 10, name: 'Viajes', description: 'Aprende a viajar desde cero', icon: 'flight' },
      { id: 11, name: 'Idiomas', description: 'Aprende un idioma desde cero', icon: 'language' },
    ];

    this.dtTrigger.next(); // ⚡ Notificar a DataTables que los datos están listos
  }

  openTagCreateDialog() {
    const dialogRef = this.dialog.open(TagCreateComponent, {
      width: '450px',
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   if (result) {
    //     this.listTags.push(result);
    //     this.dtTrigger.next(); // Refrescar DataTables con el nuevo dato
    //   }
    // });
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe(); // Evita fugas de memoria al destruir el componente
  }
}
