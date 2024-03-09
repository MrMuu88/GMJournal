import { View, Text, Image } from "react-native";
import { AddButtons } from "../Components/AddButtons";
import { Note } from "../Components/Note";
import { useState } from "react";
import { ScrollView } from "react-native";
import { Subpage } from "../Components/Subpage";
import { ImageDisplay } from "../Components/ImageDisplay";

export const JournalPage = () => {
    const [journalData, setJournalData] = useState(require("../MockData/data.json"));

    const [entries, setEntries] = useState(journalData.entries);

    const toComponent = (data) => {
        switch (data.type) {
            case "note":
                return <Note note={data} />
            case "image":
                return <ImageDisplay imageData={data} />
            case "subpage":
                return;

        }
    };

    return (
        <View style={{ flexGrow: 1 }}>
            <ScrollView style={{ flex: 1, margin: 10 }}>
                {
                    entries.map(e => toComponent(e))
                }
                {
                    entries.filter(e => e.type === "subpage").map(sp => <Subpage subPage={sp} />)
                }
                <Text style={{ height: 100 }}>{/* ez itt direct üres hogy legyen egy kis üres tér a lista alján*/}</Text>
            </ScrollView>
            <AddButtons onUpdate={(data) => { console.log(JSON.stringify(data)); setEntries([...entries, data]); }} />
        </View>
    );
}