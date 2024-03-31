import { View, Button, Text, Alert, StyleSheet } from "react-native";

export const DatabaseHandlerPage = () => {

    const createPage = async () => {}; 
    const readPage = async () => {};   
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