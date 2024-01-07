import Icon from '@expo/vector-icons/Feather';
import { ScrollView, TouchableOpacity, View } from "react-native";

import { Link, useRouter } from "expo-router";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import NLWLogo from '../src/assets/nlw-spacetime-logo.svg';

export default function Memories() {
  const { bottom, top } = useSafeAreaInsets()
  const router = useRouter()


  return (
    <ScrollView className="flex-1 px-8" contentContainerStyle={{paddingBottom: bottom, paddingTop: top}}>
      <View className='flex-row mt-4 items-center justify-between'>
        <NLWLogo />

        <Link href="memories" asChild>
          <TouchableOpacity className="h-10 w-10 items-center justify-center rounded-full bg-purple-500">
            <Icon name="arrow-left" size={16} color="#fff" />
          </TouchableOpacity>
        </Link>
      </View>
    </ScrollView>
  )
}