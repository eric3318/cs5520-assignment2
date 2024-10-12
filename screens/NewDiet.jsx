import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useEffect, useState } from 'react';
import { useData } from '../hook/useData';
import DateTimePicker from '@react-native-community/datetimepicker';
import PressableButton from '../components/PressableButton';

export default function NewDiet({ navigation }) {
  const [description, setDescription] = useState('');
  const [calories, setCalories] = useState('');
  const [date, setDate] = useState(new Date());
  const [data, setData] = useData();

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
    <View style={styles.container}>
      <Text>Description</Text>
      <TextInput
        value={description}
        onChangeText={setDescription}
        style={styles.textArea}
        multiline={true}
      />
      <Text>Calories</Text>
      <TextInput
        value={calories}
        onChangeText={setCalories}
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
        <PressableButton pressedFunction={cancelHandler}>
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
  button: {},
  textInput: {
    borderWidth: 1,
    paddingVertical: 14,
    borderRadius: 6,
  },
});
