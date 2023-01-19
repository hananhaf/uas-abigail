import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Splashscreen = () => {
  return (
    <LinearGradient
      style={styles.splashscreen}
      locations={[0, 1]}
      colors={["#f8dcdc", "#b6c5db"]}
    >
      <Pressable
        style={styles.pressable}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.bookingHotel}>BOOKING HOTEL</Text>
        <Image
          style={styles.splashscreenChild}
          resizeMode="cover"
          source={require("../assets/rectangle6.png")}
        />
      </Pressable>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  bookingHotel: {
    top: 543,
    left: 29,
    fontSize: FontSize.size_4xl,
    fontWeight: "800",
    fontFamily: FontFamily.inter,
    color: Color.indigo_100,
    textAlign: "center",
    position: "absolute",
  },
  splashscreenChild: {
    marginTop: -93,
    top: "50%",
    left: 72,
    width: 262,
    height: 185,
    position: "absolute",
  },
  pressable: {
    flex: 1,
    height: "100%",
    overflow: "hidden",
    backgroundColor: "transparent",
    width: "100%",
  },
  splashscreen: {
    height: 844,
    width: "100%",
  },
});

export default Splashscreen;
