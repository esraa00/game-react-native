import { View, StyleSheet, Dimensions } from 'react-native';
import Colors from '../../constants/colors';

function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

export default Card;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  card: {
    padding: 16,
    backgroundColor: Colors.primary800,
    marginTop: deviceWidth < 380 ? 18 : 36,
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 4, // android only property, equal to box-shadow
    shadowColor: 'black', // ios properties, equal to box-shadow
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
