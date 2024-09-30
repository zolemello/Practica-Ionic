
import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../models/lista.model';

@Pipe({
  name: 'filtroLista',
 // standalone: true
 pure: false
})
export class FiltroListaPipe implements PipeTransform {

  /*transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  } */

    
    transform(listas: Lista[], tipo: string){
      let lista:any[] = [];
      switch(tipo) {
      case 'por hacer':
      lista = listas.filter((itemLista)=> itemLista.completada == false && itemLista.item.filter((itemActividad)=>
     itemActividad.completado == true).length == 0);
      break;
      case "haciendo":
        // Listas que no están completadas y tienen al menos una actividad completada
        return listas.filter(lista =>
          !lista.completada && lista.item.some(actividad => actividad.completado)
        );
   // LE CAMBIE ESTE PORQUE SI NO NO ANDABA
     /*  case 'haciendo':
      lista = listas.filter((itemLista)=> itemLista.completada == false && itemLista.item.filter((itemActividad)=>
     itemActividad.completado == true).length > 0); */ 
      break;
 case 'terminado':
 lista = listas.filter((itemLista)=> itemLista.completada == true);
 break;
}
 return lista;
}
     

} 


