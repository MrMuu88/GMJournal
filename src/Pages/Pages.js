
import { View, Text, Alert } from "react-native";
import { AddButtons } from "../Components/AddButtons";
import { useState } from "react";
import { FAB } from "@rneui/themed";


export const Page1 = () => {
    const [fabsVisible, setFabsVisible] = useState(false);

    const createLink = () => { Alert.alert("creating a new link"); };
    const createNote = () => { Alert.alert("creating a new note"); };
    const createTable = () => { Alert.alert("creating a new table"); };
    const createImage = () => { Alert.alert("creating a new image"); };
    const createSubPage = () => { Alert.alert("creating a new subpage"); };

    return (
        <View style={{ flexGrow: 1 }}>
            <Text style={{ color: 'black' }}>This is the first page</Text>
            <FAB onPress={() => setFabsVisible(!fabsVisible)} style={{ margin: 25 }} visible={true} placement="right" icon={{ name: 'add', color: 'white' }} color="green" size="medium" />
            <FAB onPress={() => { setFabsVisible(false); createLink() }} style={{ marginRight: 25, marginBottom: 90 }} visible={fabsVisible} placement="right" icon={{ name: 'link', color: 'white' }} color="purple" size="small" title="link" />
            <FAB onPress={() => { setFabsVisible(false); createNote() }} style={{ marginRight: 25, marginBottom: 140 }} visible={fabsVisible} placement="right" icon={{ name: 'note', color: 'white' }} color="darkgreen" size="small" title="note" />
            <FAB onPress={() => { setFabsVisible(false); createTable() }} style={{ marginRight: 25, marginBottom: 190 }} visible={fabsVisible} placement="right" icon={{ name: 'view-list', color: 'white' }} color="blue" size="small" title="table" />
            <FAB onPress={() => { setFabsVisible(false); createImage() }} style={{ marginRight: 25, marginBottom: 240 }} visible={fabsVisible} placement="right" icon={{ name: 'image', color: 'white' }} color="orange" size="small" title="image" />
            <FAB onPress={() => { setFabsVisible(false); createSubPage() }} style={{ marginRight: 25, marginBottom: 290 }} visible={fabsVisible} placement="right" icon={{ name: 'layers', color: 'white' }} color="crimson" size="small" title="subpage" />
        </View>
    );
};

export const Page2 = () => {
    return (
        <View style={{ flexGrow: 1 }}>
            <Text style={{ color: 'black' }}>This is the second page</Text>
            <AddButtons />
        </View>
    );
};



