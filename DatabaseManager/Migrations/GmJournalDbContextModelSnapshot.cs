﻿// <auto-generated />
using System;
using DatabaseManager;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace DatabaseManager.Migrations
{
    [DbContext(typeof(GmJournalDbContext))]
    partial class GmJournalDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "7.0.17");

            modelBuilder.Entity("DatabaseManager.Models.Drawing", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Color")
                        .IsRequired()
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT")
                        .HasDefaultValue("#000000");

                    b.Property<int>("ImageId")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Shape")
                        .HasColumnType("TEXT");

                    b.Property<int>("Xcord")
                        .HasColumnType("INTEGER");

                    b.Property<int>("Ycord")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.HasIndex("ImageId");

                    b.ToTable("Drawing");
                });

            modelBuilder.Entity("DatabaseManager.Models.Image", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Color")
                        .IsRequired()
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT")
                        .HasDefaultValue("#000000");

                    b.Property<string>("FileName")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Icon")
                        .HasColumnType("TEXT");

                    b.Property<int>("PageId")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Uri")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("PageId");

                    b.ToTable("Image");
                });

            modelBuilder.Entity("DatabaseManager.Models.Note", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Color")
                        .IsRequired()
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT")
                        .HasDefaultValue("#000000");

                    b.Property<string>("Icon")
                        .HasColumnType("TEXT");

                    b.Property<int>("PageId")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Text")
                        .HasColumnType("TEXT");

                    b.Property<string>("Title")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("PageId");

                    b.ToTable("Note");
                });

            modelBuilder.Entity("DatabaseManager.Models.Page", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Color")
                        .IsRequired()
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT")
                        .HasDefaultValue("#000000");

                    b.Property<string>("Icon")
                        .HasColumnType("TEXT");

                    b.Property<int?>("ParentId")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Title")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("ParentId");

                    b.ToTable("Pages");
                });

            modelBuilder.Entity("DatabaseManager.Models.Pin", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Color")
                        .IsRequired()
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT")
                        .HasDefaultValue("#000000");

                    b.Property<string>("Icon")
                        .HasColumnType("TEXT");

                    b.Property<int>("ImageId")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Shape")
                        .HasColumnType("TEXT");

                    b.Property<int>("Xcord")
                        .HasColumnType("INTEGER");

                    b.Property<int>("Ycord")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.HasIndex("ImageId");

                    b.ToTable("Pin");
                });

            modelBuilder.Entity("DatabaseManager.Models.PostIt", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Color")
                        .IsRequired()
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT")
                        .HasDefaultValue("#000000");

                    b.Property<int>("ImageId")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Text")
                        .HasColumnType("TEXT");

                    b.Property<int>("Xcord")
                        .HasColumnType("INTEGER");

                    b.Property<int>("Ycord")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.HasIndex("ImageId");

                    b.ToTable("PostIt");
                });

            modelBuilder.Entity("DatabaseManager.Models.Table", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Color")
                        .IsRequired()
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT")
                        .HasDefaultValue("#000000");

                    b.Property<string>("ColumnAlign")
                        .HasColumnType("TEXT");

                    b.Property<string>("ColumnSizes")
                        .HasColumnType("TEXT");

                    b.Property<int>("Columns")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER")
                        .HasDefaultValue(2);

                    b.Property<string>("Data")
                        .HasColumnType("TEXT");

                    b.Property<string>("Icon")
                        .HasColumnType("TEXT");

                    b.Property<int>("PageId")
                        .HasColumnType("INTEGER");

                    b.Property<string>("RowAlign")
                        .HasColumnType("TEXT");

                    b.Property<string>("RowSizes")
                        .HasColumnType("TEXT");

                    b.Property<int>("Rows")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER")
                        .HasDefaultValue(2);

                    b.HasKey("Id");

                    b.HasIndex("PageId");

                    b.ToTable("Table");
                });

            modelBuilder.Entity("DatabaseManager.Models.Drawing", b =>
                {
                    b.HasOne("DatabaseManager.Models.Image", "Image")
                        .WithMany("Drawings")
                        .HasForeignKey("ImageId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Image");
                });

            modelBuilder.Entity("DatabaseManager.Models.Image", b =>
                {
                    b.HasOne("DatabaseManager.Models.Page", "Page")
                        .WithMany("Images")
                        .HasForeignKey("PageId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Page");
                });

            modelBuilder.Entity("DatabaseManager.Models.Note", b =>
                {
                    b.HasOne("DatabaseManager.Models.Page", "Page")
                        .WithMany("Notes")
                        .HasForeignKey("PageId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Page");
                });

            modelBuilder.Entity("DatabaseManager.Models.Page", b =>
                {
                    b.HasOne("DatabaseManager.Models.Page", "Parent")
                        .WithMany("SubPages")
                        .HasForeignKey("ParentId");

                    b.Navigation("Parent");
                });

            modelBuilder.Entity("DatabaseManager.Models.Pin", b =>
                {
                    b.HasOne("DatabaseManager.Models.Image", "Image")
                        .WithMany("Pins")
                        .HasForeignKey("ImageId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Image");
                });

            modelBuilder.Entity("DatabaseManager.Models.PostIt", b =>
                {
                    b.HasOne("DatabaseManager.Models.Image", "Image")
                        .WithMany("PostIt")
                        .HasForeignKey("ImageId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Image");
                });

            modelBuilder.Entity("DatabaseManager.Models.Table", b =>
                {
                    b.HasOne("DatabaseManager.Models.Page", "Page")
                        .WithMany("Tables")
                        .HasForeignKey("PageId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Page");
                });

            modelBuilder.Entity("DatabaseManager.Models.Image", b =>
                {
                    b.Navigation("Drawings");

                    b.Navigation("Pins");

                    b.Navigation("PostIt");
                });

            modelBuilder.Entity("DatabaseManager.Models.Page", b =>
                {
                    b.Navigation("Images");

                    b.Navigation("Notes");

                    b.Navigation("SubPages");

                    b.Navigation("Tables");
                });
#pragma warning restore 612, 618
        }
    }
}
