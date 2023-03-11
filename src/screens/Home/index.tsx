import { Feather } from '@expo/vector-icons'
import { TextInput, TouchableOpacity, View } from 'react-native'

import Logo from '../../assets/Logo.svg'

import { styles } from './styles'

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Logo />
      </View>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
        />
        <TouchableOpacity style={styles.button} activeOpacity={0.8}>
          <Feather name="plus-circle" size={20} color="#FFF" />
        </TouchableOpacity>
      </View>
    </View>
  )
}
