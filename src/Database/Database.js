export class DatabaseScripts {

    createMigrationHistory = `
        CREATE TABLE IF NOT EXISTS "__EFMigrationsHistory" (
            "MigrationId" TEXT NOT NULL CONSTRAINT "PK___EFMigrationsHistory" PRIMARY KEY,
            "ProductVersion" TEXT NOT NULL
        );`

    createPages = `
        CREATE TABLE IF NOT EXISTS "Pages" (
            "Id" INTEGER NOT NULL CONSTRAINT "PK_Pages" PRIMARY KEY AUTOINCREMENT,
            "Title" TEXT NOT NULL,
            "Color" TEXT NOT NULL DEFAULT '#000000',
            "Icon" TEXT NULL,
            "ParentId" INTEGER NULL,
            CONSTRAINT "FK_Pages_Pages_ParentId" FOREIGN KEY ("ParentId") REFERENCES "Pages" ("Id")
        );`;

    createImage = `
        CREATE TABLE IF NOT EXISTS "Image" (
            "Id" INTEGER NOT NULL CONSTRAINT "PK_Image" PRIMARY KEY AUTOINCREMENT,
            "FileName" TEXT NOT NULL,
            "Uri" TEXT NOT NULL,
            "Color" TEXT NOT NULL DEFAULT '#000000',
            "Icon" TEXT NULL,
            "PageId" INTEGER NOT NULL,
            CONSTRAINT "FK_Image_Pages_PageId" FOREIGN KEY ("PageId") REFERENCES "Pages" ("Id") ON DELETE CASCADE
        );`;

    createNote = `
        CREATE TABLE IF NOT EXISTS "Note"(
            "Id" INTEGER NOT NULL CONSTRAINT "PK_Note" PRIMARY KEY AUTOINCREMENT,
            "Title" TEXT NOT NULL,
            "Text" TEXT NULL,
            "Icon" TEXT NULL,
            "Color" TEXT NOT NULL DEFAULT '#000000',
            "PageId" INTEGER NOT NULL,
            CONSTRAINT "FK_Note_Pages_PageId" FOREIGN KEY("PageId") REFERENCES "Pages"("Id") ON DELETE CASCADE
        );`;

    createTable = `
        CREATE TABLE IF NOT EXISTS "Table"(
            "Id" INTEGER NOT NULL CONSTRAINT "PK_Table" PRIMARY KEY AUTOINCREMENT,
            "Color" TEXT NOT NULL DEFAULT '#000000',
            "Icon" TEXT NULL,
            "Columns" INTEGER NOT NULL DEFAULT 2,
            "Rows" INTEGER NOT NULL DEFAULT 2,
            "ColumnSizes" TEXT NULL,
            "RowSizes" TEXT NULL,
            "ColumnAlign" TEXT NULL,
            "RowAlign" TEXT NULL,
            "Data" TEXT NULL,
            "PageId" INTEGER NOT NULL,
            CONSTRAINT "FK_Table_Pages_PageId" FOREIGN KEY("PageId") REFERENCES "Pages"("Id") ON DELETE CASCADE
        );`;

    createDrawing = `
        CREATE TABLE IF NOT EXISTS "Drawing"(
            "Id" INTEGER NOT NULL CONSTRAINT "PK_Drawing" PRIMARY KEY AUTOINCREMENT,
            "Xcord" INTEGER NOT NULL,
            "Ycord" INTEGER NOT NULL,
            "Color" TEXT NOT NULL DEFAULT '#000000',
            "Shape" TEXT NULL,
            "ImageId" INTEGER NOT NULL,
            CONSTRAINT "FK_Drawing_Image_ImageId" FOREIGN KEY("ImageId") REFERENCES "Image"("Id") ON DELETE CASCADE
        );`;

    createPin = `
        CREATE TABLE IF NOT EXISTS "Pin"(
            "Id" INTEGER NOT NULL CONSTRAINT "PK_Pin" PRIMARY KEY AUTOINCREMENT,
            "Xcord" INTEGER NOT NULL,
            "Ycord" INTEGER NOT NULL,
            "Icon" TEXT NULL,
            "Color" TEXT NOT NULL DEFAULT '#000000',
            "Shape" TEXT NULL,
            "ImageId" INTEGER NOT NULL,
            CONSTRAINT "FK_Pin_Image_ImageId" FOREIGN KEY("ImageId") REFERENCES "Image"("Id") ON DELETE CASCADE
        );`;

    createPostIt = `
        CREATE TABLE IF NOT EXISTS "PostIt"(
            "Id" INTEGER NOT NULL CONSTRAINT "PK_PostIt" PRIMARY KEY AUTOINCREMENT,
            "Xcord" INTEGER NOT NULL,
            "Ycord" INTEGER NOT NULL,
            "Color" TEXT NOT NULL DEFAULT '#000000',
            "Text" TEXT NULL,
            "ImageId" INTEGER NOT NULL,
            CONSTRAINT "FK_PostIt_Image_ImageId" FOREIGN KEY("ImageId") REFERENCES "Image"("Id") ON DELETE CASCADE
        );`;


    createIndexes = `
        CREATE INDEX "IX_Drawing_ImageId" ON "Drawing"("ImageId");    
        CREATE INDEX "IX_Image_PageId" ON "Image"("PageId");
        CREATE INDEX "IX_Note_PageId" ON "Note"("PageId");
        CREATE INDEX "IX_Pages_ParentId" ON "Pages"("ParentId");
        CREATE INDEX "IX_Pin_ImageId" ON "Pin"("ImageId");
        CREATE INDEX "IX_PostIt_ImageId" ON "PostIt"("ImageId");
        CREATE INDEX "IX_Table_PageId" ON "Table"("PageId");
    `;

    seedInitData = `
        INSERT INTO "__EFMigrationsHistory"("MigrationId", "ProductVersion")
        VALUES('20240313112440_init', '7.0.17');
    `;
}