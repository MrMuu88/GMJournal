export class Pages {
    constructor(connection) {
        this.db = connection;
    }

    async createPage(parentId, data) {
        query = `INSERT INTO pages (parentId,title,color,icon) 
                 VALUES (${parentId},'${data.title}','${data.color}','${data.icon}');`;
        return await this.db.ExecuteInsert(query);
    }

    async createNote(data) {
        query = `INSERT INTO Note (Title, "Text", Icon, Color, PageId) 
                 VALUES('${data.title}', '${data.text}', '${data.icon}', '${data.color}', ${data.pageId});`;
        return await this.db.ExecuteInsert(query);
    }
    async createImage(data) {
        query = `INSERT INTO Image (FileName, Uri, Color, Icon, PageId)
                 VALUES('${data.fileName}', '${data.uri}', '${data.color}', '${data.icon}', ${data.pageId});`;
        return await this.db.ExecuteInsert(query);
    }
    async createTable(data) {
        query = `INSERT INTO "Table" (Color, Icon, Columns, "Rows", ColumnSizes, RowSizes, ColumnAlign, RowAlign, "Data", PageId) 
                 VALUES('${data.color}', '${data.icon}',${data.columns},${data.rows}, '${data.columnSizes}', '${data.rowSizes}', '${data.columnAlign}', '${data.rowAlign}', '${data.data}', ${data.pageId});`;
        return await this.db.ExecuteInsert(query);
    }

    async updateNote(noteId, data) { }
    async updateImage(imageId, data) { }
    async updateTable(tableId, data) { }


    async deleteNote(id) { }
    async deleteImage(id) { }
    async deleteTable(id) { }


    async getPageById(id) {
        try {
            const results = await this.db.executeSql(`SELECT * FROM Pages WHERE id = ${id}`);
            const page = results[0].rows.item(0);

            const subPages = await this.getSubPages(id);
            console.log("subpages:" + JSON.stringify(subPages));
            const notes = await this.getNotes(id);
            console.log("Notes:" + JSON.stringify(notes));

            const images = await this.getImages(id);
            console.log("Images:" + JSON.stringify(images));

            const tables = await this.getTables(id);
            console.log("Tables:" + JSON.stringify(tables));

            page.entries = [...subPages, ...notes, ...images, ...tables];

            console.log("Page:" + JSON.stringify(page));

        } catch (error) {
            console.error(`fail:${JSON.stringify(error)}`);
            throw error;
        }
    }

    async getSubPages(pageId) {
        const query = `SELECT 'subpage' as type,* FROM Pages WHERE ParentId = ${pageId}`;
        return await this.executeQuery(query);
    }

    async getNotes(pageId) {
        const query = `SELECT 'note' as type,*  FROM Note WHERE PageId = ${pageId}`;
        return this.executeQuery(query);
    }

    async getImages(pageId) {
        const query = `SELECT 'image' as type,* FROM Image WHERE PageId = ${pageId}`;
        return await this.executeQuery(query);
    }

    async getTables(pageId) {
        const query = `SELECT 'table' as type,* FROM "Table" WHERE PageId = ${pageId}`;
        return await this.executeQuery(query);
    }

    async executeQuery(query) {
        try {
            const result = await this.db.executeSql(query);
            const answer = [];
            for (let i = 0; i < result[0].rows.length; i++) {
                answer.push(result[0].rows.item(i));
            }
            return answer;
        } catch (err) {
            console.error(`failed to execute query:${query}`);
            throw err;
        }
    }

    async ExecuteInsert(query) {
        try {
            const result = await this.db.executeSql(query);
            console.log('successully Inserted row at index ' + result[0]?.insertId);
            return result[0]?.insertId;
        } catch (err) {
            console.log('failed to execute Insert:' + err);
            throw err;
        }
    }
}