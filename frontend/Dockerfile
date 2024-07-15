# Use the official Node.js image from the Docker Hub
FROM node:latest
# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the required packages
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Expose the port the app runs on
EXPOSE $PORT

# Start the application
CMD ["npm", "run", "preview", "--", "--port", "$PORT", "--host"]
