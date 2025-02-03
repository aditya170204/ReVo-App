import React, { useState } from "react";
import { View, Text, StyleSheet, Animated } from "react-native";
import GestureRecognizer from "react-native-swipe-gestures";
//370,150||300,115 ||200,65

const SwipeJavBtn = ({ slideWidth = 370, adjustWidth = 150, onSwipe }) => {
  const [status, setStatus] = useState(false); // false = Punch Out, true = Punch In
  const [thumbPosition] = useState(new Animated.Value(-adjustWidth)); // For animating thumb's position

  const onSwipeLeft = () => {
    setStatus(false); // Punch Out
    onSwipe && onSwipe(false);
    // Animate the thumb back to the left
    Animated.spring(thumbPosition, {
      toValue: -adjustWidth, // Move thumb to the left
      useNativeDriver: false,
    }).start();
  };

  const onSwipeRight = () => {
    setStatus(true); // Punch In
    onSwipe && onSwipe(true);
    // Animate the thumb to the right
    Animated.spring(thumbPosition, {
      toValue: adjustWidth, // Move thumb to the right (change 200 based on button width)
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Swipe to Punch In / Punch Out</Text> */}

      <GestureRecognizer
        onSwipeLeft={onSwipeLeft}
        onSwipeRight={onSwipeRight}
        style={[styles.swipeButton, { width: slideWidth }]}
      >
        <Text style={styles.buttonText}>
          {status ? "Punched In" : "Punched Out"}
        </Text>

        {/* Animated View for the Thumb */}
        <Animated.View
          style={[
            styles.thumb,
            {
              transform: [{ translateX: thumbPosition }], // Bind the thumb position to the animated value
            },
          ]}
        />
      </GestureRecognizer>

      {/* <Text style={styles.status}>
        {/* Current Status: {status ? "Punched In" : "Punched Out"} */}
      {/* </Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    // flex: 1, // Make sure it takes up the whole screen
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  swipeButton: {
    // width: wide,
    height: 60,
    borderRadius: 30,
    backgroundColor: true ? "grey" : "#D0837F",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    overflow: "hidden", // To hide the thumb when it's outside of the swipe button's bounds
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "600",
    position: "absolute",
    color: "white",
  },
  thumb: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#FFFFFF",
    position: "absolute",
    // top: 10, // Center the thumb vertically
  },
  status: {
    marginTop: 20,
    fontSize: 18,
  },
});

export default SwipeJavBtn;
