import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
  },
  logoContainer: {
    alignItems: 'center',
    backgroundColor: '#0D0D0D',
    paddingVertical: 70,
  },
  form: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -27,
    marginHorizontal: 24,
    marginBottom: 32,
  },
  input: {
    flex: 1,
    height: 54,
    padding: 16,
    backgroundColor: '#262626',
    borderRadius: 6,
    marginRight: 4,
    fontSize: 16,
    color: '#FFF',
  },
  button: {
    width: 52,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1E6F9F',
    borderRadius: 6,
  },
  counters: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingHorizontal: 24,
  },
  list: {
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  separator: {
    height: 10,
  },
})
