import { StyleSheet, View, Text } from 'react-native';
import PressableButton from '../components/PressableButton';
import { useTheme } from '../hook/useTheme';
import { useEffect } from 'react';

export default function Settings() {
  const [theme, toggleTheme] = useTheme();

  useEffect(() => {
    console.log(theme);
  }, [theme]);

  return (
    <View
      style={[styles.container, { backgroundColor: theme.backgroundColor }]}
    >
      <PressableButton
        pressedFunction={toggleTheme}
        componentStyle={{ backgroundColor: theme.color }}
      >
        <Text style={{ color: theme.textColor }}>Toggle Theme</Text>
      </PressableButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
