import { StyleSheet, TextInput } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from 'react';
import { useTheme } from '../hook/useTheme';

export default function DatePicker({ date, onDateChange }) {
  const [showPicker, setShowPicker] = useState(false);
  const [theme] = useTheme();

  const onChange = (event, selectedDate) => {
    onDateChange(selectedDate);
    setShowPicker(false);
  };

  return (
    <>
      <TextInput
        editable={false}
        style={[
          styles.textInput,
          {
            backgroundColor: theme.color,
            color: theme.textColor,
          },
        ]}
        value={date?.toDateString() || ''}
        onPressIn={() => {
          if (!date) {
            onDateChange(new Date());
          }
          setShowPicker(!showPicker);
        }}
      />
      {showPicker && (
        <DateTimePicker value={date} display="inline" onChange={onChange} />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    paddingVertical: 14,
    borderRadius: 6,
  },
});
