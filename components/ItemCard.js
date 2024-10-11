import { StyleSheet, View, Text } from 'react-native';

export default function ItemCard({ item }) {
  return (
    <View style={styles.container}>
      <Text>Breakfast</Text>
      <View>
        <Text>Tue Sep 17 2024</Text>
      </View>
      <View>
        <Text>Calories</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});
