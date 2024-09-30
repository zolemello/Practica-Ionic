import { Component } from '@angular/core';
// ESTE SE COPIO EN LISTA.SERVICE.TS
//import { AlertController, ToastController } from '@ionic/angular';
import { ListaService } from '../services/lista.service';
import { CommonModule } from '@angular/common';
import { Lista } from '../models/lista.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  constructor(
    // ESTOS DOS TAMBIEN SE PASARON A LISTA.SERVICE.TS
    //public alertController:AlertController,
    //public toastController:ToastController,
    public listaService:ListaService
  ) {}

  /**
 * @function AgregarLista
 * @description La función será ejecutada cuando el usuario haga click en el botón Agregar
 * Muestra una alerta donde solicita el nombre de la lista
 */

  async AgregarLista() {
   // let alerta = await this.alertController.create(
      let alerta = await this.listaService.alertController.create({
    header: "Crea una nueva lista",
    inputs: [
    {
    type: "text",
    name: "titulo",
    placeholder: "Como se llama esta lista?"
    }
    ],
    buttons: [
      {
      text: "Cancelar",
      role: "cancel"
      },
      {
      text: "Crear Lista",
      handler: (data:any)=> {
     // console.log(data);
     //this.validarInput(data);
    // let esValido: boolean = this.validarInput(data);
    let esValido: boolean = this.listaService.validarInput(data);
 if (esValido){
 //this.listaService.crearLista(data.titulo);
 let creadaOk = this.listaService.crearLista(data.titulo);
 if(creadaOk) { //Se verifica si la variable tiene un valor, es decir, que fue creada
 //this.presentToast('Lista creada correctamente!');
 this.listaService.presentToast('Lista creada correctamente!');

 }

 }
      }
      }
      ]
     
    })
    await alerta.present();
    console.log('Hola Alert!');
    }

    /*
    DESDE ACA SE PEGO EN LISTA.SERVICE.TS
    validarInput(input: any):boolean {
      if(input && input.titulo) {
      return true;
     // console.log('Debe ingresar un valor');
     }
      
      this.presentToast('Debe ingresar un valor');
     return false; }

     async presentToast(mensage:string) {
      let toast = await this.toastController.create({
      message: mensage,
      duration: 2000
      });
      toast.present();
      }
      HASTA ACA SE PEGO EN LISTA.SERVICE.TS
      */ 


      // AGREGAR Y ELIMINAR LISTAS
  // ESTAS TAMBIEN VAN PARA LISTA.SERVIE.TS
  /*
      editarLista(listaItem: Lista) {
        this.listaService.eliminarLista(listaItem);
        console.log("Editar lista:", listaItem);
        }
        eliminarLista(listaItem: Lista) {
          this.EditarLista(listaItem);
        //console.log("Eliminar lista:", listaItem);
        }

        async EditarLista(lista: Lista) {
          let alerta = await this.alertController.create({
          header: "Editar lista",
          inputs: [
          {
          type: "text",
          name: "titulo",
          placeholder: "Ingresar nuevo nombre de la lista",
          value: lista.titulo
          }
          ],
          buttons: [
          {
          text: "Cancelar",
          role: "cancel"
             },
                {
                text: "Editar",
                handler: (data:any)=> {
                let esValido: boolean = this.validarInput(data);
                if (esValido){
                lista.titulo = data.titulo,
                this.listaService.editarLista(lista);
                this.presentToast('Lista editada correctamente!');
                }
                }
                }
                ]
                    })
                  await alerta.present();
                  }
*/
       
  
}
