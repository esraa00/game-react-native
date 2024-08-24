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

