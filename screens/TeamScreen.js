import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { List } from "react-native-paper";
import { createStackNavigator } from "@react-navigation/stack";

const teamData = [
  {
    name: "FC Bayern Munich",
    country: "Germany",
    achievements: "6 European Cup/UEFA Champions League",
    pic:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg/1024px-FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg.png",
  },
  {
    name: "Chelsea F.C.",
    country: "England",
    achievements: "1 UEFA Champions League, 2 UEFA Cup Winners' Cupe",
    pic:
      "https://logodownload.org/wp-content/uploads/2017/02/chelsea-fc-logo-escudo.png",
  },
  {
    name: "Ballspielverein Borussia 09 e.V. Dortmund",
    country: "Germany",
    achievements: "1 UEFA Champions League, 1 UEFA Cup Winners' Cup",
    pic:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Borussia_Dortmund_logo.svg/270px-Borussia_Dortmund_logo.svg.png",
  },
  {
    name: "Liverpool F.C.",
    country: "England",
    achievements: "6 European Cup/UEFA Champions League",
    pic:
      "https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Liverpool_FC.svg/800px-Liverpool_FC.svg.png",
  },
  {
    name: "Manchester City F.C.",
    country: "England",
    achievements: "1 European Cup Winners' Cup",
    pic:
      "https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/270px-Manchester_City_FC_badge.svg.png",
  },
  {
    name: "Paris Saint-Germain F.C.",
    country: "France",
    achievements: "1 European Cup Winners' Cup",
    pic:
      "https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/Paris_Saint-Germain_F.C..svg/1200px-Paris_Saint-Germain_F.C..svg.png",
  },
  {
    name: "FC Porto",
    country: "Portugal",
    achievements: "2 European Cup / UEFA Champions League",
    pic:
      "https://upload.wikimedia.org/wikipedia/sco/thumb/f/f1/FC_Porto.svg/1200px-FC_Porto.svg.png",
  },
  {
    name: "Real Madrid C.F.",
    country: "Spain",
    achievements: "13 European Cup/UEFA Champions League",
    pic:
      "https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/800px-Real_Madrid_CF.svg.png",
  },
];

function TeamScreen() {
  return (
    <View style={[styles.team, {}]}>
      <View style={styles.list}>
        {teamData.map((item) => {
          return (
            <List.Item
              style={{ height: "12.5%" }}
              title={item.name}
              description={`${item.country}, ${item.achievements}`}
              left={(props) => (
                <Image
                  {...props}
                  style={styles.icon}
                  source={{ uri: item.pic }}
                />
              )}
            />
          );
        })}
      </View>
    </View>
  );
}
const Stack = createStackNavigator();

export default function EventStack() {
  return (
    <Stack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
      <Stack.Screen name="Teams" component={TeamScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  team: {
    flex: 1,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    marginTop: 20,
  },
  list: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  icon: {
    height: 50,
    width: 50,
    resizeMode: "contain",
  },
});
