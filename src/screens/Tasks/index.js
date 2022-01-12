import React, { useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

import { toggleTask, deleteTask } from '../../redux/actions'
import { getTasks } from '../../redux/selectors'

import FloatingBtn from '../../components/FloatingBtn'
import Counter from '../../components/Counter'

import Header from '../../components/Header'
import TaskForm from './TaskForm'
import TaskTile from './TaskTile'

export default function TasksScreens() {

    // Liste de taches
    // State pour garder en mémoire les taches
    const [isFormVisible, setIsFormVisible] = useState()

    const tasks = useSelector(getTasks)
    const dispatch = useDispatch()
    // console.log("ALL TASKS", tasks)

    // asyncStorage permet de stocker les taches dans le téléphone.

    // item = {title: "Hello world !", isCompleted: false}
    const renderItem = ({item}) => {
        return <TaskTile task={item} onUpdateTask={onUpdateTask} onDeleteTask={onDeleteTask} />
    }

    // Ajouter une fonction pour ajouter une tache au state
    // Passer cette fonction à notre formulaire
    // const onAddTask = (title) => {
    //     setTasks([...tasks, {
    //         id: Date.now(),
    //         title,
    //         isCompleted: false
    //     }])
    // }

    const onUpdateTask = (id) => {
        dispatch(toggleTask(id))
    }

    const onDeleteTask = (id) => {
        dispatch(deleteTask(id))
    }

    const _toggleForm = () => {
        setIsFormVisible(!isFormVisible)
    }

    // 2x TasksCounter => props nb & title
    // TasksList => return FlatList => TaskTile

    // Ajouter un bouton flottant => style absolute
    // callback => rendu conditionnel du formulaire (TaskForm)

    return (
        <>
        <FlatList 
            ListHeaderComponent={
            <>
            <Header />
            {isFormVisible && <TaskForm />}
            <View style={styles.containerCounter}>
                <Counter nb={tasks.length} title="Tâches crées" />
                <Counter nb={tasks.filter(t => t.isCompleted === true).length} title="Tâches effectuées" />
            </View>
            </>
            }
            // ListFooterComponent=
            // onEndReached={() => loadData()} = Permet de faire une infinite scroll
            contentContainerStyle={{flexGrow: 1}}
            data={tasks}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderItem}
        />
        <FloatingBtn toggle={_toggleForm} isOpen={isFormVisible} />
        </>
    )
}

const styles = StyleSheet.create({
    containerCounter: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
        paddingHorizontal: 20
    }
})