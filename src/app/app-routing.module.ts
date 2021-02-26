import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContenidoComponent } from './componentes/contenido/contenido.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { NuestraOfertaComponent } from './componentes/nuestra-oferta/nuestra-oferta.component';
import { BlogComponent } from './componentes/blog/blog.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';

const routes: Routes = [
  { path: 'home', component: ContenidoComponent,
    children: [
      { path: 'inicio', component: InicioComponent },
      { path: 'acerca-de', component: AcercaDeComponent },
      { path: 'nuestra-oferta', component: NuestraOfertaComponent },
      { path: 'blog', component: BlogComponent },
      { path: 'contacto', component: ContactoComponent }
    ]
  },
  { path: '', pathMatch: 'full', redirectTo: '/home/inicio' },
  { path: '**', pathMatch: 'full', redirectTo: '/home/inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
