import { StyleSheet, Text, View } from 'react-native';
import { Screen } from '@/components/Screen';
import { colors } from '@/constants/theme';

export default function PetHome() {
  return (
    <Screen>
      <Text style={styles.greeting}>Good morning ♡</Text>
      <Text style={styles.title}>Your pet's little world</Text>
      <View style={styles.hero}><Text style={styles.paw}>🐾</Text><Text style={styles.heroTitle}>Pet profile created!</Text><Text style={styles.heroText}>This is the first home-screen placeholder. Next we'll connect the real pet data and build the cute dashboard.</Text></View>
      <View style={styles.row}><Mini title="🍗 Food" /><Mini title="💧 Water" /></View>
      <View style={styles.row}><Mini title="💊 Medicine" /><Mini title="🎙 Notes" /></View>
      <Text style={styles.next}>NEXT BUILD → health • reminders • multiple pets • voice notes • real vet finder</Text>
    </Screen>
  );
}
function Mini({ title }: { title: string }) { return <View style={styles.mini}><Text style={styles.miniText}>{title}</Text><Text style={styles.check}>Coming next</Text></View>; }
const styles = StyleSheet.create({
  greeting: { color: colors.primaryDark, fontWeight: '800', marginTop: 20 },
  title: { fontSize: 30, fontWeight: '900', color: colors.text, marginTop: 6, marginBottom: 22 },
  hero: { backgroundColor: '#FFF', borderRadius: 30, padding: 24, borderWidth: 1, borderColor: colors.border, alignItems: 'center' },
  paw: { fontSize: 52 },
  heroTitle: { fontSize: 21, fontWeight: '900', color: colors.text, marginTop: 10 },
  heroText: { color: colors.muted, lineHeight: 21, textAlign: 'center', marginTop: 8 },
  row: { flexDirection: 'row', gap: 12, marginTop: 12 },
  mini: { flex: 1, backgroundColor: '#FFF', borderRadius: 22, padding: 18, borderWidth: 1, borderColor: colors.border },
  miniText: { color: colors.text, fontWeight: '800' },
  check: { color: colors.muted, fontSize: 12, marginTop: 5 },
  next: { color: colors.primaryDark, fontSize: 11, fontWeight: '800', marginTop: 26, lineHeight: 18 },
});
