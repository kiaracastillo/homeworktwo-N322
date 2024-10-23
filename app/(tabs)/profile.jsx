import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Button, Divider } from 'react-native-paper'
import { Colors} from "@/constants/Colors";
import { useClerk } from '@clerk/clerk-expo';
import { useNavigation } from 'expo-router';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function profile() {
  const { signOut } = useClerk();
  const navigation = useNavigation();

  const handleSignOut = async () => {
    try{
      await signOut();
      navigation.replace("index");

    }catch (error) {
      console.log("sign out error", error);
    }
  };

  return (
    <View style={styles.container}>

        <View style={styles.profile}>

        <Image style={styles.profileImg} source={require("../../assets/images/profile.png")} />
        <Text style={styles.userName}> User Name</Text>

        </View>

        <View style={styles.profileInfo}>

<View style={styles.aligninfo}>
            <Text style={styles.info}>
              Edit Profile
            </Text>
            
            <AntDesign name="rightcircleo" size={24} color="#F28563" />
            </View>
            <Divider />

            <View style={styles.aligninfo}>
            <Text style={styles.info}>
            Notification
            </Text>
            <AntDesign name="rightcircleo" size={24} color="#F28563" />
            </View>
            <Divider />

            <View style={styles.aligninfo}>
            <Text style={styles.info}>
               Email 
            </Text>
            <AntDesign name="rightcircleo" size={24} color="#F28563" />
            </View>
            <Divider />

            <View style={styles.aligninfo}>
            <Text style={styles.info}>
                Password
            </Text>
            <AntDesign name="rightcircleo" size={24} color="#F28563" />
            </View>
            <Divider />

            <Text style={styles.info2}>
              Delete Account
            </Text>

        </View>
      
      <View style={styles.btn}>
      <Button style={styles.btn} mode="outlined" onPress={handleSignOut}>
        <Text style={styles.whiteText}>Sign Out</Text>
      </Button>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  btn: {
    backgroundColor: Colors.DEV_PRIMARY,
    borderRadius: 30,
    
    color: "#fff",
    
    
  },
  whiteText: {
    color: "#fff",
    textAlign: "center",
  },
  profile: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 60,

  },
  profileImg: {
    width: 150,
    height: 150,
    borderRadius: 75,

  },
  userName:{
    fontWeight: 'semibold',
    fontSize: 30,
    marginTop: 10,

  },
  profileInfo: {
    display: 'flex',
   
    
  },
  info2: {
    fontSize: 15,
    marginTop: 10,
    color: Colors.DEV_PRIMARY,
    marginBottom: 70,
  },
  info: {
    
    fontSize: 15,
    marginBottom: 10,
    marginTop: 10,
    
    
  },
  aligninfo: {
    flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      padding: 10,
  },

});