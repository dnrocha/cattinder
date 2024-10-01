import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: 16,
    backgroundColor: '#FBFAFF',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  infoContainer: {
    position: 'absolute',
    right: 16,
    left: 16,
    bottom: 0,
    backgroundColor: '#fff',
    borderTopEndRadius: 16,
    borderTopLeftRadius: 16,
    marginHorizontal: 18,
    paddingHorizontal: 16,
    paddingVertical: 8,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    fontFamily: 'NunitoSans',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 20,
    color: '#434141',
  },
  origin: {
    fontFamily: 'Arial',
    fontStyle: 'normal',
    fontWeight: '100',
    fontSize: 8,
    lineHeight: 10,
    color: '#BFBFC0',
  },
  affection: {
    fontFamily: 'NunitoSans',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 20,
    color: '#434141',
  },
});

export default styles;
