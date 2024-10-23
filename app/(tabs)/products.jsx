import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React from 'react'
import { TextInput, Button, Searchbar } from "react-native-paper";
import { Colors} from "@/constants/Colors";


export default function products() {
  return (
    <ScrollView style={styles.container}>
      
      <View style={styles.logoContainer}>
<Image style={styles.topLogo} source={require("../../assets/images/casadolcelogo.png")} />
<Searchbar style={styles.searchBar}
      placeholder="Search"
      
    />
    </View>

    <View style={styles.listProduct}>
      <Text style={styles.title}>
            All Products
          </Text>

          <View style={styles.grid}>

 <View style={styles.productInfo} >
    <Image style={styles.productImg} source={require("../../assets/images/blueberrie.jpg")} />
    <Text style={{fontWeight: 'bold', fontSize: 15 }}> Blue</Text>
    <Text style={{fontWeight: 'medium', fontSize: 15, color: Colors.DEV_PRIMARY }}> $1.99</Text>
    </View>

    <View style={styles.productInfo} >
    <Image style={styles.productImg} source={require("../../assets/images/calabaza.jpg")} />
    <Text style={{fontWeight: 'bold', fontSize: 15 }}> Calabaza</Text>
    <Text style={{fontWeight: 'medium', fontSize: 15, color: Colors.DEV_PRIMARY }}> $2.00</Text>
    </View>

    <View style={styles.productInfo} >
    <Image style={styles.productImg} source={require("../../assets/images/Cheetos.jpg")} />
    <Text style={{fontWeight: 'bold', fontSize: 15 }}> Cheetos</Text>
    <Text style={{fontWeight: 'medium', fontSize: 15, color: Colors.DEV_PRIMARY }}> $2.75</Text>
    </View>

    <View style={styles.productInfo} >
    <Image style={styles.productImg} source={require("../../assets/images/cherrygomi.jpg")} />
    <Text style={{fontWeight: 'bold', fontSize: 15 }}> Cherry Gommi</Text>
    <Text style={{fontWeight: 'medium', fontSize: 15, color: Colors.DEV_PRIMARY }}> $1.00</Text>
    </View>

    <View style={styles.productInfo} >
    <Image style={styles.productImg} source={require("../../assets/images/corncandy.jpg")} />
    <Text style={{fontWeight: 'bold', fontSize: 15 }}> Corn Candy</Text>
    <Text style={{fontWeight: 'medium', fontSize: 15, color: Colors.DEV_PRIMARY }}> $2.99</Text>
    </View>

    <View style={styles.productInfo} >
    <Image style={styles.productImg} source={require("../../assets/images/creamycandy.jpg")} />
    <Text style={{fontWeight: 'bold', fontSize: 15 }}> Creamy Candy</Text>
    <Text style={{fontWeight: 'medium', fontSize: 15, color: Colors.DEV_PRIMARY }}> $4.99</Text>
    </View>

    <View style={styles.productInfo} >
    <Image style={styles.productImg} source={require("../../assets/images/doritos.jpg")} />
    <Text style={{fontWeight: 'bold', fontSize: 15 }}> Doritos</Text>
    <Text style={{fontWeight: 'medium', fontSize: 15, color: Colors.DEV_PRIMARY }}> $5.99</Text>
    </View>

    <View style={styles.productInfo} >
    <Image style={styles.productImg} source={require("../../assets/images/duvalin.jpg")} />
    <Text style={{fontWeight: 'bold', fontSize: 15 }}> Duvalin</Text>
    <Text style={{fontWeight: 'medium', fontSize: 15, color: Colors.DEV_PRIMARY }}> $4.00</Text>
    </View>

    <View style={styles.productInfo} >
    <Image style={styles.productImg} source={require("../../assets/images/flag.jpg")} />
    <Text style={{fontWeight: 'bold', fontSize: 15 }}> Cotton Candy</Text>
    <Text style={{fontWeight: 'medium', fontSize: 15, color: Colors.DEV_PRIMARY }}> $.99</Text>
    </View>

    <View style={styles.productInfo} >
    <Image style={styles.productImg} source={require("../../assets/images/kitkat.jpg")} />
    <Text style={{fontWeight: 'bold', fontSize: 15 }}> KitKat</Text>
    <Text style={{fontWeight: 'medium', fontSize: 15, color: Colors.DEV_PRIMARY }}> $2.99</Text>
    </View>

    <View style={styles.productInfo} >
    <Image style={styles.productImg} source={require("../../assets/images/konpeito.jpg")} />
    <Text style={{fontWeight: 'bold', fontSize: 15 }}> Konpeito</Text>
    <Text style={{fontWeight: 'medium', fontSize: 15, color: Colors.DEV_PRIMARY }}> $1.99</Text>
    </View>

    <View style={styles.productInfo} >
    <Image style={styles.productImg} source={require("../../assets/images/paletapayaso.jpg")} />
    <Text style={{fontWeight: 'bold', fontSize: 15 }}> Paleta Payaso</Text>
    <Text style={{fontWeight: 'medium', fontSize: 15, color: Colors.DEV_PRIMARY }}> $6.00</Text>
    </View>

    <View style={styles.productInfo} >
    <Image style={styles.productImg} source={require("../../assets/images/panditas.jpg")} />
    <Text style={{fontWeight: 'bold', fontSize: 15 }}> panditas</Text>
    <Text style={{fontWeight: 'medium', fontSize: 15, color: Colors.DEV_PRIMARY }}> $2.99</Text>
    </View>

    <View style={styles.productInfo} >
    <Image style={styles.productImg} source={require("../../assets/images/peach.jpg")} />
    <Text style={{fontWeight: 'bold', fontSize: 15 }}> Nippon Peach</Text>
    <Text style={{fontWeight: 'medium', fontSize: 15, color: Colors.DEV_PRIMARY }}> $2.00</Text>
    </View>

    <View style={styles.productInfo} >
    <Image style={styles.productImg} source={require("../../assets/images/pez.jpg")} />
    <Text style={{fontWeight: 'bold', fontSize: 15 }}> Samanco</Text>
    <Text style={{fontWeight: 'medium', fontSize: 15, color: Colors.DEV_PRIMARY }}> $3.99</Text>
    </View>

    <View style={styles.productInfo} >
    <Image style={styles.productImg} source={require("../../assets/images/popcorn.jpg")} />
    <Text style={{fontWeight: 'bold', fontSize: 15 }}> PopCorn</Text>
    <Text style={{fontWeight: 'medium', fontSize: 15, color: Colors.DEV_PRIMARY }}> $4.00</Text>
    </View>

    <View style={styles.productInfo} >
    <Image style={styles.productImg} source={require("../../assets/images/potchi.jpg")} />
    <Text style={{fontWeight: 'bold', fontSize: 15 }}> Potchi</Text>
    <Text style={{fontWeight: 'medium', fontSize: 15, color: Colors.DEV_PRIMARY }}> $3.99</Text>
    </View>

    <View style={styles.productInfo} >
    <Image style={styles.productImg} source={require("../../assets/images/rellerindos.jpg")} />
    <Text style={{fontWeight: 'bold', fontSize: 15 }}> Rellerindos</Text>
    <Text style={{fontWeight: 'medium', fontSize: 15, color: Colors.DEV_PRIMARY }}> $2.99</Text>
    </View>

    <View style={styles.productInfo} >
    <Image style={styles.productImg} source={require("../../assets/images/skwinkles.jpg")} />
    <Text style={{fontWeight: 'bold', fontSize: 15 }}> Skwinkles</Text>
    <Text style={{fontWeight: 'medium', fontSize: 15, color: Colors.DEV_PRIMARY }}> $5.99</Text>
    </View>

    <View style={styles.productInfo} >
    <Image style={styles.productImg} source={require("../../assets/images/Sour Gommi.jpg")} />
    <Text style={{fontWeight: 'bold', fontSize: 15 }}> Sour Gommi</Text>
    <Text style={{fontWeight: 'medium', fontSize: 15, color: Colors.DEV_PRIMARY }}> $4.25</Text>
    </View>

    <View style={styles.productInfo} >
    <Image style={styles.productImg} source={require("../../assets/images/surprise.jpg")} />
    <Text style={{fontWeight: 'bold', fontSize: 15 }}> Surprise</Text>
    <Text style={{fontWeight: 'medium', fontSize: 15, color: Colors.DEV_PRIMARY }}> $5.99</Text>
    </View>

    <View style={styles.productInfo} >
    <Image style={styles.productImg} source={require("../../assets/images/takis.jpg")} />
    <Text style={{fontWeight: 'bold', fontSize: 15 }}> Takis</Text>
    <Text style={{fontWeight: 'medium', fontSize: 15, color: Colors.DEV_PRIMARY }}> $3.00</Text>
    </View>

    </View>

      </View>


    </ScrollView>

  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",

  },
  logoContainer:{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  topLogo: {
    height: 150,
    width:150,
    
  },
  searchBar:{
    backgroundColor: "#f5e5df",
    marginTop: -10,
    marginBottom: 20,
  },
  grid:{
    flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',

      
  },
  title: {
    fontWeight: 'bold',
    color: Colors.DEV_DARK,
    fontSize: 20,
    marginBottom: 10,
    marginTop: 20,
  },
  listProduct:{
    marginBottom: -10,
    marginTop: -20,
    
  },productInfo:{
    width: 150,
    height: 225,
    
    marginBottom: 25,
  },
  productImg: {
    width: 150,
    height: 150,
    borderRadius: 20,
    marginBottom: 10,
  },
});