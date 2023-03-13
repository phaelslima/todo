import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#262626',
    borderWidth: 1,
    borderColor: '#333333',
    borderRadius: 8,
  },
  content: {
    flex: 1,
    marginHorizontal: 12,
    fontSize: 14,
    color: '#F2F2F2',
  },
  lineThrough: {
    textDecorationLine: 'line-through',
  },
})
