import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { colors } from '@/constants/theme';
import { PlaceholderArt } from '@/components/PlaceholderArt';

export default function Splash() {
  useEffect(() => {
    const timer = setTimeout(() => router.replace('/account'), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <PlaceholderArt label="YOUR LOGO / SPLASH ART" />
      <Text style={styles.name}>PawCare</Text>
      <Text style={styles.tagline}>A little more love, every day. ♡</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, alignItems: 'center', justifyContent: 'center', padding: 28 },
  name: { fontSize: 38, fontWeight: '900', color: colors.primaryDark },
  tagline: { marginTop: 8, color: colors.muted, fontSize: 15 },
});
