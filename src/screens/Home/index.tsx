import { Feather } from '@expo/vector-icons'

import { useState } from 'react'
import {
  Alert,
  FlatList,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'

import Logo from '../../assets/Logo.svg'

import { Counter } from '../../components/Counter'
import { Empty } from '../../components/Empty'
import { Task } from '../../components/Task'

import { styles } from './styles'

interface TaskProps {
  id: string
  content: string
  done: boolean
}

export function Home() {
  const [tasks, setTasks] = useState<TaskProps[]>([])

  const [newTask, setNewTask] = useState('')

  function handleAddTask() {
    if (!newTask.trim()) {
      return Alert.alert(
        'Tarefa vazia!',
        'Por favor, informe a descrição para a tarefa.'
      )
    }

    setTasks((prevState) => [
      ...prevState,
      {
        id: new Date().toISOString(),
        content: newTask,
        done: false,
      },
    ])

    setNewTask('')
  }

  function handleRemoveTask(id: string) {}

  function handleDoneTask(id: string) {}

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
          onChangeText={setNewTask}
          value={newTask}
        />
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.8}
          onPress={handleAddTask}
        >
          <Feather name="plus-circle" size={20} color="#FFF" />
        </TouchableOpacity>
      </View>

      <View style={styles.counters}>
        <Counter label="Criadas" value={tasks.length} color="#4EA8DE" />
        <Counter
          label="Concluídas"
          value={tasks.filter((task) => task.done).length}
          color="#8284FA"
        />
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Task
            content={item.content}
            done={item.done}
            onDone={() => handleDoneTask(item.id)}
            onRemove={() => handleRemoveTask(item.id)}
          />
        )}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        ListEmptyComponent={() => <Empty />}
      />
    </View>
  )
}
