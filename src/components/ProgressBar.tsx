import { StyleSheet, Text, View } from "react-native";
import React from "react";

interface Props {
  completed: number;
  total: number;
};

const ProgressBar: React.FC<Props> = ({ completed, total }) => {
  const width = (completed / total * 100).toFixed(0);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Progress: {width}%</Text>

      <View style={styles.sliderParent}>
        <View style={{backgroundColor:"#306fd4",  width: `${width}%`, height: 3, }}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 10,
    flex: 1,
    flexDirection: "column"
  },
  sliderParent:{
    height:3,
    width: "100%",
    backgroundColor: "#BCBCBC",
    borderRadius: 1,
    justifyContent: "flex-start",
    alignItems:"flex-start"
  },
  text:{
    fontSize: 16,
    color: "#306fd4",
    fontWeight: "400"
  }
})

export default ProgressBar;
