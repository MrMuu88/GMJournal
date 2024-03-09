import { View, Text } from "react-native";
import { AddButtons } from "../Components/AddButtons";
import { Note } from "../Components/Note";
import { useState } from "react";
import { Button } from "@rneui/themed";
import { ScrollView } from "react-native";

export const JournalPage = () => {
    const [journalData, setJournalData] = useState(require("../MockData/data.json"));

    const [entries, setEntries] = useState(journalData.entries);

    return (
        <View style={{ flexGrow: 1 }}>
            <ScrollView style={{ flex: 1, backgroundColor: 'plum', margin: 10 }}>
                {
                    entries.filter(e => e.type === "Note").map(e => <Note key={e.id} note={e} />)
                }
            </ScrollView>
            <AddButtons onUpdate={(data) => { console.log(JSON.stringify(data)); setEntries([...entries, data]); }} />
        </View>
    );
}