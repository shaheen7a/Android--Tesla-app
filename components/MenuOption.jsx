import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

const MenuOption = ({ item }) => {
  return (
    <View style={styles.optionRow}>
      <MaterialCommunityIcons name={item.iconName} size={26} color="gray" />
      <Text style={styles.optionText}>{item.name}</Text>
      <MaterialIcons
        name="keyboard-arrow-right"
        size={24}
        color="gray"
        style={{ marginLeft: 'auto' }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  optionText: {
    color: '#eee',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default MenuOption;