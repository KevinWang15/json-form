# JSON Schema Form Generator

## Overview

This project is a React application that generates dynamic forms based on provided JSON Schemas. It allows users to create forms that others can fill out without needing to understand the underlying schema or code. After filling out the form, users can easily export their responses as JSON data, which can be sent back to the form creator or used elsewhere.

DEMO [here](https://json-form.ke.wang/form?schema=JTdCJTIydGl0bGUlMjIlM0ElMjJDYXJvdXNlbCUyMiUyQyUyMnR5cGUlMjIlM0ElMjJvYmplY3QlMjIlMkMlMjJwcm9wZXJ0aWVzJTIyJTNBJTdCJTIyc2xpZGVzJTIyJTNBJTdCJTIydHlwZSUyMiUzQSUyMmFycmF5JTIyJTJDJTIyaXRlbXMlMjIlM0ElN0IlMjJ0eXBlJTIyJTNBJTIyb2JqZWN0JTIyJTJDJTIydGl0bGUlMjIlM0ElMjJTbGlkZSUyMiUyQyUyMnByb3BlcnRpZXMlMjIlM0ElN0IlMjJ0ZXh0JTIyJTNBJTdCJTIydHlwZSUyMiUzQSUyMnN0cmluZyUyMiUyQyUyMmRlc2NyaXB0aW9uJTIyJTNBJTIyVGhlJTIwdGV4dCUyMGNvbnRlbnQlMjBvZiUyMHRoZSUyMHNsaWRlLiUyMiU3RCUyQyUyMmltYWdlJTIyJTNBJTdCJTIydHlwZSUyMiUzQSUyMnN0cmluZyUyMiUyQyUyMmZvcm1hdCUyMiUzQSUyMnVyaSUyMiUyQyUyMmRlc2NyaXB0aW9uJTIyJTNBJTIyVGhlJTIwVVJMJTIwb2YlMjB0aGUlMjBpbWFnZSUyMGRpc3BsYXllZCUyMG9uJTIwdGhlJTIwc2xpZGUuJTIyJTdEJTJDJTIybGluayUyMiUzQSU3QiUyMnR5cGUlMjIlM0ElMjJzdHJpbmclMjIlMkMlMjJmb3JtYXQlMjIlM0ElMjJ1cmklMjIlMkMlMjJkZXNjcmlwdGlvbiUyMiUzQSUyMlRoZSUyMFVSTCUyMHRvJTIwbmF2aWdhdGUlMjB0byUyMHdoZW4lMjB0aGUlMjBzbGlkZSUyMGlzJTIwY2xpY2tlZC4lMjIlN0QlN0QlMkMlMjJyZXF1aXJlZCUyMiUzQSU1QiUyMnRleHQlMjIlMkMlMjJpbWFnZSUyMiUyQyUyMmxpbmslMjIlNUQlN0QlN0QlN0QlMkMlMjJyZXF1aXJlZCUyMiUzQSU1QiUyMnNsaWRlcyUyMiU1RCU3RA==).

## Features

- **Dynamic Form Creation:** Generate interactive forms from any valid JSON Schema.
- **Easy Sharing:** Send the form link to anyone; no installation or setup required on the user's end.
- **User-Friendly Interface:** Simplified form filling experience with validation and error handling.
- **JSON Data Export:** Users can export their filled form data as JSON for easy sharing or processing.
- **Data Restoration:** Ability to restore form data from a JSON input, allowing users to resume or edit previous entries.

## Getting Started

### Prerequisites

- **Node.js and npm:** Ensure you have Node.js and npm installed. You can download them from [nodejs.org](https://nodejs.org/).

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/KevinWang15/json-form.git
   cd json-form
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

### Running the Application

Start the development server:

```bash
npm start
```

Open your browser and navigate to `http://localhost:5173` to view the application.

## Usage

### Generating and Sharing a Form

1. **Prepare a JSON Schema:**

    - Create or obtain a valid JSON Schema that defines the structure of the form you want to generate.

2. **Encode the Schema:**

    - Run the following script

      ```bash
      node generateFormUrl.mjs ./your-json-schema.json
      ```

3. **Share the Form URL:**

    - Send the generated `formUrl` to anyone who needs to fill out the form.

## License

This project is licensed under the [MIT License](LICENSE).
