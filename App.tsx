import React from 'react' // Faz a importação do Documento do React
import {SignIn} from './src/screens/SignIn' // faz a importação do Arquivo da tela SignIn ( Função )

export default function App(){ // Define o App como a função default
  return( // retorna o valor do codigo
    <SignIn/> // Pega a função SignIn e executa
  );
}