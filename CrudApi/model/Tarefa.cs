using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;


namespace model
{
    public class Tarefa
    {
 [System.ComponentModel.DataAnnotations.Key]
        public int TarefaId { get; set; }
        public string Titulo  { get; set; }
        public string Descricao  { get; set; }
        public bool feito {get; set ;}
    }
}