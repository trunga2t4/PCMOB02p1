import React from "react";
import { StyleSheet, Text, SafeAreaView, ScrollView } from "react-native";
import { List, Card } from "react-native-paper";
import { createStackNavigator } from "@react-navigation/stack";

const dataArray = [
  {
    title: "What is this?",
    answer: "Quarter-final, Champions League 2021",
    content: "The schedule of upcomming matches - Champions League 2021!",
  },
  {
    title: "Who is this by?",
    answer: "Me",
    content: "Just an ordinary football's fan",
  },
  {
    title: "Why is this?",
    answer: "For fun, obviously",
    content: "FOOTBALLLLLLLLLLLLLLLLL!, GOAL GOAL GOAL GOALLLLLLLLLLLLLLL!",
  },
];

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text style={styles.title}>2021</Text>
        <Text style={styles.title}>Quarter-Final</Text>
        <Card style={styles.card}>
          <Card.Cover
            style={{ height: 300 }}
            source={{
              uri:
                "https://1000logos.net/wp-content/uploads/2020/10/UEFA-Champions-League-Logo.png",
            }}
          />
        </Card>
        <List.Section title="Frequently Asked Questions">
          {dataArray.map((item) => {
            return (
              <List.Accordion title={item.title}>
                <List.Item
                  title={item.answer}
                  description={item.content}
                  style={styles.answer}
                />
              </List.Accordion>
            );
          })}
        </List.Section>
      </ScrollView>
    </SafeAreaView>
  );
}

const Stack = createStackNavigator();

export default function EventStack() {
  return (
    <Stack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
      <Stack.Screen name="Welcome" component={HomeScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
  answer: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "left",
    flexWrap: "wrap",
  },
  card: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },
});
