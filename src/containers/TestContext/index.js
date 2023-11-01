import {useState, createContext, useContext, memo} from 'react';
import {View, Text, TextInput, TextComponent} from 'react-native';
import TestContext2 from './TestContext2';
import TestContext5 from './TestContext5';

const UserContext = createContext();

const TestContext = () => {
  const [user, setUser] = useState('Jessie Hall');

  console.log('component 1');

  return (
    <>
      <UserContext.Provider value={user}>
        <View style={{backgroundColor: 'red', margin: 5}}>
          <Text>component 1 {user}</Text>
          <TextInput
            value={user}
            onChangeText={ct => {
              setUser(ct);
            }}
            style={{height: 40, backgroundColor: 'white', margin: 10}}
          />
          <TestContext2 />
        </View>
      </UserContext.Provider>
      <TestContext5 />
    </>
  );
};

export default TestContext;
