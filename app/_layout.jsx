import React from 'react'
import { Stack } from 'expo-router'

const Rootlayout = () => {
  return (
<Stack 
      screenOptions={{
        headerStyle: { backgroundColor: '#e3531a' },
        headerTintColor: '#ffff',
      }}
    >
      <Stack.Screen
        name="index"
        options={{ title: "Home", headerShown: false }}
      />
      <Stack.Screen
        name="food/[id]"
        options={({ route }) => ({ title: route.params.title })}
      />
    </Stack>
  )
}

export default Rootlayout
