import React from 'react'; // Importa as tags do React
import{
  Text,
  Image,
  View,
  TouchableOpacity,
  TouchableOpacityProps} from 'react-native'; // Importa as tags do ReactNative especificas

import DiscordImg from '../../assets/discord.png'; // Importa a Imagem do Discord
import { styles } from './style';  // Importa o Estilo

type Props = TouchableOpacityProps & { // Cria a propriedades
  title: string;
  
}

export function ButtonIcon({ title, ...rest} : Props){ // cria a função do ButtonIcon com as propriedade do title e o restante
  return( // retorna o codigo
    <TouchableOpacity // Cria um botão com opacidade, dentro dele está o estilo do container a as propridades
    style={styles.container} {...rest}>
      <View style={styles.iconWrapper}>
        <Image source={DiscordImg} style={styles.icon}/>
      </View>

      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity> // Dentro tem um view onde agrupa os icones e os estilos dos icones e também tem os texto com estilo titulo e a propridade de titulo
  );
}