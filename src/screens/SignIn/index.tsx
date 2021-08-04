import React from 'react' // importação do React
import { 
  View, 
  Text,
  Image,
  StatusBar,
  } from 'react-native' // Importação do ReactNative com as tags necessarias dentro

import { ButtonIcon } from '../../components/ButtonIcon' // importação da tela de ButtonIcon
import IllustrationImg from '../../assets/illustration.png' // importação da ilustração
import { styles } from './style' // importação do estilo

export function SignIn(){ // função da tela de Login

  return( // retorna valor
    
    // Criado um grupo com estilo container, barstyle= deixa branco, backgroundColor está transparente e translucent deixa translucido os icones na barra
   <View style={styles.container}>
  <StatusBar 
  barStyle="light-content"
  backgroundColor="transparent"
  translucent
  />

    <Image //Aqui o sorce irá pegar a imagem importada, o styles irá pegar o estilo da image,e resizemode 
    source={IllustrationImg}
    style={styles.image}
    resizeMode="stretch"/ /* Estica a imagem */>

    <View style={styles.content}/*Cria um grupo e coloca o estilo content*/>
      <Text style={styles.title}>Organize{`\n`}suas jogatinas{`\n`}facilmente</Text> 

      <Text style= {styles.subtitle}>
      Crie grupos para jogar seus jogos{`\n`}
      favoritos com seus amigos
      </Text>

      <ButtonIcon // Pega a função ButtonIcon importada define o titulo e opacidade quando clika
      title="Entrar com Discord"
      activeOpacity={0.7}
      />

    </View>
   </View>
  );
}