import { StyleSheet, View, Pressable } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

type Props = {
    onPress: () => void;
}

export default function CircleButton({ onPress }: Props) {
  return (
    <View style={styles.circleButtonContainer}>
      <Pressable
        style={({ pressed }) => [
          styles.circleButton,
          pressed && styles.circleButtonPressed,
        ]}
        onPress={onPress}
        >
        <MaterialIcons name="add" size={38} color='#fff' />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
    circleButtonContainer : {
        width: 84,
        height: 84,
        marginHorizontal: 60,
        borderWidth: 4,
        borderColor: "#fff",
        borderRadius: 42,
        padding: 3,
    },
    circleButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 42,
        backgroundColor: "#2e1b38",
    },
    circleButtonPressed: {
      backgroundColor: "#000000"
    },
});