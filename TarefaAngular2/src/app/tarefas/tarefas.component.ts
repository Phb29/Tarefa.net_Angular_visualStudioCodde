import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Tarefa } from '../Tarefa'; 
import { TarefaService } from '../tarefa.service';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css']
})
export class TarefasComponent implements OnInit {
formulario:any;
tituloFormulario?:string;
tarefa?:Tarefa[]
terefas?:string;
tarefaId?:number;
conteudoModal?:string;


visibilidadeTabela: boolean = true;
  visibilidadeFormulario: boolean = false; 
modalRef?:BsModalRef


constructor(private tarefaService:TarefaService ,private modalService:BsModalService){}
ngOnInit(): void {
this.tarefaService.PegarTodos().subscribe(resultado=>{
this.tarefa=resultado
})


    } 
EnviarFormulario(): void {
  const tarefa: Tarefa = this.formulario.value;

  if (tarefa.tarefaId !== undefined && tarefa.tarefaId > 0) {
    this.tarefaService.AtualizarTarefa(tarefa).subscribe((resultado) => {
      this.visibilidadeFormulario = false;
      this.visibilidadeTabela = true;
      alert('Tarefa atualizada com sucesso ')
      this.tarefaService.PegarTodos().subscribe((registros) => {
        this.tarefa = registros
      });
    });
  } else {
    this.tarefaService.SalvarTarefa(tarefa).subscribe((resultado) => {
      this.visibilidadeFormulario = false;
      this.visibilidadeTabela = true;
      alert('Tarefa inserida com sucesso ')
      this.tarefaService.PegarTodos().subscribe((registros) => {
        this.tarefa = registros
      });
    });
  }

   
}
ExibirFormularioCadastro(): void {

    this.visibilidadeTabela = false;
    this.visibilidadeFormulario = true;
    this.tituloFormulario = 'Nova Tarefa'; 
      this.formulario= new FormGroup({
Titulo: new FormControl(null),
Descricao:new FormControl(null),
feito:new FormControl(false),
    });
  }
Voltar(): void {
    this.visibilidadeTabela = true;
    this.visibilidadeFormulario = false;
  }
ExibirFormularioAtualizacao(tarefaId:any): void {
    this.visibilidadeTabela = false;
    this.visibilidadeFormulario = true;

    this.tarefaService.PegarPeloId(tarefaId).subscribe((resultado) => {
      this.tituloFormulario = `Atualizar ${resultado.titulo} ${resultado.descricao}`;

      this.formulario = new FormGroup({
        tarefaId: new FormControl(resultado.tarefaId),
        Titulo: new FormControl(resultado.titulo),
        Descricao: new FormControl(resultado.descricao),
        feito: new FormControl(resultado.feito),
 
      });
    });
  }
ExibirConfirmacaoExclusao(tarefaId:any, terefas:any, conteudoModal: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(conteudoModal);
    this.tarefaId = tarefaId;
    this.terefas = terefas;
  }
ExcluirPessoa(tarefaId:any){
    this.tarefaService.ExcluirTarefa(tarefaId).subscribe(resultado => {
      
      alert('Pessoa excluída com sucesso');
      this.tarefaService.PegarTodos().subscribe(registros => {
        this.tarefa = registros;
      });
    });
  }
}