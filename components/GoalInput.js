import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Button, Modal} from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText)
    }

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput style={styles.textInput} 
                        placeholder='Course Goal' 
                        onChangeText={goalInputHandler}
                        value={enteredGoal}></TextInput>
                <View style={styles.buttons}>
                    <Button title="Cancel" color="red" onPress={props.onCancel} />
                    <Button title="ADD" onPress={addGoalHandler} />
                </View>
                {/* <Button title="ADD" onPress={() => props.onAddGoal(enteredGoal)}></Button> */}
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center'
    },
    textInput: {
        borderBottomColor: 'black', 
        borderBottomWidth: 1,
        width: '80%',
        padding: 5,
        color: 'pink'
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '40%'
    }
});

export default GoalInput;