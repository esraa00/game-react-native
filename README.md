 <img src="./assets/images/1.jpeg" width="350">
 <img src="./assets/images/2.jpeg" width="350">
 <img src="./assets/images/3.jpeg" width="350">
 <img src="./assets/images/4.jpeg" width="350">
 <img src="./assets/images/5.jpeg" width="350">
 <img src="./assets/images/6.jpeg" width="350">

## What I Have Learned

1. **SafeAreaView**

   - **Functionality**: Renders nested content and automatically applies padding to reflect the portion of the view that is not covered by navigation bars, tab bars, toolbars, and other ancestor views.
   - **Key Point**: SafeArea's padding reflects the physical limitations of the screen, such as rounded corners or camera notches (e.g., the sensor housing area on iPhone 13). This feature is applicable only to iOS devices with iOS version 11 or later.
   - **Android Workaround**:
     ```javascript
     paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
     ```

2. **Component Investigation**

   - To create custom components (e.g., a custom button), it's important to investigate the actual implementation of each existing component. This helps in understanding the default behavior and how to tailor the custom component accordingly.

3. **Creating a Custom Button**

4. **Reusability of CSS Values**: in CSS we can use variables, but since styling in react-native is not done by CSS, we create a helper file that exposes certain constant values like the colors we are using in our app

5. **How to add icons using @expo/vector-icons library**

- **steps**: 1. import the type of icons required: import { Ionicons } from '@expo/vector-icons'; 2. use it as website showed: <Ionicons name='add' size={24} color='white' />

6. **How to add Custom Fonts using expo-font library**

- **steps**: 1. install the library using npx expo install expo-font 2. add your font files inside assets/fonts 3. in App.js, add a mapper for each font name with the corresponding import of the font file
  const [loaded] = useFonts({
  'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
  'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  }); 4. use the font in your component like this: fontFamily: open-sans

7. **How to add Splash Screen using expo-splash-screen library**

8. **Hightlight Text inside another text**

9. **Text component can be inside another text component, but I can't nest another component type inside**

execute platform-specific code using platform Api and file naming
adjust to different screen sizes: minWith, maxWidth, DimensionsApi, useWindowDimensions
build adaptive components
