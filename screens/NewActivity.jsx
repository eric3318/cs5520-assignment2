import { StyleSheet, Text, TextInput, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { useEffect, useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import PressableButton from '../components/PressableButton';
import { useData } from '../hook/useData';
import { useTheme } from '../hook/useTheme';

export default function NewActivity({ navigation }) {
  const [open, setOpen] = useState(false);
  const [activityType, setActivityType] = useState('');
  const [theme] = useTheme();
  const items = [
    { label: 'Walking', value: 'Walking' },
    { label: 'Running', value: 'Running' },
    { label: 'Swimming', value: 'Swimming' },
    { label: 'Weights', value: 'Weights' },
    { label: 'Yoga', value: 'Yoga' },
    { label: 'Cycling', value: 'Cycling' },
    { label: 'Hiking', value: 'Hiking' },
  ];
  const [duration, setDuration] = useState('');
  const [date, setDate] = useState(new Date());
  const [data, setData] = useData();
  const [error, setError] = useState({});

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
    cancelHandler();
  };

  const cancelHandler = () => {
    navigation.goBack();
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  const validateInput = () => {};

  return (
    <View
      style={[styles.container, { backgroundColor: theme.backgroundColor }]}
    >
      <Text style={{ color: theme.textColor }}>Activity</Text>
      <DropDownPicker
        setValue={setActivityType}
        value={activityType}
        items={items}
        open={open}
        setOpen={setOpen}
        placeholder="Select an Activity"
        style={{ backgroundColor: theme.color }}
        textStyle={{ color: theme.textColor }}
        dropDownContainerStyle={{ backgroundColor: theme.color }}
      />
      <Text style={{ color: theme.textColor }}>Duration (min)</Text>
      <TextInput
        value={duration}
        onChangeText={setDuration}
        style={[
          styles.textInput,
          {
            backgroundColor: theme.color,
            color: theme.textColor,
          },
        ]}
      />
      <Text style={{ color: theme.textColor }}>Date</Text>
      <TextInput
        editable={false}
        style={[
          styles.textInput,
          {
            backgroundColor: theme.color,
            color: theme.textColor,
          },
        ]}
        value={date.toDateString()}
      />
      <DateTimePicker value={date} display="inline" onChange={onChange} />
      <View style={styles.buttonContainer}>
        <PressableButton
          pressedFunction={cancelHandler}
          componentStyle={{ backgroundColor: theme.color }}
        >
          <Text style={{ color: theme.textColor }}>Cancel</Text>
        </PressableButton>
        <PressableButton
          pressedFunction={saveHandler}
          componentStyle={{ backgroundColor: theme.color }}
        >
          <Text style={{ color: theme.textColor }}>Ok</Text>
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
  textInput: {
    borderWidth: 1,
    paddingVertical: 14,
    borderRadius: 6,
  },
});
