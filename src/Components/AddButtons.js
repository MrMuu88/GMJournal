import { View, Alert, StyleSheet } from "react-native";
import { useState } from "react";
import { FAB } from "@rneui/themed";
import DocumentPicker from "react-native-document-picker";

export const AddButtons = ({ onUpdate }) => {
    const [fabsVisible, setFabsVisible] = useState(false);

    return (
        <View style={{ position: 'absolute', bottom: 50, right: 30, alignItems: "flex-end" }}>
            <FAB style={styles.fab} onPress={() => { setFabsVisible(false); onUpdate("subpage") }} visible={fabsVisible} icon={{ type: "ionicon", name: 'enter-outline', color: 'white' }} color="crimson" size="small" title="subpage" />
            <FAB style={styles.fab} onPress={() => { setFabsVisible(false); onUpdate("note") }} visible={fabsVisible} icon={{ name: 'note', color: 'white' }} color="darkgreen" size="small" title="note" />
            <FAB style={styles.fab} onPress={() => { setFabsVisible(false); onUpdate("table") }} visible={fabsVisible} icon={{ name: 'view-list', color: 'white' }} color="blue" size="small" title="table" />
            <FAB style={styles.fab} onPress={() => { setFabsVisible(false); onUpdate("image") }} visible={fabsVisible} icon={{ name: 'image', color: 'white' }} color="orange" size="small" title="image" />
            <FAB style={styles.fab} onPress={() => { setFabsVisible(false); onUpdate("link") }} visible={fabsVisible} icon={{ name: 'link', color: 'white' }} color="purple" size="small" title="link" />
            <FAB style={styles.fab} onPress={() => setFabsVisible(!fabsVisible)} visible={true} icon={{ name: 'add', color: 'white' }} color="green" size="medium" />
        </View>
    );


}
const styles = StyleSheet.create({
    fab: { padding: 5 }
});
