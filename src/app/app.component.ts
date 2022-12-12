import { Component, ViewChild } from '@angular/core';
import { DxFormComponent } from 'devextreme-angular';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Grid } from './@core/models/grid.model';
import { SmartService } from './@core/services/smart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //#region atributos

  //model
  proveedores: Grid[] = [];

  //
  infoProvedores: any = {};

  //grid
  proveedoresGrid: any = {};

  //EditarProveedor
  isEditing: boolean = false;

  @ViewChild('formProveedores') formProveedores!: DxFormComponent;
  //#endregion

  //#region constructor

  constructor(private smartService: SmartService) {
    //paraEditar
    this.isEditing = false;

    //bindeo
    this.onValueChangedNit = this.onValueChangedNit.bind(this);
    this.onValueChangedNombre = this.onValueChangedNombre.bind(this);
    this.onValueChangedDireccion = this.onValueChangedDireccion.bind(this);
    this.onValueChangedTelefono = this.onValueChangedTelefono.bind(this);
    this.onValueChangedContacto = this.onValueChangedContacto.bind(this);
    this.onValueChangedEmail = this.onValueChangedEmail.bind(this);

    this.onEnterKeyNit = this.onEnterKeyNit.bind(this);
    this.onEnterKeyNombre = this.onEnterKeyNombre.bind(this);
    this.onEnterKeyDireccion = this.onEnterKeyDireccion.bind(this);
    this.onEnterKeyTelefono = this.onEnterKeyTelefono.bind(this);
    this.onEnterKeyContacto = this.onEnterKeyContacto.bind(this);
    this.onEnterKeyEmail = this.onEnterKeyEmail.bind(this);
    this.onEnterKeyObservacion = this.onEnterKeyObservacion.bind(this);

    this.onClickEditar = this.onClickEditar.bind(this);

    this.onSelectionChangedProveedor =
      this.onSelectionChangedProveedor.bind(this);
  }
  //#endregion

  //#region onInit
  ngOnInit(): void {
    this.obtenerProveedores().subscribe((all) => {
      if (all && all.length > 0) {
        this.proveedoresGrid = all;
      }
    });
  }
  //#endregion

  //#region funciones

  //Proveedores

  obtenerProveedores(): Observable<Grid[]> {
    return this.smartService.list<Grid[]>({
      urlRewrite: `${environment.apiOdontologia}/Proveedor/GetAll`,
      mapFn: ({ result }) => result,
    });
  }

  // obtenerProveedor(numeroIdeProveedor: string): Observable<Proveedores[]> {
  //   return this.smartService.list<Proveedores[]>({
  //     urlRewrite: `${environment.apiOdontologia}/Proveedor/Get/${numeroIdeProveedor}`,
  //     mapFn: ({ result }) => result,
  //   });
  // }

  // createProveedor(data: Proveedores): Observable<Proveedores> {
  //   return this.smartService.add(data, {
  //     urlRewrite: `${environment.apiOdontologia}/Proveedor/Create`,
  //     mapFn: (result) => result,
  //   });
  // }

  // editarProveedor(data: Proveedores): Observable<Proveedores> {
  //   return this.smartService.update(data.numeroIdeProveedor, data, {
  //     urlRewrite: `${environment.apiOdontologia}/Proveedor/Update`,
  //     mapFn: ({ result }) => result,
  //   });
  // }

  // eliminarProveedor(data: Proveedores): Observable<Proveedores> {
  //   return this.smartService.delete(data.numeroIdeProveedor, {
  //     urlRewrite: `${environment.apiOdontologia}/Proveedor/Delete/${data.numeroIdeProveedor}`,
  //     mapFn: ({ result }) => result,
  //   });
  // }

  //-----botones-----
  onClickEditar(e: any) {
    this.infoProvedores = e.row.data;
    this.isEditing = true;
  }

  // btnBuscar() {
  //   this.obtenerProveedor(this.infoProvedores.numeroIdeProveedor).subscribe(
  //     (proveedor) => {
  //       if (proveedor && proveedor.length > 0) {
  //         this.proveedoresGrid = proveedor;
  //         this.infoProvedores = proveedor[0];
  //         this.isEditing = true;
  //       } else {
  //         this.isEditing = false;
  //         this.alertService.showInfo('No se encontraron registros', 1000);
  //         this.formProveedores.instance.getEditor('nombreProveedor')?.focus();
  //       }
  //     }
  //   );
  // }

  // btnGuardar() {
  //   if (this.isEditing === true) {
  //     this.editarProveedor(this.infoProvedores).subscribe((update) => {
  //       if (update) {
  //       }
  //     });
  //   } else if (this.isEditing === false) {
  //     this.createProveedor(this.infoProvedores).subscribe((create) => {
  //       if (create) {
  //       }
  //     });
  //   }
  // }

  // btnLimpiar() {
  //   this.proveedoresGrid = [];
  //   this.infoProvedores = [];

  //   this.obtenerProveedores().subscribe((proveedores) => {
  //     if (proveedores && proveedores.length > 0) {
  //       this.proveedoresGrid = proveedores;
  //     } else {
  //       this.alertService.showInfo('No se encontraron registros.', 1000);
  //     }
  //   });
  // }

  // btnEliminar() {
  //   this.eliminarProveedor(this.infoProvedores).subscribe((deleted) => {
  //     if (deleted) {
  //       this.btnLimpiar();
  //     } else {
  //       this.alertService.showInfo('No se pudo eliminar el registro.', 1000);
  //     }
  //   });
  // }

  //#endregion

  //#region eventos

  //-----onValueChanged-----
  onValueChangedNit(e: any) {
    if (e.value) {
      this.infoProvedores.numeroIdeProveedor = e.value;
    } else {
      this.infoProvedores.numeroIdeProveedor = '';
    }
  }
  onValueChangedNombre(e: any) {
    if (e.value) {
      this.infoProvedores.nombreProveedor = e.value;
    } else {
      this.infoProvedores.nombreProveedor = '';
    }
  }
  onValueChangedDireccion(e: any) {
    if (e.value) {
      this.infoProvedores.direccionProveedor = e.value;
    } else {
      this.infoProvedores.direccionProveedor = '';
    }
  }
  onValueChangedTelefono(e: any) {
    if (e.value) {
      this.infoProvedores.telefonoProveedor = e.value;
    } else {
      this.infoProvedores.telefonoProveedor = '';
    }
  }
  onValueChangedContacto(e: any) {
    if (e.value) {
      this.infoProvedores.contactoProveedor = e.value;
    } else {
      this.infoProvedores.contactoProveedor = '';
    }
  }
  onValueChangedEmail(e: any) {
    if (e.value) {
      this.infoProvedores.emailProveedor = e.value;
    } else {
      this.infoProvedores.emailProveedor = '';
    }
  }

  //-----onEnterKey-----
  onEnterKeyNit(e: any) {
    if (this.infoProvedores.numeroIdeProveedor === '') {
      this.formProveedores.instance.getEditor('nombreProveedor')?.focus();
    }
    // else {
    //   this.obtenerProveedor(this.infoProvedores.numeroIdeProveedor).subscribe(
    //     (proveedor) => {
    //       if (proveedor && proveedor.length > 0) {
    //         this.proveedoresGrid = proveedor;
    //         this.infoProvedores = proveedor[0];
    //         this.isEditing = true;
    //       } else {
    //         this.isEditing = false;
    //         this.alertService.showInfo('Rellena todos los campos', 1000);
    //         this.formProveedores.instance.getEditor('nombreProveedor')?.focus();
    //       }
    //     }
    //   );
    // }
  }

  onEnterKeyNombre(e: any) {
    this.formProveedores.instance.getEditor('direccionProveedor')?.focus();
  }

  onEnterKeyDireccion(e: any) {
    this.formProveedores.instance.getEditor('telefonoProveedor')?.focus();
  }

  onEnterKeyTelefono(e: any) {
    this.formProveedores.instance.getEditor('contactoProveedor')?.focus();
  }

  onEnterKeyContacto(e: any) {
    this.formProveedores.instance.getEditor('emailProveedor')?.focus();
  }

  onEnterKeyEmail(e: any) {
    this.formProveedores.instance.getEditor('observacion')?.focus();
  }

  onEnterKeyObservacion(e: any) {
    // this.btnGuardar();
  }

  // seleccionar grid -> proveedores
  onSelectionChangedProveedor(e: any) {
    if (e && e.selectedRowsData.length > 0) {
      this.infoProvedores = e.selectedRowsData[0];
      this.isEditing = true;
    }
  }

  //color de grid
  onCellPrepared(e: any) {
    if (e.rowType === 'header') {
      e.cellElement.style.background = '#009688d9';
      e.cellElement.style.color = '#fff';
    }
  }

  //toolbar
  onItemClick(e: any) {
    switch (e.itemIndex) {
      case 0:
        break;
    }
  }

  //formato de peso
  getFormat(event: any) {
    return event.toLocaleString('es-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    });
  }

  //onFocus dx-texteditor-input
  onFocus(e: any) {
    e.element.querySelector('.dx-texteditor-input').select();
  }

  //#endregion
}
