# Phonebook Application

This is a simple phonebook application built using React. It allows you to add, filter, and delete contacts from your phonebook. The application uses the `personService` module to interact with the backend API for managing the phonebook data.

## Prerequisites

Before running the application, ensure that you have the following dependencies installed:

- Node.js
- React

## Usage

1. Clone the repository or download the source code files.
2. Open a terminal or command prompt and navigate to the project directory.
3. Install the dependencies by running the command: `npm install`.
4. Start the application by running the command: `npm start`.
5. Open your web browser and visit `http://localhost:3000` to access the phonebook application.

## Features

The phonebook application provides the following features:

- View a list of contacts with their names and phone numbers.
- Add a new contact by entering their name and phone number.
- Filter the contacts by searching for a specific name.
- Delete a contact from the phonebook.

## Components

The application consists of the following React components:

- **App**: The main component that represents the phonebook application. It manages the state of the contacts, new contact form inputs, and the filter input. It also handles the API calls for retrieving, adding, and deleting contacts.
- **Form**: A reusable component that displays a form for adding a new contact. It includes input fields for the contact's name and phone number.
- **Filter**: A component that displays a filtered list of contacts based on the search filter. It also provides a button to delete a contact from the phonebook.

## Backend API

The application interacts with a backend API to manage the phonebook data. The `personService` module encapsulates the API calls for retrieving, adding, and deleting contacts. Make sure you have the backend API set up and running correctly to ensure proper functionality of the application.

## Note

- This is a basic implementation of a phonebook application and does not include features like user authentication or data persistence. It serves as a starting point for building more advanced phonebook applications.
- You can customize and extend the application according to your requirements by modifying the existing components or adding new ones.

Enjoy using the Phonebook Application! Feel free to reach out if you have any questions or need further assistance.
