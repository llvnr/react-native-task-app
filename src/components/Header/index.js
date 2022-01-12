import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const days = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"]

const months = [
    "janvier",
    "février",
    "mars",
    "avril",
    "mai",
    "juin",
    "juillet",
    "aout",
    "septembre",
    "octobre",
    "novembre",
    "décembre"
]

export default function Header() {

    const date = new Date()

    return (
        <View style={styles.container}>
          <Text style={styles.date}>{`${days[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]}`}</Text>  
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        paddingLeft: 20,
        paddingTop: 20
    },
    date: {
        fontSize: 26,
        fontWeight: "bold"
    }
});
