import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({ // cria o estilo styles com as propriedades dentro

  container:{ // cria as configurações de edição
    width: '100%',
    height: 56,
    backgroundColor: theme.colors.primary,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems:'center',
  },
  title:{ // cria as configurações de edição
    flex: 1,
    color: theme.colors.heading,
    fontSize: 15,
    textAlign: 'center',
  },

  iconWrapper:{ // cria as configurações de edição
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1, 
    borderColor: theme.colors.line  
  },

  icon:{ // cria as configurações de edição
    width: 24,
    height: 18
  }

});
