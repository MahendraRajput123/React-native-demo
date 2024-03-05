import { Image, StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native'
import React from 'react'

export default function ActionCard() {

  const openWebsiteInBrowser = (url) => {
    // Use the Linking.openURL() method to open the URL in a browser
    Linking.openURL(url)
      .catch(error => {
        console.error('Error opening URL:', error);
      });
  };

  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingCointainer}>
          <Text style={styles.headerText}>
            What's new in Javascript 21 - ES12
          </Text>
        </View>

        <Image 
          source={{
            uri : 'https://as2.ftcdn.net/v2/jpg/01/77/47/67/1000_F_177476718_VWfYMWCzK32bfPI308wZljGHvAUYSJcn.jpg'
          }}

          style={styles.cardImage}
        />

        <View style={styles.bodyContainer}>
          <Text numberOfLines={3}>
            Just like every year, Javascript brings in new features. this year
            Javascript is brings 4 new features, which are almost in 
            projuction rollout. i won't be wasting much more time and directly
            jump to code with easy with to understand example.
          </Text>
        </View>
        
        <View style={styles.footerCointer}>
          <TouchableOpacity
             onPress={()=> openWebsiteInBrowser("https://as2.ftcdn.net/v2/jpg/01/77/47/67/1000_F_177476718_VWfYMWCzK32bfPI308wZljGHvAUYSJcn.jpg")}
          >
            <Text style={styles.socialLinks}>Read More...</Text>
          </TouchableOpacity>

          <TouchableOpacity
             onPress={()=> openWebsiteInBrowser("https://www.linkedin.com/in/mahendra-rajput-15aa94250")}
          >
            <Text style={styles.socialLinks}>Follow me...</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText : {
      fontSize : 24,
      fontWeight : 'bold',
      paddingHorizontal : 8
    },
    card : {
      width : 350,
      height : 360,
      borderRadius : 6,
      marginVertical : 12,
      marginHorizontal : 5
    },
    elevatedCard : {
      backgroundColor : "#E07C24",
      elevation : 3,
      shadowOffset : {
        width : 1,
        height : 1
      },
      shadowColor : "#333",
      shadowOpacity : 0.4
    },
    headingCointainer : {
      height : 40,
      flexDirection : "row",
      justifyContent : "center",
      alignItems : "center"
    },
    headerText : {
      color : '#000',
      fontSize : 16,
      fontWeight : '600'
    },
    cardImage : {
      height : 190,
    },
    bodyContainer : {
      padding : 10
    },
    footerCointer : {
      padding : 8,
      flexDirection : "row",
      justifyContent : "space-evenly"
    },
    socialLinks : {
      fontSize : 16,
      color : "#000",
      backgroundColor : "#FFF",
      paddingHorizontal : 20,
      paddingVertical : 6,
      borderRadius : 6
    }
})