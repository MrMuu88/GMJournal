import { View, Text } from "react-native";
import { AddButtons } from "../Components/AddButtons";
import { Note } from "../Components/Note";
import { useState } from "react";
import { ScrollView } from "react-native";
import { Subpage } from "../Components/Subpage";
import { ImageDisplay } from "../Components/ImageDisplay";
import DocumentPicker from 'react-native-document-picker';

export const JournalPage = () => {
    const journalData = require("../MockData/data.json");

    const [entries, setEntries] = useState(journalData.entries);

    const createSubPage = () => {
        return {
            type: "subpage",
            id: 2,
            title: "this is the child title",
            icon: "http:/logo.svg"
        };
    };

    const createNote = () => {
        return {
            id: 10,
            type: "note",
            title: "from FABS",
            text: "added by the \"add note\" FAB"
        };

    };

    const createTable = () => {
        Alert.alert("creating a new table");
        return null;
    };

    const createImage = async () => {
        try {
            const result = await DocumentPicker.pickSingle();
            console.log(JSON.stringify(result));

            return {
                type: "image",
                title: result.name,
                uri: result.uri
            };
        } catch (err) {
            console.warn(err);
            return null;
        }
    };

    const createLink = () => {
        Alert.alert("creating a new link");
        return null;
    };

    const createNewEntry = (command) => {
        let newEntry = null;
        switch (command) {
            case "subpage":
                newEntry = createSubPage();
                break;
            case "note":
                newEntry = createNote();
                break;
            case "image":
                newEntry = createImage();
                break;
            case "table":
                newEntry = createTable();
                break;
            case "link":
                newEntry = createLink();
                break;
        }
        if (newEntry !== null) {
            setEntries([...entries, newEntry]);
        }
    };

    const deleteEntry = (data) => {
        console.log("data to be deleted:" + data)
        setEntries(entries.filter(e => e !== data));
    };

    const entryToComponent = (data) => {
        switch (data.type) {
            case "note":
                return <Note note={data} onDelete={() => { setEntries(entries.filter(e => e !== data)) }} />
            case "image":
                return <ImageDisplay imageData={data} onDelete={() => { setEntries(entries.filter(e => e !== data)) }} />
            case "subpage":
                return;
        }
    };

    return (
        <View style={{ flexGrow: 1 }}>
            <ScrollView style={{ flex: 1, margin: 10 }}>
                {
                    entries.map(e => entryToComponent(e))
                }
                {
                    entries.filter(e => e.type === "subpage").map(sp => <Subpage subPage={sp} onDelete={(data) => deleteEntry(data)} />)
                }
                <Text style={{ height: 100 }}>{/* ez itt direct üres hogy legyen egy kis üres tér a lista alján*/}</Text>
            </ScrollView>
            <AddButtons onUpdate={(command) => { createNewEntry(command); }} />
        </View>
    );
}