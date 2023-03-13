import { Feather, Ionicons } from '@expo/vector-icons'
import { Text, TouchableOpacity, View } from 'react-native'

import { styles } from './styles'

interface Props {
  content: string
  done: boolean
  onDone: () => void
  onRemove: () => void
}

export function Task({ content, done, onDone, onRemove }: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onDone}>
        {done ? (
          <Ionicons name="ios-checkmark-circle" size={22} color="#5E60CE" />
        ) : (
          <Ionicons name="radio-button-off" size={22} color="#4EA8DE" />
        )}
      </TouchableOpacity>

      <Text style={[styles.content, done && styles.lineThrough]}>
        {content}
      </Text>

      <TouchableOpacity onPress={onRemove}>
        <Feather name="trash-2" size={18} color="#808080" />
      </TouchableOpacity>
    </View>
  )
}
