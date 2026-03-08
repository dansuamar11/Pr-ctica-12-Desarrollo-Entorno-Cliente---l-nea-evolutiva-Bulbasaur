import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-evoluciones-bulbasaur',
  imports: [CommonModule, RouterLink],
  templateUrl: './evoluciones-bulbasaur.html',
  styleUrls: ['./evoluciones-bulbasaur.css'],
})
export class EvolucionesBulbasaur implements OnInit {

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      const id =params.get("id");
      this.cargarDatos(id);
    })  
  }

  descripcion: string = "<b>Bulbasaur</b> <br><br> Tras nacer, crece alimentándose durante un tiempo de los nutrientes que contiene el bulbo de su lomo.";
  img: string = "assets/img/bulbasaur.png";
  pokemon: 'bulbasaur' | 'ivysaur' | 'venusaur' | null = 'bulbasaur';

  cargarDatos(id: string | null){
    if (!id ){
      this.pokemon = 'bulbasaur';
      return;
    }
    let numeroId: number = parseInt(id, 10);
    if(numeroId >= 1 && numeroId <=15){
      this.pokemon = 'bulbasaur';
      return;
    }
    if(numeroId >= 16 && numeroId <=31){
      this.descripcion = "<b>Ivysaur</b> <br><br> Cuanta más luz solar recibe, más aumenta su fuerza y más se desarrolla el capullo que tiene en el lomo.";
      this.img = "assets/img/ivysaur.png";
      this.pokemon = 'ivysaur';

      return;
    }
    if(numeroId >= 32 && numeroId <=100){
      this.descripcion = "<b>Venusaur</b> <br><br> Puede convertir la luz del sol en energía. Por esa razón, es más poderoso en verano.";
      this.img = "assets/img/venusaur.png";
      this.pokemon = 'venusaur';

      return;
    }
    if(numeroId > 100 || numeroId < 1){
      this.descripcion = "El nivel de un Pokémon debe estar entre 1 y 100.";
      this.pokemon = null;
      return;
    }
    
  }

  

}
