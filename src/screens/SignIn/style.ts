import { StyleSheet } from "react-native"; // importa o StyleSheet do React Native
import { theme } from "../../global/styles/theme"; // importa o theme 


export const styles = StyleSheet.create({ // cria uma const styles com os estilo
  container: {
    flex: 1,
    justifyContent: 'center'  ,
    alignItems: 'center',
    backgroundColor: theme.colors.background
  },

  image:{
    width: '100%',
    height:  360,
  },

  content:{
    marginTop: -40,
    paddingHorizontal: 50
  },

  title:{
    color: theme.colors.heading,
    textAlign: 'center',
    fontSize: 40,
    marginBottom: 16
  },

  subtitle:{
    color: theme.colors.heading,
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 64,
  }
})
