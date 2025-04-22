# Use the official Node.js image from DockerHub
FROM node:16

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the Strapi project
COPY . .

# Expose port 1337 (Strapi default port)
EXPOSE 1337

# Run Strapi when the container starts
CMD ["npm", "run", "develop"]
