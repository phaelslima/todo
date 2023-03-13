import { Image, Text, View } from 'react-native'

import Clipboard from '../../assets/Clipboard.png'

import { styles } from './styles'

export function Empty() {
  return (
    <View style={styles.container}>
      <Image source={Clipboard} style={styles.image} />
      <Text style={[styles.text, styles.fontBold]}>
        Você ainda não tem tarefas cadastradas
      </Text>
      <Text style={styles.text}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  )
}
