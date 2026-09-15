import { Pressable, StyleSheet, Text } from 'react-native';
import { colors } from '@/constants/theme';

export function PrimaryButton({ label, onPress }: { label: string; onPress: () => void }) {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [styles.button, pressed && styles.pressed]}>
      <Text style={styles.text}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: { backgroundColor: colors.primary, borderRadius: 20, paddingVertical: 16, alignItems: 'center', shadowColor: '#000', shadowOpacity: 0.08, shadowRadius: 8, elevation: 2 },
  pressed: { transform: [{ scale: 0.98 }], opacity: 0.9 },
  text: { color: '#fff', fontSize: 16, fontWeight: '800' },
});
