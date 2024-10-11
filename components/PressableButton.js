import { Pressable, StyleSheet, View } from 'react-native';

export default function PressableButton({
  pressedFunction,
  longPressedFunction,
  onPressIn,
  onPressOut,
  componentStyle,
  pressedStyle,
  children,
  ...props
}) {
  return (
    <Pressable
      onPress={pressedFunction}
      onLongPress={longPressedFunction}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      style={({ pressed }) => {
        return [
          styles.defaultStyle,
          componentStyle,
          pressed & styles.defaultPressedStyle,
          pressed && pressedStyle,
        ];
      }}
    >
      {children}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  defaultStyle: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 6,
  },
  defaultPressedStyle: {
    backgroundColor: '#a4a',
  },
});
