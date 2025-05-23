
# CP03 - Mobile  
System for Checkpoint 3 of Mobile Dev. classes in Software Engineering  

## Pre-requisites  

- [Node.js](https://nodejs.org/)  
- [npm](https://www.npmjs.com/)  
- [React Native CLI](https://reactnative.dev/docs/environment-setup)  
- [Android Studio](https://developer.android.com/studio)  

## Installation and Running  

1. Clone repo:  
```bash
git clone https://github.com/WhitePhrog/marcacaoDeConsultasMedicas.git
```  

2. Install dependencies:  
```bash
npm install
```  

3. Run application:  
```bash
npm run android
```  

## Application Screens  

Add images of the app screens here. Example:  

- Login Screen  
- Registration Screen  
- Dashboard Screen  
- Profile Screen  
- Appointment Creation Screen  
- User Management Screen  

## UX/UI Decisions  

### Visual Hierarchy  

The system uses a warm pastel color palette to create a welcoming and comfortable environment.  
Titles are emphasized with larger and bold text to guide users through the content.  
Primary actions are differentiated through highlighted buttons with distinct colors from the palette.  

### Navigation Flow  

The navigation is structured using `react-navigation` and `native-stack`, ensuring a seamless and intuitive user experience.  
Each user profile (admin, doctor, patient) has access to specific screens and features.  
User feedback is provided through status messages and loading indicators to improve usability and trust.  

### Accessibility  

High-contrast colors are used to ensure readability for all users.  
Consistent use of font sizes and the `Poppins` font across all text elements enhances clarity.  
Proper spacing between interactive elements improves usability, especially for users with motor difficulties.  

## Styling Library  

### Library Chosen: `styled-components` for React Native  

### Integration  

The project uses `ThemeProvider` to centralize the styling configuration, including colors, fonts, and spacing.  
Styled components are created for reusability and consistency across the application.  

### Advantages  

- Consistent visual style enforced through a shared theme.  
- Simplified maintenance, with changes applied globally via the `theme.ts` file.  
- Type-safe styling with TypeScript support.  
- Dynamic styling capabilities based on component props and state.  
- Clear separation between component logic and presentation for better code organization.  

## Conclusion  

The combination of deliberate UX/UI decisions and the structured use of `styled-components` results in an accessible, maintainable, and visually cohesive application suitable for medical appointment management.
