# Use the official Node.js image from DockerHub
FROM node:16

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy only package.json and package-lock.json to leverage Docker cache better
COPY package*.json ./

# Set environment variable for production
ENV NODE_ENV=production

# Install dependencies only for production environment
RUN npm install --production

# Copy the rest of the Strapi project
COPY . .

# Expose port 1337 (Strapi default port)
EXPOSE 1337

# Run Strapi when the container starts
CMD ["npm", "run", "develop"]

# Clean up unnecessary files (for production setup)
RUN npm prune --production

