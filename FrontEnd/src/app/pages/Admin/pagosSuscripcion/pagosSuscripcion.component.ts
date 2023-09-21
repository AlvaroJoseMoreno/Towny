import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { Place } from 'src/app/models/place.model';
import { PlaceService } from 'src/app/services/place.service';
import { UserService } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment';
import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort, Sort} from '@angular/material/sort';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

import Swal from 'sweetalert2';

import {
  Action,
  ButtonEvent,
  ButtonType,
  Image,
  ImageModalEvent,
  ModalGalleryService,
  ModalGalleryRef,
  ModalGalleryConfig,
  ModalLibConfig
} from '@ks89/angular-modal-gallery';
import { DomSanitizer } from '@angular/platform-browser';
import { PuebloService } from '../../../services/pueblo.service';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import jsPDF from 'jspdf';
@Component({
  selector: 'app-pagosSuscripcion',
  templateUrl: './pagosSuscripcion.component.html',
  styleUrls: ['./pagosSuscripcion.component.css']
})
export class PagosSuscripcionComponent implements OnInit {

  public loading = true;

  public totalplaces = 0;
  public actual_position = 0;
  public records_per_page = environment.records_per_page;

  private ultimaBusqueda = '';
  public listaLugares: Place[] = [];
  public listaUsuarios: Object[] = [];
  public listadoRegister: Object[] = [];

  displayedColumns: string[] = ['usuario','fechapago','finicio','ffin','cantidad','mes','ver', 'descargar', 'cif'];
  dataSource = new MatTableDataSource([]);

  data = Object.values(this.listadoRegister);

  selection = new SelectionModel(true, []);


  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

    /** Selects all rows if they are not all selected; otherwise clear selection. */
    masterToggle() {
      if (this.isAllSelected()) {
        this.selection.clear();
        return;
      }

      this.selection.select(...this.dataSource.data);
    }

    /** The label for the checkbox on the passed row */
    checkboxLabel(row?): string {
      if (!row) {
        return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
      }
      return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
    }

  constructor( private placeservice: PlaceService,
    private userservice: UserService,
    private domSanitizer: DomSanitizer,
    private modalGalleryService: ModalGalleryService,
    private puebloservice: PuebloService,
    public dialog: MatDialog) {
  }

@ViewChild(MatSort) sort: MatSort;
@ViewChild(MatPaginator, {static : true}) paginator: MatPaginator;

private subjectKeyUp = new Subject<any>();

openDetails(uid: string){

  this.placeservice.getPlace(uid).subscribe((res:any) => {

    const place = res['places'];

    this.puebloservice.cargarPueblo(place.town).subscribe((res:any) => {

      const lugar = res['towns'];


        const user =  this.userservice;

        this.dialog.open(PlaceDetails, {
          data: {
            place,
            lugar,
            user,
            service: this,
          },
        });
    });

  }, (err) => {
    Swal.fire({icon: 'error', title: 'Oops...', text: 'No se pudo completar la acción, vuelva a intentarlo',});
    //console.warn('error:', err);
    this.loading = false;
  });

}

  ngOnInit(): void {

    this.dataSource.paginator = this.paginator;
    this.paginator._intl.itemsPerPageLabel = 'Items por página';
    this.paginator._intl.firstPageLabel = 'Primera página';
    this.paginator._intl.lastPageLabel = 'Última página';
    this.paginator._intl.nextPageLabel = 'Siguiente página';
    this.paginator._intl.previousPageLabel = 'Página Anterior';

    this.paginator._intl.getRangeLabel = (page: number, pageSize: number, length: number) => {
      const start = page * pageSize + 1;
      let end = (page + 1) * pageSize;

      if(end > length)
        end = length


      return `${start} - ${end} de ${length}`;
    };

    this.dataSource.sort = this.sort;
    this.getPlaces(this.ultimaBusqueda);
    this.subjectKeyUp
      .pipe(debounceTime(500))
      .subscribe((d) => {
        this.getPlaces(d);
      });
  }

  onSearch($event: any) {
    const value = $event.target.value;
    this.subjectKeyUp.next(value);
  }

