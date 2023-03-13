import { Feather } from '@expo/vector-icons'

import { useState } from 'react'
import { TextInput, TouchableOpacity, View } from 'react-native'

import Logo from '../../assets/Logo.svg'

import { Counter } from '../../components/Counter'

import { styles } from './styles'

export function Home() {
  const [created] = useState(0)
  const [completed] = useState(0)

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

      <View style={styles.counters}>
        <Counter label="Criadas" value={created} color="#4EA8DE" />
        <Counter label="Concluídas" value={completed} color="#8284FA" />
      </View>
    </View>
  )
}
