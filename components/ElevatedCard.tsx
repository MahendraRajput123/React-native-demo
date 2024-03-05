import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ElevatedCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCard</Text>

      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>me</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>to</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>see</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>more...</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>Np...</Text>
        </View>
      </ScrollView>
    </View>
  )
}

export default ElevatedCard

const styles = StyleSheet.create({
    headingText :{
        fontSize : 24,
        fontWeight : "bold",
        marginHorizontal : 10
      },
      container : {
        padding : 8
      },
      card : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        width : 100,
        height : 100,
        borderRadius : 4,
        margin : 8
      },
      cardElevated : {
        backgroundColor : '#CAD5E2',
        elevation : 4,
        shadowOffset : {
            width : 1,
            height : 1
        },
        shadowColor : 'red',
        shadowOpacity : 0.8,
        shadowRadius : 20
      }
})