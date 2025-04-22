# Base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json ./
COPY package-lock.json ./

# Install dependencies
RUN npm install

# Copy all source files
COPY . .

# Expose Strapi's default port
EXPOSE 1337

# Build admin panel (optional if already built)
RUN npm run build

# Start Strapi in production mode
CMD ["npm", "run", "start"]
