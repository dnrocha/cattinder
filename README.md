```markdown
# CatTinder

CatTinder is a React Native application that allows users to browse and interact with cat profiles. This README provides an overview of the project structure, setup instructions, and testing procedures.

## Project Overview

CatTinder is built using React Native 0.75.3 and utilizes various libraries for navigation, state management, and UI components. The project is set up with TypeScript for type safety and Jest for unit testing.

## Getting Started

### Prerequisites

- Node.js (>=18)
- npm or yarn
- React Native CLI
- Xcode (for iOS development)
- Android Studio (for Android development)

### Installation

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
   or
   ```
   yarn install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add your API key:
   ```
   CATS_API_KEY=your_api_key_here
   ```

### Running the App

To start the app, run the following commands:

For iOS:
```
npm run ios
```

For Android:
```
npm run android
```

## Project Structure

The main components of the project are:

- `src/App.tsx`: The main application component
- `src/components/`: Contains reusable components like Card and Toogle
- `__tests__/`: Contains unit tests for components
- `__mocks__/`: Contains mock files for testing

## Testing

The project uses Jest and React Native Testing Library for unit testing. To run the tests, use the following command:

```
npm test
```

or

```
yarn test
```

### Test Files

1. Card Component Test:
```typescript:__tests__/card.test.tsx
startLine: 1
endLine: 31
```

2. Toogle Component Test:
```typescript:__tests__/toogle.test.tsx
startLine: 1
endLine: 34
```

### Jest Configuration

The Jest configuration can be found in:

```javascript:jest.config.js
startLine: 1
endLine: 11
```

## Key Dependencies

For a full list of dependencies and dev dependencies, refer to the `package.json` file.

## Contributing

Please read the CONTRIBUTING.md file (if available) for details on our code of conduct and the process for submitting pull requests.
