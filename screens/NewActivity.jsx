import { StyleSheet, Text, TextInput, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { useEffect, useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import PressableButton from '../components/PressableButton';
import { useData } from '../hook/useData';

export default function NewActivity() {
  const [open, setOpen] = useState(false);
  const [activityType, setActivityType] = useState('');
  const items = [
    { label: 'Walking', value: 'Walking' },
    { label: 'Running', value: 'Running' },
    { label: 'Swimming', value: 'Swimming' },
    { label: 'Weights', value: 'Weights' },
    { label: 'Yoga', value: 'Yoga' },
  ];
  const [duration, setDuration] = useState('');
  const [date, setDate] = useState(new Date());
  const [data, setData] = useData();

  const onChange = (event, selectedDate) => {
    setDate(selectedDate);
  };

  const saveHandler = () => {
    validateInput();
    let newActivity = {
      type: activityType,
      duration: duration,
      date: date.toDateString(),
    };
    setData((prev) => {
      return {
        ...prev,
        activities: [...prev.activities, newActivity],
      };
    });
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  const validateInput = () => {};

  return (
    <View style={styles.container}>
      <Text>Activity</Text>
      <DropDownPicker
        setValue={setActivityType}
        value={activityType}
        items={items}
        open={open}
        setOpen={setOpen}
        placeholder="Select an Activity"
      />
      <Text>Duration (min)</Text>
      <TextInput
        value={duration}
        onChangeText={setDuration}
        style={styles.textInput}
      />
      <Text>Date</Text>
      <TextInput
        editable={false}
        style={styles.textInput}
        value={date.toDateString()}
      />
      <DateTimePicker value={date} display="inline" onChange={onChange} />
      <View style={styles.buttonContainer}>
        <PressableButton>
          <Text>Cancel</Text>
        </PressableButton>
        <PressableButton pressedFunction={saveHandler}>
          <Text>Ok</Text>
        </PressableButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    rowGap: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  button: {},
  textInput: {
    borderWidth: 1,
    paddingVertical: 14,
    borderRadius: 6,
  },
});
