import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useEffect, useState } from 'react';
import { useData } from '../hook/useData';
import DateTimePicker from '@react-native-community/datetimepicker';
import PressableButton from '../components/PressableButton';
import { useTheme } from '../hook/useTheme';

export default function NewDiet({ navigation }) {
  const [description, setDescription] = useState('');
  const [calories, setCalories] = useState('');
  const [date, setDate] = useState(new Date());
  const [data, setData] = useData();
  const [theme] = useTheme();

  const onChange = (event, selectedDate) => {
    setDate(selectedDate);
  };

  const saveHandler = () => {
    validateInput();
    let newDiet = {
      description,
      calories,
      date: date.toDateString(),
    };
    setData((prev) => {
      return {
        ...prev,
        diet: [...prev.diet, newDiet],
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
      <Text style={{ color: theme.textColor }}>Description</Text>
      <TextInput
        value={description}
        onChangeText={setDescription}
        multiline={true}
        style={[
          styles.textArea,
          {
            backgroundColor: theme.color,
            color: theme.textColor,
          },
        ]}
      />
      <Text style={{ color: theme.textColor }}>Calories</Text>
      <TextInput
        value={calories}
        onChangeText={setCalories}
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
  textArea: {
    borderWidth: 1,
    borderRadius: 6,
    height: 80,
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
