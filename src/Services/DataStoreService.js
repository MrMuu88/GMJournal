import { enablePromise, openDatabase, SQLiteDatabase } from 'react-native-sqlite-storage';
import { SQLiteScripts } from '../Database/SQLiteScripts';
import { Pages } from '../Database/Page';

export class DataStoreService {
    Pages = null;

    constructor(dbName) {
        this.scripts = new SQLiteScripts();
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