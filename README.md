what I have learnt:
1- SafeAreaView renders nested content and automatically applies padding to reflect the portion
of the view that is not covered by navigation bars, tab bars, toolbars, and other ancestor views.
Moreover, and most importantly, Safe Area's paddings reflect the physical limitations of the
screen, such as rounded corners or camera notches (i.e. the sensor housing area on iPhone 13) 
(only applicable to iOS devices with iOS version 11 or later.)
workaround to android: paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,

2- to investigate the actual implementation of each component if I wanted to create custom one ( as custom button )

3- create custom button
