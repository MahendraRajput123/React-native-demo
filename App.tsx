import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlateCards from './components/FlateCards'
import ElevatedCard from './components/ElevatedCard'
import FancyCard from './components/FancyCard'
import ActionCard from './components/ActionCard'
import ContactList from './components/ContactList'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>

       <FlateCards />
       <ElevatedCard/>
       <FancyCard/>
       <ContactList />
       <ActionCard />

      </ScrollView>
    </SafeAreaView>
  )
}

export default App