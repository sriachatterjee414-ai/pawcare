import { StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import { Screen } from '@/components/Screen';
import { PrimaryButton } from '@/components/PrimaryButton';
import { colors } from '@/constants/theme';

export default function Account() {
  return (
    <Screen>
      <View style={styles.top}><Text style={styles.emoji}>🐾</Text><Text style={styles.title}>Welcome!</Text><Text style={styles.subtitle}>Let's make a cozy little home for your pet.</Text></View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Your account</Text>
        <Text style={styles.body}>Account login is the next backend step. For now, continue through the prototype.</Text>
        <PrimaryButton label="Get started" onPress={() => router.push('/pet-type')} />
      </View>
      <Text style={styles.note}>Later: email login • Google/Apple • secure cloud sync</Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  top: { alignItems: 'center', marginTop: 50, marginBottom: 32 },
  emoji: { fontSize: 56, marginBottom: 14 },
  title: { fontSize: 34, fontWeight: '900', color: colors.text },
  subtitle: { color: colors.muted, marginTop: 8, textAlign: 'center', lineHeight: 21 },
  card: { backgroundColor: colors.surface, borderRadius: 28, padding: 24, borderWidth: 1, borderColor: colors.border },
  cardTitle: { fontSize: 21, fontWeight: '800', color: colors.text, marginBottom: 8 },
  body: { color: colors.muted, lineHeight: 21, marginBottom: 22 },
  note: { textAlign: 'center', color: colors.muted, fontSize: 12, marginTop: 20 },
});
