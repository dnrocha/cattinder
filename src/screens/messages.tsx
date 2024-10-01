import { StyleSheet, Text, View } from 'react-native'

import englishLocale from '../constants/en.json'

const Messages = () => {
  const {not_available_yet} = englishLocale;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Messages</Text>
      <Text style={styles.description}>{not_available_yet}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FBFAFF',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 16,
    color: '#434141',
  },
  description: {
    fontSize: 16,
    marginHorizontal: 16,
    color: '#434141',
  },
});

export default Messages;
