import { View, Text } from "react-native";
import { AddButtons } from "../Components/AddButtons";
import { Notes } from "../Components/Notes";

export const JournalPage = () => {

    return (
        <View style={{ flexGrow: 1 }}>
            <Text style={{ color: 'black' }}>This is the Journal page</Text>
            <Notes />
            <AddButtons />
        </View>
    );
}