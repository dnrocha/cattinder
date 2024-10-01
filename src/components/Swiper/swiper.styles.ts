import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subContainer: {
    flex: 0.8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '60%',
    paddingVertical: 20,
  },
  overlayLabelContainer: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
  },
  like: {
    backgroundColor: 'green',
  },
  nope: {
    backgroundColor: 'red',
  },
  loading: {
    marginLeft: 16,
    fontSize: 20,
  },
  error: {
    marginLeft: 16,
    color: 'red',
  },
});

export default styles;
