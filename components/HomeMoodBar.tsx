import React, { useState } from "react";
import { View } from "react-native";
import { Slider } from "react-native-elements";

const HomeMoodBar = () => {
  const [value, setValue] = useState(0);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "stretch",
        justifyContent: "center",
        padding: 20,
      }}
    >
      <Slider
        value={value}
        onValueChange={setValue}
        maximumValue={100}
        minimumValue={0}
        step={1}
        thumbStyle={{ height: 0 }}
        trackStyle={{
          height: 40,
          borderRadius: 20,
        }}
        thumbTintColor="transparent"
        minimumTrackTintColor="#DFDAEC"
        maximumTrackTintColor="#F6F5FA"
      />
    </View>
  );
};

export default HomeMoodBar;
