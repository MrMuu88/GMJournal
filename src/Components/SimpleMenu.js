//https://www.npmjs.com/package/react-native-popup-menu

import { Alert, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Menu, MenuOptions, MenuOption, MenuTrigger } from "react-native-popup-menu";
import { Icon } from "@rneui/themed";

export const SimpleMenu = ({ onDelete }) => {
    return (
        <Menu>
            <MenuTrigger customStyles={{
            }}>
                <Icon type="material-community" name="dots-vertical" color="#000000" />
            </MenuTrigger>
            <MenuOptions>
                <MenuOption onSelect={() => Alert.alert("save")} style={style.MenuItem}>
                    <Icon name="edit" color="black" />
                    <Text style={style.menuText}>Edit</Text>
                </MenuOption>
                <MenuOption onSelect={() => Alert.alert("save")} style={style.MenuItem}>
                    <Icon name="content-copy" type="material-community" color="black" />
                    <Text style={style.menuText}>Copy</Text>
                </MenuOption>
                <MenuOption onSelect={() => Alert.alert("save")} style={style.MenuItem}>
                    <Icon name="cut" type="font-awesome-5" color="black" />
                    <Text style={style.menuText}>Cut</Text>
                </MenuOption>
                <MenuOption onSelect={() => onDelete()} style={style.MenuItem}>
                    <Icon name="delete" color="black" type="material-community" />
                    <Text style={style.menuText}>Delete</Text>
                </MenuOption>

            </MenuOptions>
        </Menu>
    );
};

const style = StyleSheet.create({
    MenuItem: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row'
    },
    menuText: {
        color: 'black'
    }
});