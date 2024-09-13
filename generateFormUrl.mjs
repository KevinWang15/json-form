import fs from 'fs';
import {Buffer} from 'buffer';

// Get the schema file path from command-line arguments
const schemaFilePath = process.argv[2];
if (!schemaFilePath) {
    console.error('Usage: node generateFormUrl.mjs <schema-file>');
    process.exit(1);
}

// Read the schema file
fs.readFile(schemaFilePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading schema file:', err);
        process.exit(1);
    }

    try {
        // Parse the JSON schema
        const schema = JSON.parse(data);
        const schemaString = JSON.stringify(schema);

        // Encode the schema using URL-safe Base64
        const encodedSchema = Buffer.from(
            encodeURIComponent(schemaString)
        ).toString('base64');

        // Generate the URL
        const url = `/form?schema=${encodedSchema}`;
        console.log(url);
    } catch (error) {
        console.error('Invalid JSON schema:', error);
        process.exit(1);
    }
});