  getPlaces( textoBuscar: string ) {
    this.ultimaBusqueda = textoBuscar;
    this.loading = true;
    this.userservice.getUsers(this.actual_position, textoBuscar)
      .subscribe( (res:any) => {
        // Lo que nos llega lo asignamos a lista usuarios para renderizar la tabla
        // Comprobamos si estamos en un apágina vacia, si es así entonces retrocedemos una página si se puede
        if (res['allusers'].length === 0) {
          if (this.actual_position > 0) {
            this.actual_position = this.actual_position - this.records_per_page;
            if (this.actual_position < 0) { this.actual_position = 0};
            this.getPlaces(this.ultimaBusqueda);
          } else {
            this.listaLugares = [];
            this.totalplaces = 0;
          }
        } else {
          this.listaUsuarios = res['allusers'];
          var info = new Object;

          for(var p=0;p<this.listaUsuarios.length;p++){
            if(this.listaUsuarios[p]['rol']== "ROL_COMMERCE"){
              if(this.listaUsuarios[p]['bills'].length > 0){
                var bills= this.listaUsuarios[p]['bills'];
                for(var k=0;k<bills.length;k++){
                  var bill = this.listaUsuarios[p]['bills'][k];
                  var total = bill.split(" ");              
                  info['usuario']= this.listaUsuarios[p]['name'];
                  info['cif']= this.listaUsuarios[p]['CIF'];
                  var fecha=total[0];
                  fecha = total[0].substr(0,2)+"/"+total[0].substr(2,2)+"/"+total[0].substr(4,4);
                  info['fechapago']= fecha;
                  info['finicio']= total[2];
                  info['ffin']= total[3];
                  info['mes']= k+1;
                  info['cantidad']= total[4];
                  this.listadoRegister.push(info);
                  info = new Object;
                }
              }
            }
          }

          this.dataSource = new MatTableDataSource(this.listadoRegister);
          this.dataSource.sort = this.sort;
          this.dataSource.sortingDataAccessor = (item, property) => {
            switch (property) {
               default:
                if (typeof item[property] === 'string') {
                  return item[property].normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase('en-US');
                }
                return item[property];
            }
          };
          this.dataSource.paginator = this.paginator;

          this.data = Object.values(this.listadoRegister);

        }



        this.loading = false;
      }, (err) => {
        Swal.fire({icon: 'error', title: 'Oops...', text: err.error.msg || 'No se pudo completar la acción, vuelva a intentarlo',});
        //console.warn('error:', err);
        this.loading = false;
      });
  }


  openpdf(usuario: string, cif: string,fechapago: string, fechainicio: string, fechafin: string, cantidad: string){
    let pdf = new jsPDF('p','mm','a4');
 
     var img = "https://i.postimg.cc/BbzczfjW/towny.png";
 
     pdf.addImage(img, 'png', 13, 3, 60, 40);
 
     pdf.setFontSize(20);
 
     pdf.text("Factura de suscripción", 125,20);
 
     pdf.setFontSize(15);
     pdf.text("Cliente: "+ usuario, 129,35);
     pdf.text("CIF: "+ cif, 129,42);
     pdf.text("Fecha emisión: "+ fechapago, 129,49);
 
     pdf.setFontSize(12);
     pdf.text("Cantidad", 10,82);
     pdf.text("Concepto", 47,82);
     pdf.text("Fecha de inicio", 87,82);
     pdf.text("Fecha de fin", 127,82);
     pdf.text("Precio/ud.", 157,82);
     pdf.text("Total", 183,82);
 
 
     
     pdf.text("1", 16, 105);
     pdf.text("Suscripción mensual Tonwy", 29,105);
     pdf.text(fechainicio, 89,105);
     pdf.text(fechafin, 127,105);
     pdf.text(cantidad+" €", 162,105);
     pdf.text(cantidad+ " €", 186,105);
 
 
     pdf.text("+ IVA(21%)", 175,115);
 
     pdf.text("TOTAL: 24,20 €", 173, 127);
 
     pdf.roundedRect(5, 70, 200, 50, 3, 3);
     pdf.roundedRect(170, 120, 35, 10, 3, 3);
 
     pdf.line(5, 90, 205, 90);
 
     window.open(URL.createObjectURL(pdf.output("blob")));
   }
 
