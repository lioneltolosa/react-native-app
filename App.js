import React, {useState, useReducer} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList} from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
    const [courseGoal, setCourseGoal] = useState([]);
    const [isAddMode, setIsAddMode] = useState(false);
    
    const addGoalHandler = (goalTitle) => {
        //console.log(enteredGoal)
        //setCourseGoal(currentGoals => [...currentGoals, enteredGoal])
        setCourseGoal(currentGoals => 
            [...currentGoals, { id: Math.random().toString(), value: goalTitle}])
        setIsAddMode(false);
        setIsAddMode('')
    }

    const removeGoalHandler = (goalId) => {
        setCourseGoal(currentGoals => {
            return currentGoals.filter((goal) => goal.id !== goalId)
        })
    }

    const cancelHandler = () => {
        setIsAddMode(false);
    }

    return (
        <View style={styles.screan}>
            <Button title="Add New Goal" onPress={() => setIsAddMode(true)}/>
            <GoalInput 
                visible={isAddMode} 
                onAddGoal={addGoalHandler} 
                onCancel={cancelHandler} />

            {/* <ScrollView>
                {courseGoal.map( (goal) => 
                    <View key={goal} style={styles.listItem}>
                        <Text>{goal}</Text>
                    </View>
                )}
            </ScrollView> */}
            <FlatList
                keyExtractor={(item, index) => item.id }
                data={courseGoal} 
                renderItem={itemData => 
                    <GoalItem 
                        id={itemData.item.id} 
                        onDelete={removeGoalHandler}
                        title={itemData.item.value} />}>
            </FlatList>
        </View>
    );
}

const styles = StyleSheet.create({
    screan: {
        padding: 50
    }
});
