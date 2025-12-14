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
  '1. I think, therefore it\'s not XGH.\n\nIn XGH you don\'t think, you do the first thing that comes to your mind. There\'s not a second option as the first one is faster.',
  '2. There are 3 ways of solving a problem: the right way, the wrong way, and the XGH way which is exactly like the wrong way but faster.\n\nXGH is faster than any development methodology you know.',
  '3. You\'ll always need to do more and more XGH.\n\nThe more XGH you do the more XGH you\'ll need to do.',
  '4. There\'s no refactoring, just defactoring.\n\nIf things are working, why mess with them? Never refactor!',
  '5. XGH is completely reactive.\n\nErrors only exist when they appear.',
  '6. There\'s no QA, only technically skilled clients.\n\nWho needs QA? The client is the perfect tester. They know the app, they have the environment.',
  '7. Be ready to receive feedback.\n\nPrepare yourself to hear "This crap doesn\'t work!"',
  '8. Be ready to give feedback.\n\nPrepare yourself to say "It works on my machine!"',
  '9. Nosjupport. Use 100% of CPU.\n\nIt\'s faster to reboot than to find the source of a memory leak.',
  '10. XGH generates the employment.\n\nXGH can\'t be automated. It takes people to do it, which generates employment.',
  '11. Just ask for help to those who can do XGH.\n\nNever bother a senior programmer. They\'ll waste your time with "best practices".',
  '12. Never underestimate a newbie\'s XGH.\n\nNewbies can do XGH without even knowing. They\'re naturals.',
  '13. There\'s no owner for the XGH\'s code.\n\nThe code is everyone\'s and no one\'s. Accept changes from everyone.',
  '14. Commit always, even if the build fails.\n\nEveryone should see that you\'re working.',
  '15. Chance of success is inversely proportional to the amount of rules.\n\nNo rules mean guaranteed success.',
  '16. XGH must never die.\n\nCritical bugs should be kept on duty 24/7.',
  '17. XGH is anarchic.\n\nNo coordination is needed. Everyone does what they want.',
  '18. Keep your resume up to date.\n\nYou never know when you\'ll need it.',
  '19. XGH doesn\'t follow trends.\n\nTrends are for the weak. XGH is timeless.',
  '20. XGH gives no guarantees.\n\nDeadline? What deadline? Keep coding!',
  '21. XGH codes as fast as possible.\n\nFaster is always better. Don\'t look back.',
  '22. One solved problem, 7 created.\n\nThat\'s the XGH productivity metric.',
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
          <Text style={styles.subtitle}>Methodology</Text>

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
