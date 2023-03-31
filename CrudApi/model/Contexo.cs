using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace model
{
    public class Contexo : DbContext
    {
        public DbSet<Tarefa> Tarefas { get; set; }

        public Contexo(DbContextOptions<Contexo> opcoes) : base(opcoes)
        {
        }
    }
}
