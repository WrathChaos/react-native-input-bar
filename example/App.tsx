import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import RNInputBar from "@freakycoder/react-native-input-bar";

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <RNInputBar multiline height={null} />
      </SafeAreaView>
    </>
  );
};

export default App;
