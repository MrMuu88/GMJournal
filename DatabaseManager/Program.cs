// See https://aka.ms/new-console-template for more information
using DatabaseManager;
using Microsoft.EntityFrameworkCore;

Console.WriteLine("Hello, World!");

var options = new DbContextOptionsBuilder<GmJournalDbContext>().UseSqlite(@"Data Source=C:\Users\simont\source\sajat\GMJournal\GMJournal.db;Version=3;").Options;
var dbcontext = new GmJournalDbContext(options);