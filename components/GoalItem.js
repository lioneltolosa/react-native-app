import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const GoalItem = props => {
    return (
        <TouchableOpacity activeOpacity={.2} onPress={props.onDelete.bind(this, props.id)}>
            <View style={styles.listItem}>
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#CCC',
        borderColor: 'black',
        borderWidth: 1
    }
});

export default GoalItem;