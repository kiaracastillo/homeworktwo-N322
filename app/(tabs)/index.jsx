import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React from 'react'
import { TextInput, Button, Searchbar } from "react-native-paper";
import { Colors} from "@/constants/Colors";
import products from './products';
import { Link } from 'expo-router';

export default function index() {
  return (
    
    <ScrollView style={styles.container}>
<View style={styles.logoContainer}>
<Image style={styles.topLogo} source={require("../../assets/images/casadolcelogo.png")} />
<Searchbar style={styles.searchBar}
      placeholder="Search"
      
    />
    </View>

    <View style={styles.links}>
    <Button style={styles.btn} mode="outlined" onPress={() => console.log('Pressed')}>
        <Text style={styles.whiteText}>Sweet</Text>
      </Button>
      <Button style={styles.btn} mode="outlined" onPress={() => console.log('Pressed')}>
        <Text style={styles.whiteText}>Sour</Text>
      </Button>
      <Button style={styles.btn} mode="outlined" onPress={() => console.log('Pressed')}>
        <Text style={styles.whiteText}>Spicy</Text>
      </Button>
      <Button style={styles.btn} mode="outlined" onPress={() => console.log('Pressed')}>
        <Text style={styles.whiteText}>Salty</Text>
      </Button>

    </View>

    <View style={styles.anuncio}>

    <Image style={styles.banner} source={require("../../assets/images/banner.png")} />
      </View>

      <View style={styles.parteUnoGrid}>

          <Text style={styles.title}>
            Popular
          </Text>

          <View style={styles.grid1}>

          <View style={styles.product} >
    <Image style={styles.productI} source={require("../../assets/images/kitkat.jpg")} />
    <Text style={{fontWeight: 'bold', fontSize: 15 }}> Dino Taco</Text>
    <Text style={{fontWeight: 'medium', fontSize: 15, color: Colors.DEV_PRIMARY }}> $2.99</Text>
    </View>

    <View style={styles.product} >
    <Image style={styles.productI} source={require("../../assets/images/creamycandy.jpg")} />
    <Text style={{fontWeight: 'bold', fontSize: 15 }}> Creamy Candy</Text>
    <Text style={{fontWeight: 'medium', fontSize: 15, color: Colors.DEV_PRIMARY }}> $4.99</Text>
    </View>

    </View>

      </View>

      <View style={styles.parteDos}>

      <Text style={styles.title}>
            Halloween
          </Text>

          <View style={styles.grid1}>

          <View style={styles.product} >
    <Image style={styles.productI} source={require("../../assets/images/surprise.jpg")} />
    <Text style={{fontWeight: 'bold', fontSize: 15 }}> Surprise Halloween</Text>
    <Text style={{fontWeight: 'medium', fontSize: 15, color: Colors.DEV_PRIMARY }}> $5.99</Text>
    </View>

    <View style={styles.product} >
    <Image style={styles.productI} source={require("../../assets/images/calabaza.jpg")} />
    <Text style={{fontWeight: 'bold', fontSize: 15 }}> Calabaza</Text>
    <Text style={{fontWeight: 'medium', fontSize: 15, color: Colors.DEV_PRIMARY }}> $3.99</Text>
    </View>

    </View>

      </View>

      <View style={styles.titlesale}>
      <Text style={styles.title}>
            Big Sale!
          </Text>
          </View>
      <View style={styles.partecuatro}>
      
          <View style={styles.bigSale}>
          <Image style={styles.promo} source={require("../../assets/images/casadolcelogo.png")} />
    <Text  style={styles.promoText}> 50% OFF </Text>
    <Text  style={styles.promoText2}> Don't miss on our exclusive offers on purchases of $100 or more! </Text>
    <Link href="/products" style={styles.promoButton}>
    Buy
      </Link>

          </View>

      </View>

      <View style={styles.parteTres}>
      <Text style={styles.title}>
            Low Inventory
          </Text>

          <View style={styles.grid}>

          <View style={styles.product} >
    <Image style={styles.productI} source={require("../../assets/images/konpeito.jpg")} />
    <Text style={{fontWeight: 'bold', fontSize: 15 }}> Konpeito</Text>
    <Text style={{fontWeight: 'medium', fontSize: 15, color: Colors.DEV_PRIMARY }}> $1.99</Text>
    </View>

    <View style={styles.product} >
    <Image style={styles.productI} source={require("../../assets/images/paletapayaso.jpg")} />
    <Text style={{fontWeight: 'bold', fontSize: 15 }}> Paleta Payaso</Text>
    <Text style={{fontWeight: 'medium', fontSize: 15, color: Colors.DEV_PRIMARY }}> $2.00</Text>
    </View>

    <View style={styles.product} >
    <Image style={styles.productI} source={require("../../assets/images/pez.jpg")} />
    <Text style={{fontWeight: 'bold', fontSize: 15 }}> Samanco</Text>
    <Text style={{fontWeight: 'medium', fontSize: 15, color: Colors.DEV_PRIMARY }}> $3.99</Text>
    </View>

    <View style={styles.product} >
    <Image style={styles.productI} source={require("../../assets/images/potchi.jpg")} />
    <Text style={{fontWeight: 'bold', fontSize: 15 }}> Potchi</Text>
    <Text style={{fontWeight: 'medium', fontSize: 15, color: Colors.DEV_PRIMARY }}> $5.00</Text>
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
  btn: {
    borderColor: Colors.DEV_PRIMARY,
    color: Colors.DEV_PRIMATY,
    backgroundColor: '#fff',
    width: "23%",
    fontWeight: 'bold',

  },
  whiteText: {
    color: Colors.DEV_PRIMARY,
    textAlign: "center",
    fontSize: 10,
  },
  links: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

  },
  anuncio: {
    width: "100%",
    marginTop: 20,
  },
  banner: {
    width: "100%",
    height: 200,
    borderRadius: 30,

  },
  parteUnoGrid: {
    marginBottom: -10,
    marginTop: 20,

  },
  title: {
    fontWeight: 'bold',
    color: Colors.DEV_DARK,
    fontSize: 20,
    marginBottom: 10,
  },
  grid1: {
    flexDirection: 'row',
    justifyContent: 'space-between',

  
  },
  product:{
    width: 150,
    height: 225,
    
    marginBottom: 25,
  },
  productI: {
    width: 150,
    height: 150,
    borderRadius: 20,
    marginBottom: 10,
  },
  parteDos: {
    marginBottom: 20,
    marginTop: 20,

  },

  parteTres:{
    marginBottom: -10,
    marginTop: -20,
    
  },
  grid:{
    flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',

      
  },
  bigSale: {
    width: "100%",
    backgroundColor: Colors.DEV_CLARO,
    borderRadius: 30,
    height: 250,
    padding:20,
    justifyContent: 'center',
alignContent: 'center',
alignItems: 'center',


  },
  partecuatro:{
    marginBottom: -10,
    marginTop: -20,
    height: 400,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    
  },
  promo:{
    width: 100,
height: 80,


  },
  promoText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: Colors.DEV_DARK,
    fontSize: 20,

  },
  promoText2:{
    textAlign: 'center',
    fontWeight: 'light',
    color: Colors.DEV_GRAY,
    marginTop:5,

  },
  titlesale: {
marginBottom: -40,
  },
  promoButton: {
    backgroundColor: "#fff",
        textAlign: "center",
        width: '50%',
        height: 30,
        borderRadius: 20,
        textDecorationLine: 'underline',
        fontWeight: 'bold',
        color: Colors.DEV_DARK,
        marginTop:5,
  }
  ,

});