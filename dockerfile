# Use an official Node runtime as a parent image
FROM node:16

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json yarn.lock ./
RUN yarn install

# Copy the rest of the application code
COPY . .

# Build the application
RUN yarn build

# Expose the port on which the app runs
EXPOSE 3000

# Start the app
CMD ["yarn", "start"]
