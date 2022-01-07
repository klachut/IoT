import {
    Text,
    View,
    TouchableOpacity,
    Modal,
    Button,
    StyleSheet,
    Pressable,
    Alert,
    TextInput,
    FlatList
} from "react-native";
import React, {useEffect, useState} from 'react';
import Icon from "react-native-vector-icons/FontAwesome";
import Device from "./Device";
import AsyncStorage from '@react-native-async-storage/async-storage';


function devicesScreen({}) {
    const [modalVisible, setModalVisible] = useState(false);
    const [name, setName] = useState('');
    const [place, setPlace] = useState('');
    const [command, setCommand] = useState('');
    const [devices, setDevices] = useState([]);



    const addDevice = async () => {
        const device = {id: name, place: place}
        const updatedDevices = [...devices, device];
        setDevices(updatedDevices)
        setModalVisible(!modalVisible)
        return await AsyncStorage.setItem('devices', JSON.stringify(updatedDevices))



    }

    const findDevice = async () => {
       const result =  await AsyncStorage.getItem('devices');
        console.log(result)
       if(result !== null)
           setDevices((JSON).parse(result))


    }

    useEffect(() => {
        findDevice();
        }

    )

    function showVal() {
        console.log(name, place)
        addDevice().then(r => r)
    }

    return (

        <View style={{flex: 1, backgroundColor: "#baf7c6"}}>
            <View style={{flex:2, flexDirection: "column", justifyContent: "space-around"}}>
                <FlatList data={devices}
                          keyExtractor={item => item.id.toString()}
                          renderItem={({item}) => <Device item={item}/>}
                />
            </View>
            <View style={styles.positionPlus}>
                <TouchableOpacity style={styles.openModal} onPress={() => setModalVisible(!modalVisible)} >
                    <View >
                        <Icon name={'plus'} size={30} color={'#BA2DD2'}
                        />
                    </View>
                </TouchableOpacity>
            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}>

                <View style={styles.modalView}>
                    <View style={styles.inputView}>

                        <TextInput
                            style={styles.textInputMargin}
                            placeholder="Name"
                            onChangeText={name => setName(name)}
                            defaultValue={name}
                        />
                        <TextInput
                            style={styles.textInput}
                            placeholder="Place"
                            onChangeText={place => setPlace(place)}
                            defaultValue={place}
                        />
                        <TextInput
                            style={styles.textInput}
                            placeholder="Command"
                            onChangeText={command => setCommand(command)}
                            defaultValue={command}
                        />
                        <View style={styles.buttonStyles}>
                        <Pressable
                            style={styles.pressableStyle}

                            onPress={() => setModalVisible(!modalVisible) }
                        >
                            <Text style={styles.textStyle}>Cancel</Text>
                        </Pressable>
                            <Pressable
                                style={styles.pressableStyle}
                                onPress={() => addDevice()}
                            >
                                <Text style={styles.textStyle}>Add device</Text>
                            </Pressable>
                        </View>

                    </View>
                </View>
            </Modal>
        </View>

    );
}

const styles = StyleSheet.create({
    openModal: {
        backgroundColor: '#45d22d', borderRadius: 15, width: 50, height: 50, justifyContent: "center", alignItems: "center"
    },
    positionPlus: {
        flex: 1, justifyContent: 'flex-end', alignItems:"flex-end", padding: 25
    },
    modalView: {
        flex:1, backgroundColor: "#baf7c6"
    },
    inputView: {
        flex: 3, flexDirection: "column", width: "90%", alignSelf: "center", padding: 20
    },
    textInput: {
        height: 60, backgroundColor: "ivory", marginBottom: 20, borderRadius: 15
    },
    textInputMargin: {
        height: 60, backgroundColor: "ivory", marginBottom: 20, borderRadius: 15, marginTop: 100
    },
    buttonStyles: {
        flex: 1, justifyContent:"space-between", padding: 50, alignContent: "center", flexDirection: "row", fontFamily: "Merriweather-Black"
    },
    textStyle: {
        color: "white",  textAlign: "center", fontFamily: "Merriweather-Black"
    },
    pressableStyle: {
        width: 100, backgroundColor: "#BA2DD2", height: 50, justifyContent: "center", borderRadius: 6,
    }

});
export default devicesScreen;