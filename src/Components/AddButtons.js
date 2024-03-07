import { View } from "react-native";
import { useState } from "react";
import { FAB } from "@rneui/themed";

export const AddButtons = () => {
    const [fabsVisible, setFabsVisible] = useState(false);

    return (
        <View>
            <FAB style={{ margin: 25 }} onPress={() => setFabsVisible(!fabsVisible)} visible={true} placement="right" icon={{ name: 'add', color: 'white' }} color="green" size="medium" />
            <FAB style={{ marginRight: 32, marginBottom: 90 }} visible={fabsVisible} placement="right" icon={{ name: 'link', color: 'white' }} color="purple" size="small" title="link" />
            <FAB style={{ marginRight: 32, marginBottom: 140 }} visible={fabsVisible} placement="right" icon={{ name: 'note', color: 'white' }} color="darkgreen" size="small" title="Note" />
            <FAB style={{ marginRight: 32, marginBottom: 190 }} visible={fabsVisible} placement="right" icon={{ name: 'view-list', color: 'white' }} color="blue" size="small" title="table" />
            <FAB style={{ marginRight: 32, marginBottom: 240 }} visible={fabsVisible} placement="right" icon={{ name: 'image', color: 'white' }} color="orange" size="small" title="image" />
            <FAB style={{ marginRight: 32, marginBottom: 290 }} visible={fabsVisible} placement="right" icon={{ name: 'map', color: 'white' }} color="crimson" size="small" title="map" />
            <FAB style={{ marginRight: 32, marginBottom: 340 }} visible={fabsVisible} placement="right" icon={{ name: 'layers', color: 'white' }} color="crimson" size="small" title="subpage" />
        </View>
    );
}

