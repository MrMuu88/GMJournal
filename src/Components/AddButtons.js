import { View, Alert, StyleSheet } from "react-native";
import { useState } from "react";
import { FAB } from "@rneui/themed";

export const AddButtons = ({ onUpdate }) => {
    const [fabsVisible, setFabsVisible] = useState(false);

    const createLink = () => { setFabsVisible(false); Alert.alert("creating a new link"); };
    const createNote = () => {
        setFabsVisible(false);
        const newNote = { id: 10, type: "Note", title: "from FABS", text: "added by the \"add note\" FAB" };
        onUpdate(newNote);
    };
    const createTable = () => { setFabsVisible(false); Alert.alert("creating a new table"); };
    const createImage = () => { setFabsVisible(false); Alert.alert("creating a new image"); };
    const createSubPage = () => { setFabsVisible(false); Alert.alert("creating a new subpage"); };

    return (
        <View style={{ position: 'absolute', bottom: 50, right: 30, alignItems: "flex-end" }}>
            <FAB style={styles.fab} onPress={() => createSubPage()} visible={fabsVisible} icon={{ name: 'layers', color: 'white' }} color="crimson" size="small" title="subpage" />
            <FAB style={styles.fab} onPress={() => createNote()} visible={fabsVisible} icon={{ name: 'note', color: 'white' }} color="darkgreen" size="small" title="note" />
            <FAB style={styles.fab} onPress={() => createTable()} visible={fabsVisible} icon={{ name: 'view-list', color: 'white' }} color="blue" size="small" title="table" />
            <FAB style={styles.fab} onPress={() => createImage()} visible={fabsVisible} icon={{ name: 'image', color: 'white' }} color="orange" size="small" title="image" />
            <FAB style={styles.fab} onPress={() => createLink()} visible={fabsVisible} icon={{ name: 'link', color: 'white' }} color="purple" size="small" title="link" />
            <FAB style={styles.fab} onPress={() => setFabsVisible(!fabsVisible)} visible={true} icon={{ name: 'add', color: 'white' }} color="green" size="medium" />
        </View>
    );


}
const styles = StyleSheet.create({
    fab: { padding: 5 }
});
