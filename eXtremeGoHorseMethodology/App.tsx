/**
 * eXtreme Go Horse Methodology App
 * Random XGH Axiom Generator
 */

import React, {useState} from 'react';
import {
  Image,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

const XGH_AXIOMS = [
  '1. Myślę, więc to nie jest XGH.\n\nW XGH nie myślisz, robisz pierwszą rzecz, która przychodzi ci do głowy. Nie ma drugiej opcji, bo pierwsza jest szybsza.',
  '2. Są 3 sposoby rozwiązania problemu: właściwy, niewłaściwy i XGH, który jest dokładnie jak niewłaściwy, tylko szybszy.\n\nXGH jest szybszy niż jakakolwiek metodologia, którą znasz.',
  '3. Zawsze będziesz potrzebować więcej i więcej XGH.\n\nIm więcej XGH robisz, tym więcej XGH będziesz potrzebować.',
  '4. Nie ma refaktoryzacji, jest tylko defaktoryzacja.\n\nJeśli coś działa, po co to ruszać? Nigdy nie refaktoryzuj!',
  '5. XGH jest całkowicie reaktywny.\n\nBłędy istnieją tylko wtedy, gdy się pojawią.',
  '6. Nie ma QA, są tylko technicznie uzdolnieni klienci.\n\nKto potrzebuje QA? Klient jest idealnym testerem. Zna aplikację, ma środowisko.',
  '7. Bądź gotowy na feedback.\n\nPrzygotuj się na usłyszenie "To gówno nie działa!"',
  '8. Bądź gotowy dawać feedback.\n\nPrzygotuj się na powiedzenie "U mnie działa!"',
  '9. Bez wsparcia. Używaj 100% CPU.\n\nSzybciej zrestartować niż znaleźć źródło wycieku pamięci.',
  '10. XGH generuje zatrudnienie.\n\nXGH nie da się zautomatyzować. Potrzeba ludzi, żeby to robić, co generuje miejsca pracy.',
  '11. Proś o pomoc tylko tych, którzy potrafią XGH.\n\nNigdy nie zawracaj głowy seniorowi. Zmarnuje ci czas na "dobre praktyki".',
  '12. Nigdy nie lekceważ XGH początkującego.\n\nPoczątkujący robią XGH nawet o tym nie wiedząc. To naturalni.',
  '13. Kod XGH nie ma właściciela.\n\nKod jest wszystkich i niczyj. Akceptuj zmiany od każdego.',
  '14. Commituj zawsze, nawet jak build się wywala.\n\nWszyscy powinni widzieć, że pracujesz.',
  '15. Szansa sukcesu jest odwrotnie proporcjonalna do liczby reguł.\n\nBrak reguł oznacza gwarantowany sukces.',
  '16. XGH nigdy nie może umrzeć.\n\nKrytyczne bugi powinny być na dyżurze 24/7.',
  '17. XGH jest anarchiczny.\n\nKoordynacja nie jest potrzebna. Każdy robi co chce.',
  '18. Trzymaj CV aktualne.\n\nNigdy nie wiesz, kiedy ci się przyda.',
  '19. XGH nie podąża za trendami.\n\nTrendy są dla słabych. XGH jest ponadczasowy.',
  '20. XGH nie daje gwarancji.\n\nDeadline? Jaki deadline? Koduj dalej!',
  '21. XGH koduje najszybciej jak się da.\n\nSzybciej znaczy lepiej. Nie oglądaj się za siebie.',
  '22. Jeden rozwiązany problem, 7 stworzonych.\n\nTo jest metryka produktywności XGH.',
];

function getRandomAxiom(): string {
  const randomIndex = Math.floor(Math.random() * XGH_AXIOMS.length);
  return XGH_AXIOMS[randomIndex];
}

function App(): React.JSX.Element {
  const [currentAxiom, setCurrentAxiom] = useState(getRandomAxiom());

  const handleRefresh = () => {
    let newAxiom = getRandomAxiom();
    // Make sure we get a different axiom
    while (newAxiom === currentAxiom && XGH_AXIOMS.length > 1) {
      newAxiom = getRandomAxiom();
    }
    setCurrentAxiom(newAxiom);
  };

  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF8DC" />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          {/* Donkey Image */}
          <Image
            source={require('./jakub.png')}
            style={styles.donkeyImage}
            resizeMode="cover"
          />

          {/* Title */}
          <Text style={styles.title}>eXtreme Go Horse</Text>
          <Text style={styles.subtitle}>Metodologia</Text>

          {/* Axiom Label */}
          <View style={styles.axiomContainer}>
            <Text style={styles.axiomText}>{currentAxiom}</Text>
          </View>

          {/* Refresh Button */}
          <Pressable
            style={({pressed}) => [
              styles.button,
              pressed && styles.buttonPressed,
            ]}
            onPress={handleRefresh}>
            <Text style={styles.buttonText}>🐴 NOWY AKSJOMAT</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFF8DC', // Cream/Cornsilk
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    backgroundColor: '#FFF8DC',
  },
  donkeyImage: {
    width: 180,
    height: 180,
    borderRadius: 90,
    borderWidth: 4,
    borderColor: '#8B4513',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#8B4513', // SaddleBrown
    textAlign: 'center',
    letterSpacing: 1,
  },
  subtitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#A0522D', // Sienna
    textAlign: 'center',
    marginBottom: 24,
  },
  axiomContainer: {
    backgroundColor: '#FAEBD7', // AntiqueWhite
    borderRadius: 16,
    padding: 20,
    marginHorizontal: 8,
    marginBottom: 24,
    borderWidth: 2,
    borderColor: '#DEB887', // BurlyWood
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 4,
    minHeight: 120,
    justifyContent: 'center',
  },
  axiomText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#5D4037',
    textAlign: 'center',
    fontStyle: 'italic',
  },
  button: {
    backgroundColor: '#8B4513', // SaddleBrown
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
  },
  buttonPressed: {
    backgroundColor: '#A0522D',
    transform: [{scale: 0.98}],
  },
  buttonText: {
    color: '#FFF8DC',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});

export default App;
