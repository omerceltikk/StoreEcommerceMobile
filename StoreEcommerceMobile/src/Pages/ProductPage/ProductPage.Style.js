import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  main: {
    flex: 1,
  },
  innerContainer: {
    flexDirection: 'row',
  },
  headerArea: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
  },

  infoArea: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listArea: {
    backgroundColor: '#cecece',
    flex: 1,
    paddingBottom: 100,
  },
  innerInfo: {
    flex: 0.5,
    gap: 10,
  },
  button: {
    backgroundColor: '#5C8374',
    color: 'white',
    padding: 10,
    borderRadius: 10,
    fontSize: 12,
    fontWeight: 'bold',
    alignSelf: 'flex-end',
    marginHorizontal: 10,
  },
  title: {
    fontSize: 24,
    padding: 10,
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginBottom: 30,
  },
  imageStyle: {
    width: '100%',
    height: 700,
  },
  tag: {
    fontSize: 16,
    color: '#bbb',
    paddingHorizontal: 20,
  },
});
