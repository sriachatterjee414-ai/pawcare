import { StyleSheet, Text, View } from 'react-native';
import { colors } from '@/constants/theme';

export function PlaceholderArt({ label = 'YOUR ART HERE' }: { label?: string }) {
  return (
    <View style={styles.box}>
      <Text style={styles.paw}>🐾</Text>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.hint}>Replace this area later with your drawing.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: { height: 220, borderRadius: 32, borderWidth: 2, borderStyle: 'dashed', borderColor: colors.border, backgroundColor: '#FFFDFB', alignItems: 'center', justifyContent: 'center', marginBottom: 28 },
  paw: { fontSize: 64, marginBottom: 8 },
  label: { color: colors.primaryDark, fontWeight: '900', letterSpacing: 1 },
  hint: { color: colors.muted, marginTop: 6, fontSize: 12 },
});
