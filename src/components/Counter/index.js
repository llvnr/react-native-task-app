import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Counter({title, nb}) {
    return (
        <View>
            <Text style={styles.nb}>{nb}</Text>
            <Text style={styles.title}>{title}</Text>  
        </View>
    )
}

const styles = StyleSheet.create({
    nb: {
        fontWeight: "bold",
        fontSize: 20
    },
    title: {
        fontWeight: "bold",
        color: "grey",
        fontSize: 20
    }
})