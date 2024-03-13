using DatabaseManager.Models;
using Microsoft.EntityFrameworkCore;

namespace DatabaseManager {
    public class GmJournalDbContext : DbContext {
        public DbSet<Page> Pages { get; set; }

        public GmJournalDbContext()
        {
            
        }

        public GmJournalDbContext(DbContextOptions<GmJournalDbContext> options) : base(options) { }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite("Data Source=C:\\Users\\simont\\source\\sajat\\GMJournal\\GMJournal.db;");

            base.OnConfiguring(optionsBuilder);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Page>().Property(p => p.Color).HasDefaultValue("#000000");
            modelBuilder.Entity<Note>().Property(p => p.Color).HasDefaultValue("#000000");
            modelBuilder.Entity<Image>().Property(p => p.Color).HasDefaultValue("#000000");
            modelBuilder.Entity<Pin>().Property(p => p.Color).HasDefaultValue("#000000");
            modelBuilder.Entity<PostIt>().Property(p => p.Color).HasDefaultValue("#000000");
            modelBuilder.Entity<Drawing>().Property(p => p.Color).HasDefaultValue("#000000");

            modelBuilder.Entity<Table>().Property(p => p.Color).HasDefaultValue("#000000");
            modelBuilder.Entity<Table>().Property(p => p.Columns).HasDefaultValue(2);
            modelBuilder.Entity<Table>().Property(p => p.Rows).HasDefaultValue(2);

        }
    }
}
