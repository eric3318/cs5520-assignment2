import { StyleSheet, Text, View } from 'react-native';
import ItemList from '../components/ItemList';
import { useEffect } from 'react';
import PressableButton from '../components/PressableButton';
import { useTheme } from '../hook/useTheme';

export default function Activities({ navigation, route }) {
  const [theme] = useTheme();

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
    <View
      style={[styles.container, { backgroundColor: theme.backgroundColor }]}
    >
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
