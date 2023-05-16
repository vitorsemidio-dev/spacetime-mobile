import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-zinc-950">
      <Text className="text-2xl font-bold text-zinc-50">Tailwindcss</Text>
      <Text className="text-2xl font-bold text-zinc-50">Spacetime</Text>
      <StatusBar style="light" translucent />
    </View>
  )
}
