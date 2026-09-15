import { StyleSheet, Text, Pressable, View } from 'react-native';
import { router } from 'expo-router';
import { Screen } from '@/components/Screen';
import { colors } from '@/constants/theme';

export default function PetType() {
  return (
    <Screen>
      <Text style={styles.kicker}>STEP 1</Text>
      <Text style={styles.title}>Who are we caring for?</Text>
      <Text style={styles.subtitle}>For our first version, we're starting with cats and dogs. More species can come later. 🐾</Text>
      <View style={styles.grid}>
        <PetCard emoji="🐶" label="Dog" color={colors.butter} onPress={() => router.push('/add-pet?species=dog')} />
        <PetCard emoji="🐱" label="Cat" color={colors.secondary} onPress={() => router.push('/add-pet?species=cat')} />
      </View>
    </Screen>
  );
}

function PetCard({ emoji, label, color, onPress }: { emoji: string; label: string; color: string; onPress: () => void }) {
  return <Pressable onPress={onPress} style={({ pressed }) => [styles.card, { backgroundColor: color }, pressed && { transform: [{ scale: 0.97 }] }]}><Text style={styles.emoji}>{emoji}</Text><Text style={styles.label}>{label}</Text><Text style={styles.choose}>Choose →</Text></Pressable>;
}

const styles = StyleSheet.create({
  kicker: { color: colors.primaryDark, fontWeight: '900', letterSpacing: 2, marginTop: 20 },
  title: { fontSize: 32, fontWeight: '900', color: colors.text, marginTop: 8 },
  subtitle: { color: colors.muted, lineHeight: 21, marginTop: 10, marginBottom: 28 },
  grid: { flexDirection: 'row', gap: 16 },
  card: { flex: 1, borderRadius: 30, padding: 22, minHeight: 190, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#FFFFFF99' },
  emoji: { fontSize: 68 },
  label: { fontSize: 22, fontWeight: '900', color: colors.text, marginTop: 10 },
  choose: { color: colors.muted, marginTop: 6 },
});
