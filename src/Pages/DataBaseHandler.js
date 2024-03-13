import { View, Button, Text, Alert } from "react-native";
import { DataStoreService } from '../Services/DataStoreService';

export const DatabaseHandlerPage = () => {
    const db = new DataStoreService("GmJournal.db");

    const createDatabase = async () => { await db.createDatabase(); };
    const createPage = async () => { await db.Pages.create({ parentId: null, title: "asdasd", color: '#000000', icon: null }); };
    const readPage = async () => { await db.Pages.getById(1); };

    return (
        <View style={{ flex: 1 }}>
            <Button style={{ padding: 10, margin: 10 }} title="Create database" onPress={() => createDatabase()} />
            <Button style={{ padding: 10, margin: 10 }} title="Create page in DB" onPress={() => createPage()} />
            <Button style={{ padding: 10, margin: 10 }} title="get pages" onPress={() => readPage()} />
        </View>
    );
};