# FoodApp in React Native-EXPO

## Description

This is a Food Delivery App built using React Native-EXPO. The app allows users to browse menus, order food, and track their deliveries in a user-friendly interface. It utilizes various libraries to enhance the user experience and streamline functionality.

## Libraries and Tools

- **@react-navigation/native**: The core navigation library for managing screen transitions and routing within the app.
- **@react-navigation/native-stack**: Provides stack-based navigation, allowing screens to be pushed and popped in a seamless manner.
- **@reduxjs/toolkit**: A set of tools for efficient Redux development, including store setup, reducers, and middleware.
- **expo**: A framework and platform for universal React applications, simplifying development and deployment processes.
- **expo-status-bar**: A component for controlling the app's status bar appearance and behavior.
- **nativewind**: Offers Tailwind CSS-like utility classes for styling React Native components efficiently.
- **react-native-feather**: A collection of customizable SVG icons for use in the app's user interface.
- **react-native-gesture-handler**: Enhances touch gesture handling for more interactive user experiences.
- **react-native-maps**: Provides components for displaying maps and location-based features within the app.
- **react-native-safe-area-context**: Ensures that content is rendered within safe areas to account for device notches and status bars.
- **react-native-screens**: Optimizes navigation performance by utilizing native screen components for better transitions.
- **react-native-svg**: Adds support for scalable vector graphics (SVG), allowing for high-quality graphics in the app.
- **react-native-webview**: Enables the rendering of web content within the app, allowing for interactive experiences.
- **react-redux**: Facilitates integrating Redux with React components for effective state management.
- **reselect**: A library for creating memoized selectors, optimizing performance when selecting data from the Redux store.

## Preview

![]()

## Server

![Sanity.io](https://www.sanity.io/)

## Installation

To run the project locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/KamilErdogmus/RN-Food-App.git
```

2. Navigate to the project directory:

```bash
cd your-repository
```

3. Install dependencies:

#### Using npm

```bash
npm install
```

#### Using yarn

```bash
yarn install
```

If you're using MacOS, navigate to the ios folder and install CocoaPods dependencies:

```bash
cd ios
```

```bash
 pod install
```

```bash
 cd ..
```

## Step 1: Start the Metro Server

First, you'll need to start **Metro**, the JavaScript _bundler_ that comes with React Native.

To start Metro, run the following command from the _root_ of your React Native project:

#### Using npm

```bash
npm start
```

#### Using Yarn

```bash
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

#### Using npm

```bash
npm run android
```

#### Using Yarn

```bash
yarn android
```

### For iOS

##### using npm

```bash
npm run ios
```

#### Using Yarn

```bash
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.
