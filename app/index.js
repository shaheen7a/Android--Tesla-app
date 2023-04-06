import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import car from "../assets/images/car.png"
import {
  Entypo,
  MaterialCommunityIcons,
  FontAwesome5,
  Ionicons,
} from '@expo/vector-icons';
import menuOptions from '../assets/menuOptions';
import { FlatList } from "react-native-gesture-handler";
import MenuOption from "../components/MenuOption";

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>My model S</Text>
          <Text style={styles.subtitle}>Parked</Text>
        </View>
        <FontAwesome name="user-circle" size={30} color="gray" />
      </View>

      <Image source={car} style={styles.image} resizeMode="contain" />

      <View style={styles.controls}>
        <Entypo name="lock" size={26} color="gray" />
        <MaterialCommunityIcons name="fan" size={26} color="gray" />
        <FontAwesome5 name="bolt" size={26} color="gray" />
        <Ionicons name="car-sport-sharp" size={26} color="gray" />
      </View>

      <FlatList data={menuOptions} renderItem={MenuOption} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#161818',
  },
  header: {
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    color: "#eee",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  subtitle: {
    color: "gray",
    fontWeight: "500"
  },
  image: {
    width: "100%",
    height: 300,
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
})
