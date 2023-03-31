import { TarefaService } from './tarefa.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TarefasComponent } from './tarefas/tarefas.component';
import { FlexLayoutModule } from '@angular/flex-layout'; 


@NgModule({
  declarations: [AppComponent, TarefasComponent],
  imports: [
FormsModule,
FlexLayoutModule,
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),

  ],
  providers: [HttpClientModule, TarefaService],
  bootstrap: [AppComponent],
})
export class AppModule {}
