import { useState } from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import * as ImagePicker from 'expo-image-picker';
import { Screen } from '@/components/Screen';
import { PrimaryButton } from '@/components/PrimaryButton';
import { colors } from '@/constants/theme';

const DOG_BREEDS = ['Labrador', 'Golden Retriever', 'Pomeranian', 'German Shepherd', 'Pug', 'Shih Tzu', 'Dachshund', 'Husky', 'Beagle', 'Mixed / Other'];
const CAT_BREEDS = ['Persian', 'Siamese', 'Maine Coon', 'Ragdoll', 'British Shorthair', 'Bengal', 'Sphynx', 'Scottish Fold', 'Domestic Shorthair', 'Mixed / Other'];

export default function AddPet() {
  const { species } = useLocalSearchParams<{ species: 'dog' | 'cat' }>();
  const [name, setName] = useState('');
  const [photo, setPhoto] = useState<string | null>(null);
  const [breed, setBreed] = useState('');
  const breeds = species === 'cat' ? CAT_BREEDS : DOG_BREEDS;

  async function pickPhoto() {
    const result = await ImagePicker.launchImageLibraryAsync({ mediaTypes: ['images'], allowsEditing: true, aspect: [1, 1], quality: 0.9 });
    if (!result.canceled) setPhoto(result.assets[0].uri);
  }

  return (
    <Screen>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 30 }}>
        <Text style={styles.kicker}>STEP 2</Text>
        <Text style={styles.title}>Tell us about your {species === 'cat' ? 'cat' : 'dog'} ♡</Text>

        <Pressable onPress={pickPhoto} style={styles.photoBox}>
          {photo ? <Image source={{ uri: photo }} style={styles.photo} /> : <><Text style={styles.camera}>📷</Text><Text style={styles.photoText}>Add their photo</Text><Text style={styles.photoHint}>You can change this later.</Text></>}
        </Pressable>

        <Text style={styles.label}>Name</Text>
        <TextInput value={name} onChangeText={setName} placeholder="e.g. Mochi" placeholderTextColor="#B9A3A8" style={styles.input} />

        <Text style={styles.label}>Breed</Text>
        <View style={styles.breeds}>{breeds.map((item) => <Pressable key={item} onPress={() => setBreed(item)} style={[styles.breed, breed === item && styles.selected]}><Text style={[styles.breedText, breed === item && styles.selectedText]}>{item}</Text></Pressable>)}</View>

        <Text style={styles.label}>Birthday</Text>
        <Text style={styles.comingSoon}>📅 Date picker will be added next. The app will calculate age automatically from it.</Text>

        <PrimaryButton label="Create pet profile" onPress={() => router.replace('/pet-home')} />
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  kicker: { color: colors.primaryDark, fontWeight: '900', letterSpacing: 2, marginTop: 10 },
  title: { fontSize: 30, fontWeight: '900', color: colors.text, marginTop: 8, marginBottom: 20 },
  photoBox: { height: 190, borderRadius: 30, backgroundColor: '#FFF', borderWidth: 2, borderStyle: 'dashed', borderColor: colors.border, alignItems: 'center', justifyContent: 'center', marginBottom: 24, overflow: 'hidden' },
  photo: { width: '100%', height: '100%' },
  camera: { fontSize: 42 },
  photoText: { fontSize: 17, fontWeight: '800', color: colors.text, marginTop: 8 },
  photoHint: { color: colors.muted, marginTop: 4 },
  label: { color: colors.text, fontWeight: '800', fontSize: 15, marginBottom: 8, marginTop: 10 },
  input: { backgroundColor: '#FFF', borderRadius: 18, padding: 15, borderWidth: 1, borderColor: colors.border, color: colors.text, fontSize: 16 },
  breeds: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginBottom: 8 },
  breed: { backgroundColor: '#FFF', borderWidth: 1, borderColor: colors.border, borderRadius: 18, paddingVertical: 10, paddingHorizontal: 13 },
  selected: { backgroundColor: colors.primary, borderColor: colors.primary },
  breedText: { color: colors.text, fontSize: 13 },
  selectedText: { color: '#FFF', fontWeight: '800' },
  comingSoon: { color: colors.muted, backgroundColor: '#FFF', borderRadius: 18, padding: 15, lineHeight: 20, marginBottom: 22 },
});