   downpdf(usuario: string, cif: string,fechapago: string, fechainicio: string, fechafin: string, cantidad: string){
     let pdf = new jsPDF('p','mm','a4');
 
     var img = "https://i.postimg.cc/BbzczfjW/towny.png";
 
     pdf.addImage(img, 'png', 13, 3, 60, 40);
 
     pdf.setFontSize(20);
 
     pdf.text("Factura de suscripción", 125,20);
 
     pdf.setFontSize(15);
     pdf.text("Cliente: "+ usuario, 129,35);
     pdf.text("CIF: "+ cif, 129,42);
     pdf.text("Fecha emisión: "+ fechapago, 129,49);
 
     pdf.setFontSize(12);
     pdf.text("Cantidad", 10,82);
     pdf.text("Concepto", 47,82);
     pdf.text("Fecha de inicio", 87,82);
     pdf.text("Fecha de fin", 127,82);
     pdf.text("Precio/ud.", 157,82);
     pdf.text("Total", 183,82);
 
 
     
     pdf.text("1", 16, 105);
     pdf.text("Suscripción mensual Tonwy", 29,105);
     pdf.text(fechainicio, 89,105);
     pdf.text(fechafin, 127,105);
     pdf.text(cantidad+ " €", 162,105);
     pdf.text(cantidad+ " €", 186,105);
 
 
     pdf.text("+ IVA(21%)", 175,115);
 
     pdf.text("TOTAL: 24,20 €", 173, 127);
 
     pdf.roundedRect(5, 70, 200, 50, 3, 3);
     pdf.roundedRect(170, 120, 35, 10, 3, 3);
 
     pdf.line(5, 90, 205, 90);
  
      pdf.save("facturatowny.pdf");
    }
 


  changePage( page: number ){
    page = (page < 0 ? 0 : page);
    this.actual_position = ((page - 1) * this.records_per_page >=0 ? (page - 1) * this.records_per_page : 0);
    this.getPlaces(this.ultimaBusqueda);
  }

  deletePlace( uid: string, name: string) {
    if (this.userservice.rol !== 'ROL_ADMIN') {
      Swal.fire({icon: 'warning', title: 'Oops...', text: 'No tienes permisos para realizar esta acción',});
      return;
    }

    Swal.fire({
      title: 'Eliminar lugar',
      text: `Al eliminar el lugar ${name} se perderán todos los datos asociados. ¿Desea continuar?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, borrar'
    }).then((result) => {
          if (result.value) {
            this.placeservice.deletePlace(uid)
              .subscribe( resp => {
                this.getPlaces(this.ultimaBusqueda);
              }
              ,(err) =>{
                Swal.fire({icon: 'error', title: 'Oops...', text: err.error.msg || 'No se pudo completar la acción, vuelva a intentarlo',});
              })
          }
      });
  }

  confirmMultiDelete(str:any) {
    if (this.userservice.rol !== 'ROL_ADMIN') {
      Swal.fire({icon: 'warning', title: 'Oops...', text: 'No tienes permisos para realizar esta acción',});
      return;
    }
    Swal.fire({
      title: 'Eliminar usuarios',
      text: `¿Estás seguro de que quieres eliminar los usuarios seleccionados?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, borrar',
      allowOutsideClick: false
    }).then((result) => {
          if (result.value) {
            this.multiDeletePlace(str);
          }
      });
  }

  multiDeletePlace(str:any){
    if(!str._selected){
      return;
    }
    if(str._selected.length == 0){
      return;
    }
    if(str._selected.length > 0){
      for(let i = 0; i < str._selected.length;i++){
        this.placeservice.deletePlace(str._selected[i].uid)
              .subscribe( resp => {
                if(i == str._selected.length - 1){
                  Swal.fire({
                    title: 'Lugares eliminados', text: `Has eliminado los lugares seleccionados con éxito`, icon: 'success',
                    allowOutsideClick: false, confirmButtonColor: '#3085d6', confirmButtonText: 'Aceptar'
                  });
                  this.getPlaces(this.ultimaBusqueda);
                  this.selection.clear()
                }
              }
              ,(err) =>{
                Swal.fire({icon: 'error', title: 'Oops...', text: 'No se pudo completar la acción, vuelva a intentarlo',});
              })
      }
    }

  }

  loadPictures(id:any ){


    this.placeservice.getPlace(id).subscribe((res:any) =>{

      if(res.ok){
        var place = res['places'];
        var imagenesList= place['pictures'];
        var images:Image[]=[];

        for (let index = 0; index < imagenesList.length; index++) {
          const element = imagenesList[index];
          var namefilenew= this.domSanitizer.bypassSecurityTrustResourceUrl( environment.picturesDir+'/fotoplace/'+element);
        images.push(new Image(index,{img:namefilenew}));

        }

        const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
          id: 22,
          images: images,
          currentImage: images[0],
          libConfig: {
            currentImageConfig: {
              downloadable: true,
              visible: true,
              size: {
                width: '150px',
                height: 'auto'
              }
            }


        }
        } as ModalGalleryConfig) as ModalGalleryRef;


      }
    }, (err) => {

      const msgerror = err.error.msg || 'No se pudo completar la acción, vuelva a intentarlo';
      if(msgerror !== 'No hay imágenes en el array')
        Swal.fire({icon: 'error', title: 'Oops...', text: msgerror,});
    });

  }

}

export class PlaceDetails {

  constructor(@Inject(MAT_DIALOG_DATA) public data) {}

}
