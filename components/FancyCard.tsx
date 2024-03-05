import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FancyCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>Trending places</Text>
      <View style={[styles.card,styles.cardElevated]}>
        <Image 
         source={{
          uri : "https://www.tajmahal.gov.in/images/nightview.jpg" 
         }}

         style={styles.cardImage}
        />
        <View style={styles.cardBody}>
           <Text style={styles.cardTitle}>Taj Mahal</Text>
           <Text style={styles.cardLabel}>Pink City, jaipur</Text>
           <Text style={styles.cardDescription}>
           The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor, Shah Jahan (reigned from 1628 to 1658), to house the tomb of his favourite wife, Mumtaz Mahal.
           </Text>
           <Text style={styles.cardFooter}>12 minutes away...</Text>
        </View>
      </View>
    </View>
  )
}

export default FancyCard

const styles = StyleSheet.create({
    headingText : {
        fontSize : 24,
        fontWeight : "bold",
        paddingHorizontal : 8
    },
    card : {
      width : 330,
      height : 380,
      borderRadius : 12,
      marginVertical : 12,
      marginHorizontal : 16
    },
    cardElevated : {
      backgroundColor : '#FFFFFF',
      // overflow : 'hidden',
      elevation : 3,
      shadowOffset : {
        width : 1,
        height : 1
      }
    },
    cardImage : {
     height : 180,
     width : "100%",
     marginBottom : 8,
     borderTopLeftRadius : 8,
     borderTopRightRadius : 8
    },
    cardBody : {
       flex : 1,
       flexGrow : 1,
       paddingHorizontal : 12
    },
    cardTitle : {
      color : '#000000',
      fontSize : 22,
      fontWeight : 'bold',
      marginBottom : 6
    },
    cardLabel : {
      color : '#000000',
      fontSize : 16,
      marginBottom : 6
    },
    cardDescription : {
      color : '#242E2B',
      fontSize:12,
      marginBottom:12,
      marginTop : 6,
      flexShrink:1
    },
    cardFooter : {
      color : '#000000',
      marginBottom : 10
    }
})