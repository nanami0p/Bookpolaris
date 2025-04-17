import { StyleSheet } from 'react-native';
import { colors } from './colors';


export const container = StyleSheet.create({
  base: {
    flex: 1,
    backgroundColor: '#fff',
  },
  wrapper: {
    paddingHorizontal: 20,
  },
  buttonArea:{
    alignItems: 'center',
  },
  button:{
    justifyContent: 'center',
    borderRadius: 30,
    paddingHorizontal: 10,
    height: 54,
    width: 240,
  },
  buttonText: {
    color: "#fff",
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
  buttonLine:{
    width: '100%',
  },
  outlineButton:{
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    paddingHorizontal: 10,
    height: 48,
    marginTop: 5,
    borderWidth: 1,
    borderColor: colors.mainBlue,
    width: '100%',
  },
  outlineButtonText:{
    color: colors.mainBlue,
    fontWeight: 'bold',
  },
  booksContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  book: {
      width: '30%',
      height: 150,
      marginBottom: 15,
      overflow: 'hidden',
  },
  bookImage: {
      width: '100%',
      height: '100%',
      justifyContent: 'space-between',
  },
});
