import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

// functional componenet with props
const Button = (props) => {
    return (
        <TouchableOpacity style={styles.container} onPress={props.onPress}>
            <Text style={styles.text}> {props.text} </Text>
        </TouchableOpacity>
    );
};

// style di dalam button burger
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#dddddd",
        padding: 15,
        alignItems: "center",
        borderRadius: 30,
      },
      text: {
        fontSize: 16,
        textTransform: "uppercase",
        fontWeight: "bold",
      },    
});

export default Button;