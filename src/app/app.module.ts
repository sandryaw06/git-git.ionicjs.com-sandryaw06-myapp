import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';



import { PendientesComponent} from '../pages/pendientes/pendientes.component';
import { TerminadosComponent} from '../pages/terminados/terminados.component';
import { verItemsComponent } from '../pages/ver-items/ver-items.component';
import { AddItemComponent } from '../pages/add-item/add-item.component';

import { listaDeseosService } from './services/lista_deseos_service';

import { placeholderPipe } from './pipes/placeholder.pipe';



@NgModule({
  declarations: [
    MyApp,
    verItemsComponent,
    PendientesComponent,
    TerminadosComponent,
    AddItemComponent,
    placeholderPipe,
    TabsPage,


  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PendientesComponent,
    TerminadosComponent,
    verItemsComponent,
    AddItemComponent,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    listaDeseosService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
