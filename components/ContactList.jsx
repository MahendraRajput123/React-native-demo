import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ContactList = () => {
    const contact = [
        {
            uid : 1,
            name : 'Hitesh Choudhary',
            status : "Hitesh an extra ordinary teacher",
            imageUrl : 'https://as2.ftcdn.net/v2/jpg/01/77/47/67/1000_F_177476718_VWfYMWCzK32bfPI308wZljGHvAUYSJcn.jpg'
        },
        {
            uid : 2,
            name : 'Hitesh Choudhary',
            status : "Hitesh an extra ordinary teacher",
            imageUrl : 'https://as2.ftcdn.net/v2/jpg/01/77/47/67/1000_F_177476718_VWfYMWCzK32bfPI308wZljGHvAUYSJcn.jpg'
        },
        {
            uid : 3,
            name : 'Hitesh Choudhary',
            status : "Hitesh an extra ordinary teacher",
            imageUrl : 'https://as2.ftcdn.net/v2/jpg/01/77/47/67/1000_F_177476718_VWfYMWCzK32bfPI308wZljGHvAUYSJcn.jpg'
        },
        {
            uid : 4,
            name : 'Hitesh Choudhary',
            status : "Hitesh an extra ordinary teacher",
            imageUrl : 'https://as2.ftcdn.net/v2/jpg/01/77/47/67/1000_F_177476718_VWfYMWCzK32bfPI308wZljGHvAUYSJcn.jpg'
        },
        {
            uid : 5,
            name : 'Hitesh Choudhary',
            status : "Hitesh an extra ordinary teacher",
            imageUrl : 'https://as2.ftcdn.net/v2/jpg/01/77/47/67/1000_F_177476718_VWfYMWCzK32bfPI308wZljGHvAUYSJcn.jpg'
        }
    ]
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView
       style={styles.container}
       scrollEnabled={false}
      >
       {
        contact.map(({uid, name, status, imageUrl})=>(
            <View key={uid} style={styles.userCard}>
                <Image 
                 source={{
                    uri : imageUrl
                 }}

                 style={styles.userImage}
                />

               <View>
                   <Text style={styles.userName}>{name}</Text>
                   <Text style={styles.userStatus}>{status}</Text> 
               </View>
            </View>
        ))
       }
      </ScrollView>
    </View>
  )
}

export default ContactList

const styles = StyleSheet.create({
    headingText : {
        fontSize : 24,
        fontWeight : 'bold',
        paddingHorizontal : 8
    },
    container : {
      paddingHorizontal : 16,
      marginBottom : 4
    },
    userCard:{
        flex : 1,
        flexDirection : "row",
        alignItems : "center",
        marginBottom : 4,
        backgroundColor : "#8D3DAF",
        padding : 8 ,
        borderRadius : 10
    },
    userImage : {
        height : 60,
        width : 60,
        borderRadius : 60/2,
        marginRight : 14
    },
    userName : {
        fontSize : 16,
        fontWeight : '600',
        color : "#FFF"
    },
    userStatus : {
        fontSize : 16
    }
}) 