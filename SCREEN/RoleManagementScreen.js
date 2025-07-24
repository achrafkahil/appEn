import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, View, FlatList, TouchableOpacity } from 'react-native';
import Btn from '../components/Btn';
import { useNavigation } from '@react-navigation/native';

export default function RoleManagementScreen() {
  const [roles, setRoles] = useState([]);
  const [roleName, setRoleName] = useState('');
  const [editIndex, setEditIndex] = useState(-1);
  const navigation = useNavigation();

  const saveRole = () => {
    if (!roleName.trim()) return;
    if (editIndex >= 0) {
      const updated = [...roles];
      updated[editIndex] = roleName;
      setRoles(updated);
      setEditIndex(-1);
    } else {
      setRoles([...roles, roleName]);
    }
    setRoleName('');
  };

  const editRole = (index) => {
    setRoleName(roles[index]);
    setEditIndex(index);
  };

  const deleteRole = (index) => {
    const filtered = roles.filter((_, i) => i !== index);
    setRoles(filtered);
    if (editIndex === index) {
      setRoleName('');
      setEditIndex(-1);
    }
  };

  const cancelEdit = () => {
    setRoleName('');
    setEditIndex(-1);
  };

  const renderItem = ({ item, index }) => (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
      <Text>{item}</Text>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={() => editRole(index)} style={{ marginRight: 15 }}>
          <Text>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => deleteRole(index)}>
          <Text>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 22, marginBottom: 20 }}>Roles management</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
        <TextInput
          placeholder="Role name"
          value={roleName}
          onChangeText={setRoleName}
          style={{ flex: 1, borderWidth: 1, padding: 5, marginRight: 10 }}
        />
        <Btn title={editIndex >= 0 ? 'Save' : 'Add'} onPress={saveRole} />
        {editIndex >= 0 && <Btn title="Cancel" cls="danger" onPress={cancelEdit} />}
      </View>
      <FlatList
        data={roles}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderItem}
      />
      <View style={{ marginTop: 20 }}>
        <Btn title="Back" cls="primary" onPress={() => navigation.goBack()} />
      </View>
    </SafeAreaView>
  );
}
