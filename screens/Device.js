import {Text, View, TouchableOpacity, Modal, Button, StyleSheet, Pressable, Alert, TextInput} from "react-native";
import React, {useEffect, useState} from 'react';

const Device = ({item}) => {
    const {id, place} = item;
    return (
        <View style={{flex: 2, justifyContent: "space-around", padding: 20, backgroundColor: "#ffffec", width: "90%", alignSelf: "center", marginTop: 20, borderRadius: 6 }}>
            <Text style={{fontSize: 25, fontFamily: "Merriweather-Bold", color: "#BA2DD2" }}>{id}</Text>
            <Text style={{fontSize: 15, fontFamily: "Merriweather-Italic", color: "black" }}>{place}</Text>
        </View>
    )
}
export default Device;