# PawCare — Phase 1 starter

A cute pet-care app prototype, starting with dogs and cats.

## Planned stack
- Expo + React Native + TypeScript for Android/iOS/web.
- Expo Router for screen navigation.
- Supabase for authentication, PostgreSQL data, and pet photo/document storage.
- Google Maps Platform / Places for the real veterinary finder later.
- Voice recording + speech-to-text later.

## Current prototype flow
Splash → Account → Choose Dog/Cat → Add Pet → Pet Home.

The artwork is intentionally placeholder-only so the app can be built now and your drawings can replace it later.

## Run
1. Install Node.js LTS.
2. Run `npm install`.
3. Run `npx expo start`.
4. Open the QR code with Expo Go on Android/iOS.

## GitHub
Create a private or public GitHub repository, then:

```bash
git init
git add .
git commit -m "Initial PawCare prototype"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

Do not commit `.env` or real API keys. Use `.env.example` as the template.
