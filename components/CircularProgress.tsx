import React from "react";
import { View, Image } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import Svg, { Circle, Defs, RadialGradient, Stop } from "react-native-svg";

const CircularProgress = (props: {
  completion: number;
  windowWidth: number;
  windowHeight: number;
}) => {
  return (
    <AnimatedCircularProgress
      size={props.windowHeight / 3.56}
      width={35}
      fill={(props.completion / 3) * 100 + 0.5}
      rotation={0}
      lineCap="round"
      tintColor="#D1E3F8"
      backgroundColor="#fff"
      children={() => (
        <View
          style={{
            width: "100%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Svg height="100%" width="100%" viewBox="0 0 240 240">
            <Defs>
              <RadialGradient
                id="grad"
                cx="50%"
                cy="50%"
                rx="50%"
                ry="50%"
                fx="50%"
                fy="50%"
                gradientUnits="userSpaceOnUse"
              >
                <Stop offset="0%" stopColor="#9083B7" stopOpacity="0" />
                <Stop offset="100%" stopColor="#FFF" stopOpacity="1" />
              </RadialGradient>
            </Defs>
            <Circle cx="120" cy="120" r="120" fill="url(#grad)" />
          </Svg>
          <View
            style={{
              position: "absolute",
            }}
          >
            <Image
              source={require("../assets/images/progress_poly.png")}
              style={{
                height: props.windowHeight / 9,
                width: props.windowHeight / 9,
              }}
            />
          </View>
        </View>

        /*<CircularText
            width="300"
            height="300"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
          >
            SELF BODY PEOPLE
          </CircularText>*/
      )}
    />
  );
};

export default CircularProgress;

{
  /* <View style={{ position: "absolute", bottom: 3 }}>
      <Feather name="sun" size={30} color="#000" />
    </View>
    <View style={{ position: "absolute", right: 5 }}>
      <Feather name="moon" size={30} color="#000" />
    </View>
    <View style={{ position: "absolute", left: 5 }}>
      <Feather name="sun" size={30} color="#000" />
    </View> */
}
