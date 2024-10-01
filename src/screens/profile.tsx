import { StyleSheet, Text, View } from 'react-native';

import englishLocale from '../constants/en.json';

const Profile = () => {
  const {not_available_yet} = englishLocale;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile</Text>
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
    fontSize: 24,
    fontWeight: 'bold',
    color: '#434141',
  },
  description: {
    fontSize: 16,
    color: '#434141',
  },
});

export default Profile;
