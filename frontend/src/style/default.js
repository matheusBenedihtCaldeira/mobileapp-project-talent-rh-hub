// src/theme/theme.js
import { DefaultTheme } from 'react-native-paper';

// Suas cores personalizadas
const customColors = {
  primary: '#1e3a8a',
  accent: 'blue',
  background: 'white',
  surface: 'red',
  text: 'red',
  error: 'red',
  disabled: 'red',
  placeholder: 'red',
  backdrop: 'red',
};

// Unificando as cores com o DefaultTheme
const customTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors, // Mantém o restante das cores padrão do tema
    ...customColors,        // Sobrescreve as cores com as suas personalizadas
  },
};

export default customTheme;
