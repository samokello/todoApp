import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  Button
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import TrashIcon from 'react-native-vector-icons/FontAwesome';
import EditIcon from 'react-native-vector-icons/FontAwesome';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [userInput, setUserInput] = useState('');

  const [isEditing, setEdit] = useState(false);

  const addTodoHandler = () => {
    if (userInput === '') {
      return;
    }

    const newTodo = {
      id: Math.floor(Math.random() * 100),
      text: userInput,
      completed: false,
    };

    const newTodos = [...todos, newTodo];
    setTodos(newTodos);

    setUserInput('');
  };

  const deleteTodoHandler = id => {
    const oldTodos = [...todos];
    const newTodos = oldTodos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  };


   const handleEdit=()=>{
       console.log("edit me!")
    }

  const renderItem = ({item}) => (
    <View
      style={{
        backgroundColor: 'violet',
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 60,
        padding: 10,
        borderRadius: 10,
        width: 350,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          color: '#fff',
        }}>
        <BouncyCheckbox
          size={30}
          fillColor="red"
          unfillColor="#FFFFFF"
          text={item.text}
          iconStyle={{borderColor: 'blue'}}
          textStyle={{
            fontFamily: 'JosefinSans-Regular',
            color: 'red',
            fontSize: 30,
          }}
          onPress={isChecked => {}}
        />

        {/* <Text style={{color:"#fff",fontSize:20,fontWeight:"bold"}}>{item.text}</Text> */}
      </View>

      <View style={{flexDirection: 'row', alignItems: 'center'}}>
            
    
           
          <TouchableOpacity
          onPress={() => handleEdit()}
          style={{flexDirection: 'row', alignItems: 'center'}}>
          <EditIcon size={35} name="edit" style={{color: '#fff'}} />
        </TouchableOpacity>
  

        <TouchableOpacity
          onPress={() => deleteTodoHandler(item.id)}
          style={{flexDirection: 'row', alignItems: 'center'}}>
          <TrashIcon size={35} name="trash" style={{color: 'red'}} />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={{backgroundColor: '#4075E9'}}>
      <View
        style={{
          backgroundColor: '#E2550A',
          marginVertical: 20,
          borderRadius: 10,
        }}>
        <Text style={{textAlign: 'center', color: '#fff', fontSize: 28}}>
          TODO-LIST
        </Text>
      </View>

      <View style={styles.textInputView}>
        <TextInput
          value={userInput}
          onChangeText={text => setUserInput(text)}
          style={styles.textInput}
          placeholder="Enter your todos..."
        />

        <TouchableOpacity style={styles.addButton} onPress={addTodoHandler}>
          <Icon size={35} name="plus" style={styles.plusIcon} />
        </TouchableOpacity>
      </View>

      <View style={{alignItems: 'center'}}>
        <FlatList
          data={todos}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },

  textInputView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  addButton: {
    padding: 10,
    backgroundColor: 'violet',
    borderRadius: 10,
    width: 50,
  },

  plusIcon: {
    color: '#eff9f0',
  },

  textInput: {
    borderWidth: 1,
    borderColor: '#F6F7F9',
    width: 300,
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 10,
    fontSize: 18,
    borderRadius: 10,
  },
});

export default App;
