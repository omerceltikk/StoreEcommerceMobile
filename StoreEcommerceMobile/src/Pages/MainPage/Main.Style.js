import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    height: '100%',
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
  },
  imageContainer: {
    marginBottom: 20,
    height: '100%',
  },
  image: {
    width: '100%',
    height: '100%', // veya istediğiniz yükseklik
  },
  imageText: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    color: 'white',
    fontSize: 20,
  },
  themeSwitch: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: 12,
  },
});
