import { Component, OnInit } from '@angular/core';
import { CriticosService } from '../../services/criticos.service';
import { Critico } from '../../interfaces/critico.interface';
import { formatDate } from '@angular/common';
import { Color } from '../../interfaces/color.interface';
import { Ruta } from '../../interfaces/ruta.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criticos-page',
  templateUrl: './criticos-page.component.html',
  styleUrls: ['./criticos-page.component.css']
})
export class CriticosPageComponent implements OnInit {

  public intervalId?: any;

  public criticosList: Critico[] = [];

  public temp: any[] = [];

  public colsList: any[] = [];

  public groups: any[] = [];

  // Colores
  public colores: Color[] = [
    { ruta: '1B', color: '#01cdff' },
    { ruta: '2B', color: '#33cc33' },
    { ruta: '3B', color: '#921212' },
    { ruta: '1A', color: '#fffe01' },
    { ruta: '2A', color: '#ff99cc' },
    { ruta: '2Z', color: '#ffcdfe' },
    { ruta: '1JP', color: '#67cdff' },
    { ruta: '3JP', color: '#67cdff' },
    { ruta: 'KD', color: '#3130a1' },
    { ruta: 'KC', color: '#ff9900' },
    { ruta: '2JP', color: '#dae5f0' },
    { ruta: 'IJ', color: '#cc01fe' },
    { ruta: 'IZ', color: '#ff0066' },
    { ruta: 'OJ', color: '#fe9998' },
    { ruta: 'OZ', color: '#0101ff' },
    { ruta: '2J', color: '#ff67fe' },
    { ruta: '3J', color: '#98cc01' },
    { ruta: '1J', color: '#d6cce0' },
    { ruta: '1Z', color: '#fec001' },
    { ruta: '3Z', color: '#de9832' },
    { ruta: 'SCRAP', color: '#fe0001' },

    { ruta: 'RBJ', color: '#fec001' },
  ];

  public rutasList: Ruta[] = [];

  constructor(
    private router: Router,
    private criticosService: CriticosService,
  ) {
    this.sync();
  }

  ngOnInit(): void {

    this.intervalId = null;

    this.intervalId = setInterval(() => {

      // Valida si está en la pantalla de criticos para poder iniciar el interval
      if( this.router.url == '/dashboard/criticos' ) {
        this.colsList = [];
        this.sync();
      }

    }, 300000)

  }

  sync() {

    this.criticosService.getCriticos().subscribe(
      ({ data, rutas }) => {

        this.rutasList = rutas;

        this.rutasList.forEach(element => {
          const color = this.colores.find((color) => color.ruta == element.ruta);
          element.color = color?.color;
        });

        for (let index = 0; index < data.length; index++) {
          const element = data[index];
          // Aplica formato de fecha
          const fechaformatted = formatDate(element.fecha, 'MM/dd/yyyy hh:mm', 'en-US');
          element.fecha = fechaformatted;

          // Realiza la división de columnas para la visualización de los críticos
          if( index % 15 == 0 )
            this.colsList.push( data.slice(index, index + 15) );

            // Asigna el color de la ruta a cada uno
            element.color = this.colores.find((color) => color.ruta == element.ruta);
        }

        this.criticosList = data;

      }
    )

  }

}
