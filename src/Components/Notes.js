import { View, Text } from "react-native";
import { Card } from '@rneui/themed';
import { SimpleMenu } from "./SimpleMenu";

export const Notes = () => {

    return (
        <Card>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                {/*ide kell egy icon a név elé*/}
                <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 24 }}>This is the Note Title</Text>
                <SimpleMenu />
                {/* id még kell egy ... gyors menu gomb: move, copy, delete, configure? */}
                {/* ha ügyesen meg tudom oldani az edit-et, akkor lehet nem is kell a configure*/}
            </View>
            <Card.Divider />
            <View>
                <Text style={{ color: 'black', fontSize: 16 }}>This is the Content of the note</Text>
            </View>
        </Card>
    );
};
