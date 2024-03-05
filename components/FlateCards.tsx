import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

const FlateCards = () => {
  return (
    <View>
      <Text style = {style.headingText}>FlateCards</Text>
      <View style = {style.container}>
         <View style = {[style.card, style.cardOne]}>
            <Text>Red</Text>
         </View>
         <View style = {[style.card, style.cardTwo]}>
            <Text>Blue</Text>
         </View>
         <View style={[style.card, style.cardThree]}>
            <Text>Green</Text>
         </View>
         <View style={[style.card, style.cardOne]}>
            <Text>Red</Text>
         </View>
         
      </View>
    </View>
  )
}

export default FlateCards

const style = StyleSheet.create({
  headingText :{
    fontSize : 24,
    fontWeight : "bold",
    marginHorizontal : 10
  },
  container : {
   flex : 1,
   flexDirection : 'row',
   padding : 8
  },
  card : {
   height : 100,
   width : 100,
   borderRadius : 4,
   margin : 8,
   flex : 1,
   justifyContent : "center",
   alignItems : "center"
  },
  cardOne :{
    backgroundColor : '#EF5354'
  },
  cardTwo :{
    backgroundColor : '#50DBB4'
  },
  cardThree :{
    backgroundColor : '#5DA3FA'
  }
})