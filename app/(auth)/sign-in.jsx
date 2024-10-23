import { StyleSheet, Text, View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import React from 'react';
import { useSignIn } from '@clerk/clerk-expo';
import { useRouter, Link } from 'expo-router';
import { Colors} from "@/constants/Colors";

export default function SignIn() {
  const { signIn, setActive, isLoaded } = useSignIn();
  const router = useRouter();

  const [emailAddress, setEmailAddress] = React.useState();
  const [password, setPassword] = React.useState();

  const onSignIn = React.useCallback(async () => {
    if(!isLoaded) {
      return;
    }
    try{
      const signInAttempt = await signIn.create({
        identifier: emailAddress,
        password: password,
      });

      if (signInAttempt.status === "complete") {
        await setActive({
          session: signInAttempt.createdSessionId,
        });
        router.push("/(tabs");
      }else {
        console.error(JSON.stringify(signInAttempt, null, 2));
        
      }

    } catch (err) {
      console.error("Sig in err", err + " ", JSON.stringify(err, null, 2));
    }
  }, [isLoaded, emailAddress, password]);

  return (
    <View style={styles.container}>
      <View style={styles.signInArea}>
      <TextInput 
              autoCapitalize="none"
              value={emailAddress}
              keyboardType="email-address"
              placeholder="Email address"
              onChangeText={setEmailAddress}
              style={styles.input}
              />
              <TextInput 
              value={password}
              placeholder="Password"
              secureTextEntry={true}
              onChangeText={setPassword}
              style={styles.input}
              />
              <Button style={styles.btn} mode="outlined" onPress={onSignIn}>
                <Text style={styles.btnText}>Sign In</Text>
              </Button>
              </View>
              <View style={styles.needAccount}>
                <Text>Don't have an account?</Text>
                <Link style={styles.signUpButton} href="/sign-up">
                <Text>Sign Up</Text>
                </Link>
              </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    display: "flex",
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#fff",
   
  }, 
  signInArea: {
    marginBottom: 20,
  },
  needAccount: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

  },
  signUpButton: {
    marginTop: 20,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 50,
    paddingRight: 50,
    backgroundColor: '#fff',
    borderRadius: 50,
    color: Colors.DEV_PRIMARY,
  },
  input:{
    marginBottom: 20,
    backgroundColor: "#fff",
  },
  btn: {
    backgroundColor: Colors.DEV_PRIMARY,
    borderRadius: 30,
  },
  btnText: {
    color: '#fff',
  },
});