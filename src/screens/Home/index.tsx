import { useState } from "react";
import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Participant } from "../components/Participant";
import { styles } from "./styles";

export function Home() {
  const [participants, setParticipants] = useState<string[]>([])
  const [participantName, setParticipantName] = useState('')

  function handleParticipantAdd() {
    if (!participantName) return

    if (participants.includes(participantName)) {
      return Alert.alert(
        'Participante duplicado',
        'Já existe um participante com o nome informado'
      )
    }

    setParticipants(prevState => [...prevState, participantName])
    setParticipantName('')
  }

  function handleParticipantRemove(name: string) {
    Alert.alert(
      'Remover participante',
      `Tem certeza que deseja remover o participante ${name} ?`,
      [
        {
          text: 'Sim',
          onPress: () => {
            removeConfirm(name)
            Alert.alert('', 'O participante foi removido com sucesso!')
          },
        },
        {
          text: 'Não',
          style: 'cancel',
        },
      ]
    )
  }

  function removeConfirm(name: string) {
    setParticipants(prevState => prevState.filter(participantName => (participantName !== name)))
  }

  return (
    <View style={styles.container}>

      <Text style={styles.eventName}>
        Nome do evento
      </Text>

      <Text style={styles.eventDate}>
        Sábado, 01 de Maio de 2075
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          keyboardType={'default'}
          onChangeText={setParticipantName}
          placeholder={'Nome do participante...'}
          placeholderTextColor={'#6b6b6b'}
          value={participantName}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={handleParticipantAdd}
        >
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      {/* <ScrollView showsVerticalScrollIndicator={false}>
        {
          participants && participants.length > 0 && participants.map(participant => (
            <Participant
              key={participant}
              name={participant}
              onRemove={handleParticipantRemove}
            />
          ))
        }
      </ScrollView> */}

      <FlatList
        keyExtractor={item => item}
        data={participants}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Não existe nenhum participante registrado neste evento!
          </Text>
        )}
      />

    </View>

  )

}
