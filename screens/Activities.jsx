import { View, Text, StyleSheet } from 'react-native';
import ItemList from '../components/ItemList';
import { useData } from '../hook/useData';
import { useEffect } from 'react';
import PressableButton from '../components/PressableButton';

export default function Activities({ navigation, route }) {
  const toAddScreen = () => {
    navigation.push('New Activity');
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
      <ItemList itemType="activity" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
