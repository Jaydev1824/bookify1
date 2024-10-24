# Use an official Node.js image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy all project files
COPY . .

# Build the project for production
RUN npm run build

# Expose the Next.js default port
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "start"]
