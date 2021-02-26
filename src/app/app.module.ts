import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContenidoComponent } from './componentes/contenido/contenido.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { NuestraOfertaComponent } from './componentes/nuestra-oferta/nuestra-oferta.component';
import { BlogComponent } from './componentes/blog/blog.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { MenuComponent } from './componentes/shared/menu/menu.component';
import { FooterComponent } from './componentes/shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ContenidoComponent,
    InicioComponent,
    AcercaDeComponent,
    NuestraOfertaComponent,
    BlogComponent,
    ContactoComponent,
    MenuComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
