import { enablePromise, openDatabase, SQLiteDatabase } from 'react-native-sqlite-storage';
import { DatabaseScripts as SqlLiteScripts } from '../Database/Database';

export class DataStoreService {


    constructor(dbName) {
        this.scripts = new SqlLiteScripts();
        this.databaseName = dbName;
        enablePromise(true);
        openDatabase({ name: 'GmJournal.db', location: 'default' })
            .then(connection => {
                this.db = connection;
                this.Pages = new Pages(this.db);
                console.log('initialized db connetion');
            })
            .catch(err => console.error('failed to open connection to database:' + err));
    }

    async createDatabase() {
        try {
            let query = this.scripts.createMigrationHistory;
            let result = await this.db.executeSql(query);
            console.log('Created Migration history table:' + result);

            query = this.scripts.createPages;
            result = await this.db.executeSql(query);
            console.log('Created Page table:' + result);

            query = this.scripts.createImage;
            result = await this.db.executeSql(query);
            console.log('Created Image table:' + result);

            query = this.scripts.createNote;
            result = await this.db.executeSql(query);
            console.log('Created Note table:' + result);

            query = this.scripts.createTable;
            result = await this.db.executeSql(query);
            console.log('Created Table table:' + result);

            query = this.scripts.createDrawing;
            result = await this.db.executeSql(query);
            console.log('Created Drawing table:' + result);

            query = this.scripts.createPin;
            result = await this.db.executeSql(query);
            console.log('Created Pin table:' + result);

            query = this.scripts.createPostIt;
            result = await this.db.executeSql(query);
            console.log('Created PostIt table:' + result);

            query = this.scripts.createIndexes;
            result = await this.db.executeSql(query);
            console.log('Created Indexes:' + result);

            query = this.scripts.seedInitData;
            result = await this.db.executeSql(query);
            console.log('Created Seeded initial Data:' + result);

        } catch (err) {
            console.log('DbCreation failed:' + err);
        }
    };


};

class Pages {
    constructor(connection) {
        this.db = connection;
    }


    async create(pageData) {
        try {
            query = `INSERT INTO pages (parentId,title,color,icon) VALUES (${pageData.parentId},'${pageData.title}','${pageData.color}','${pageData.icon}');`;
            const result = await this.db.executeSql(query);
            console.log('successully Inserted row at index ' + result[0]?.insertId);
            return result[0]?.insertId;
        } catch (err) {
            console.log('fail:' + err);
        }
    }
    async getById(id) {
        try {

            const results = await this.db.executeSql(`SELECT id,parentId,title,color,Icon FROM pages WHERE id = ${id}`);
            console.log(results[0].rows.item(0));
            return results[0].rows.item(0);

        } catch (error) {

            console.error(`fail:${error}`);
            throw error;
        }
    };

    async getAll() {
        try {

            const results = await this.db.executeSql('SELECT id,parentId,title,color,Icon FROM pages');
            const pages = [];
            for (let i = 0; i < results[0].rows.length; i++) {
                pages.push(results[0].rows.item(i));
            }
            return pages;

        } catch (error) {

            console.error(`fail:${error}`);
            throw error;
        }
    };
}



