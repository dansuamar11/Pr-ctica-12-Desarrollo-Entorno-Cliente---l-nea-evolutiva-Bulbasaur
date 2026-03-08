import { Routes } from '@angular/router';
import { Inicio } from './components/inicio/inicio';
import { EvolucionesBulbasaur } from './components/evoluciones-bulbasaur/evoluciones-bulbasaur';
import { Ivysaur } from './components/ivysaur/ivysaur';
import { Venusaur } from './components/venusaur/venusaur';
import { Error404 } from './components/error404/error404';


export const routes: Routes = [
    {path: "", component: Inicio},
    {path: "bulbasaur", component: EvolucionesBulbasaur},
    {path: "Ivysaur", component: Ivysaur},
    {path: "Venusaur", component: Venusaur},
    {path: "bulbasaur/:id", component: EvolucionesBulbasaur},
    {path: "**", component: Error404}
];
