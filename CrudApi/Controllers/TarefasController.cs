using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using model;

namespace CrudApi.Controllers
{
    [ApiController]
    [Route ("api/[controller]")]
    public class TarefasController : ControllerBase
    {
        private readonly Contexo _contexto;
    
        public TarefasController (Contexo contexto) {
            _contexto = contexto;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Tarefa>>> PegarTodosAsync () {
            return await _contexto.Tarefas.ToListAsync ();
        }

        [HttpGet ("{TarefaId}")]
        public async Task<ActionResult<Tarefa>> PegarTarefasPeloIdAsync (int TarefaId) {
           Tarefa tarefa = await _contexto.Tarefas.FindAsync (TarefaId);

            if (tarefa == null)
                return NotFound ();

            return tarefa;
        }

        [HttpPost]
        public async Task<ActionResult<Tarefa>> SalvarTarefasAsync (Tarefa tarefa) {
            await _contexto.Tarefas.AddAsync (tarefa);
            await _contexto.SaveChangesAsync ();

            return tarefa;
        }

        [HttpPut]
        public async Task<ActionResult> AtualizarTarefaAsync (Tarefa tarefa) {
            _contexto.Tarefas.Update (tarefa);
            await _contexto.SaveChangesAsync ();

            return Ok ();
        }

        [HttpDelete ("{TarefaId}")]
        public async Task<ActionResult> ExcluirTarefaAsync (int TarefaId) {
            Tarefa tarefa = await _contexto.Tarefas.FindAsync (TarefaId);
            if (tarefa == null)
                return NotFound ();

            _contexto.Remove (tarefa);
            await _contexto.SaveChangesAsync ();
            return Ok ();
        }
    }
}
