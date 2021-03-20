import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

const matchData = [
  {
    match: "Real Madrid - Liverpool",
    name1: "Real Madrid C.F.",
    name2: "Liverpool F.C.",
    leg1: "7 April 2021, 3:00 am",
    leg2: "15 April 2021, 3:00 am",
    pic1:
      "https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/800px-Real_Madrid_CF.svg.png",
    pic2:
      "https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Liverpool_FC.svg/800px-Liverpool_FC.svg.png",
  },
  {
    match: "Man City - Dortmund",
    name1: "Manchester City F.C.",
    name2: "Ballspielverein Borussia 09 e.V. Dortmund",
    leg1: "7 April 2021, 3:00 am",
    leg2: "15 April 2021, 3:00 am",
    pic1:
      "https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/270px-Manchester_City_FC_badge.svg.png",
    pic2:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Borussia_Dortmund_logo.svg/270px-Borussia_Dortmund_logo.svg.png",
  },
  {
    match: "Bayern - PSG",
    name1: "FC Bayern Munich",
    name2: "Paris Saint-Germain F.C.",
    leg1: "8 April 2021, 3:00 am",
    leg2: "14 April 2021, 3:00 am",
    pic1:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg/1024px-FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg.png",
    pic2:
      "https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/Paris_Saint-Germain_F.C..svg/1200px-Paris_Saint-Germain_F.C..svg.png",
  },
  {
    match: "Porto - Chelsea",
    name1: "FC Porto",
    name2: "Chelsea F.C.",
    leg1: "8 April 2021, 3:00 am",
    leg2: "14 April 2021, 3:00 am",
    pic1:
      "https://upload.wikimedia.org/wikipedia/sco/thumb/f/f1/FC_Porto.svg/1200px-FC_Porto.svg.png",
    pic2:
      "https://logodownload.org/wp-content/uploads/2017/02/chelsea-fc-logo-escudo.png",
  },
];

function EventHomeScreen({ navigation }) {
  return (
    <View style={{ height: "100%" }}>
      {matchData.map((item) => {
        return (
          <TouchableOpacity
            onPress={() => navigation.navigate(item.match)}
            style={[
              styles.events,
              { flexDirection: "row", justifyContent: "space-around" },
            ]}
          >
            <Image style={styles.center} source={{ uri: item.pic1 }} />
            <Text style={styles.title}>VS</Text>
            <Image style={styles.center} source={{ uri: item.pic2 }} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

function EventSecondScreen({ navigation }) {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Man City - Dortmund")}
      style={[styles.event, { flexDirection: "column", alignItems: "center" }]}
    >
      <Image style={styles.stretch} source={{ uri: matchData[0].pic1 }} />
      <Text style={styles.title}>{`1st Leg: ${matchData[0].leg1}`}</Text>
      <Text style={styles.title}>{`2st Leg: ${matchData[0].leg2}`}</Text>
      <Image style={styles.stretch} source={{ uri: matchData[0].pic2 }} />
    </TouchableOpacity>
  );
}

function EventThirdScreen({ navigation }) {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Bayern - PSG")}
      style={[styles.event, { flexDirection: "column", alignItems: "center" }]}
    >
      <Image style={styles.stretch} source={{ uri: matchData[1].pic1 }} />
      <Text style={styles.title}>{`1st Leg: ${matchData[1].leg1}`}</Text>
      <Text style={styles.title}>{`2st Leg: ${matchData[1].leg2}`}</Text>
      <Image style={styles.stretch} source={{ uri: matchData[1].pic2 }} />
    </TouchableOpacity>
  );
}
function EventForthScreen({ navigation }) {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Porto - Chelsea")}
      style={[styles.event, { flexDirection: "column", alignItems: "center" }]}
    >
      <Image style={styles.stretch} source={{ uri: matchData[2].pic1 }} />
      <Text style={styles.title}>{`1st Leg: ${matchData[2].leg1}`}</Text>
      <Text style={styles.title}>{`2st Leg: ${matchData[2].leg2}`}</Text>
      <Image style={styles.stretch} source={{ uri: matchData[2].pic2 }} />
    </TouchableOpacity>
  );
}
function EventFifthScreen({ navigation }) {
  return (
    <TouchableOpacity
      onPress={() => navigation.popToTop()}
      style={[styles.event, { flexDirection: "column", alignItems: "center" }]}
    >
      <Image style={styles.stretch} source={{ uri: matchData[3].pic1 }} />
      <Text style={styles.title}>{`1st Leg: ${matchData[3].leg1}`}</Text>
      <Text style={styles.title}>{`2st Leg: ${matchData[3].leg2}`}</Text>
      <Image style={styles.stretch} source={{ uri: matchData[3].pic2 }} />
    </TouchableOpacity>
  );
}

const Stack = createStackNavigator();

export default function EventStack() {
  return (
    <Stack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
      <Stack.Screen name="Matches" component={EventHomeScreen} />
      <Stack.Screen
        name="Real Madrid - Liverpool"
        component={EventSecondScreen}
      />
      <Stack.Screen name="Man City - Dortmund" component={EventThirdScreen} />
      <Stack.Screen name="Bayern - PSG" component={EventForthScreen} />
      <Stack.Screen name="Porto - Chelsea" component={EventFifthScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  event: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  events: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "25%",
    borderColor: "blue",
    borderWidth: 3,
    borderRadius: 5,
    margin: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    margin: 20,
  },

  center: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  stretch: {
    width: 250,
    height: 250,
    resizeMode: "contain",
  },
});
