import { Alert, StyleSheet, Text, TextInput, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { useEffect, useState } from 'react';
import PressableButton from '../components/PressableButton';
import { useData } from '../hook/useData';
import { useTheme } from '../hook/useTheme';
import DatePicker from '../components/DatePicker';

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

  const showAlert = (title, message) => {
    Alert.alert(title, message, [{ text: 'OK' }]);
  };

  const saveHandler = () => {
    if (!activityType || !duration || !date) {
      showAlert('Error', 'Please fill in all required fields');
      return;
    }
    if (isNaN(parseInt(duration))) {
      showAlert('Error', 'Duration must be a number');
      return;
    }
    if (parseInt(duration) <= 0) {
      showAlert('Error', 'Duration must be a positive number');
      return;
    }

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
      <DatePicker date={date} onDateChange={setDate} />
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
