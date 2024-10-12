import { StyleSheet, Text, View } from 'react-native';
import ItemList from '../components/ItemList';
import { useEffect } from 'react';
import PressableButton from '../components/PressableButton';

export default function Diet({ navigation, route }) {
  const toAddScreen = () => {
    navigation.push('New Diet');
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <PressableButton pressedFunction={toAddScreen}>
          <Text>Add</Text>
        </PressableButton>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ItemList itemType="diet" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
