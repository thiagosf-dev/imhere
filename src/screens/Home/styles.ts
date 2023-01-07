import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

  container: {
    backgroundColor: '#131016',
    flex: 1,
    padding: 24,
  },

  eventName: {
    color: '#fefefe',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48,
  },

  eventDate: {
    color: '#6b6b6b',
    fontSize: 16,
  },

  input: {
    backgroundColor: '#1f1f1f',
    borderRadius: 5,
    color: '#fefefe',
    flex: 1,
    fontSize: 16,
    height: 56,
    marginRight: 12,
    padding: 16,
  },

  form: {
    flexDirection: 'row',
    marginTop: 36,
    marginBottom: 42,
    width: '100%',
  },

  button: {
    alignItems: 'center',
    backgroundColor: '#31cf67',
    borderRadius: 5,
    height: 56,
    justifyContent: 'center',
    width: 56,
  },

  buttonText: {
    color: '#fefefe',
    fontSize: 24,
  },

  listEmptyText: {
    color: '#fefefe',
    fontSize: 14,
    textAlign: 'center',
  },

})
