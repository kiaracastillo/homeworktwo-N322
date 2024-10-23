import { StyleSheet, Text, View, Image } from 'react-native'
import { Colors} from "@/constants/Colors";
import { Button } from "react-native-paper";
import { useRouter } from "expo-router";

export default function LoginScreen() {
    const router = useRouter();

  return (
    <View style={styles.container}>
    <View style={styles.logoContainer}>
      <Image style={styles.logo} source={require("./../assets/images/casadolcelogo.png")} />
    </View>
    

    <View style={styles.subContainer}>
      <Text style={styles.tagLineTop}>
        Buy <Text style={styles.pinkText}>Sweetness!</Text>
      </Text>
      <Text style={styles.tagLineTop}>Come and check our products!</Text>
      <Text style={styles.tagLine}>We are located in the heart of the big city. This is where it all happens.</Text>

      <Button 
      mode="text" style={styles.btn} onPress={() => router.push("/(auth)/sign-in")}>
        <Text style={styles.whiteText}>Sign In</Text>
      </Button>
      <Button 
      mode="text" style={styles.btn} onPress={() => router.push("/(auth)/sign-up")}>
        <Text style={styles.whiteText}>Sign Up</Text>
      </Button>

    </View>
  </View>
  )
}

    const styles = StyleSheet.create({

        container: {
          display: "flex",
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        },
        logoContainer: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 10,
         
        },
        logo: {
          width: 250,
          height: 250,
          
        },
        subContainer: {
          padding: 20,
          marginTop: -20,
          color: Colors.DEV_GRAY,
        },
        tagLineTop: {
          fontSize: 30,
          textAlign: "center",
          color: Colors.DEV_GRAY,
        },
        tagLine: {
          fontSize: 15,
          textAlign: "center",
          marginVertical: 15,
          color: Colors.DEV_GRAY,
        },
        pinkText: {
          color: Colors.DEV_PRIMARY,
        },
        btn: {
          backgroundColor: Colors.DEV_PRIMARY,
          padding: 10,
          borderRadius: 50,
          marginTop: 50,
        },
        whiteText: {
          color: "#fff",
          textAlign: "center",
        },
      });
