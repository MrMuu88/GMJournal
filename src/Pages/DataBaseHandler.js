import { View, Button, Text, Alert, StyleSheet } from "react-native";
import { DataStoreService } from '../Services/DataStoreService';

export const DatabaseHandlerPage = () => {
    const db = new DataStoreService("GmJournal.db");

    const createPage = async () => { await db.Pages.create(null, { title: "new Page", color: '#000000', icon: null }); };
    const readPage = async () => { await db.Pages.getById(1); };
    const createNote = async () => { };
    const createImage = async () => { };
    const createtable = async () => { };


    return (
        <View style={{ flex: 1 }}>
            <View style={styles.button}><Button color="green" title="Create page in DB" onPress={() => createPage()} /></View>
            <View style={styles.button}><Button title="read page" onPress={() => readPage()} /></View>
            <View style={styles.button}><Button color="green" title="create Note" onPress={() => createNote()} /></View>
            <View style={styles.button}><Button color="green" title="create image" onPress={() => createImage()} /></View>
            <View style={styles.button}><Button color="green" title="create table" onPress={() => createtable()} /></View>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        padding: 10
    },
});