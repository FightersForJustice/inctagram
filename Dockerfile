# Set the base image to node:16.14.0
FROM node:16.14.0 as dependencies

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and pnpm-lock.yaml to the container
COPY package.json pnpm-lock.yaml ./

# Install pnpm
RUN npm install -g pnpm

# Install project dependencies using pnpm
RUN pnpm install

# Use the same base image for the builder stage
FROM node:16.14.0 as builder

# Set the working directory to /app
WORKDIR /app

# Copy the entire project to the container
COPY . .

# Copy the node_modules from the dependencies stage to the container
COPY --from=dependencies /app/node_modules ./node_modules

# Build the project using pnpm
RUN pnpm build:production

# Use the same base image for the runner stage
FROM node:16.14.0 as runner

# Set the working directory to /app
WORKDIR /app

# Set the NODE_ENV to production
ENV NODE_ENV production

# If you are using a custom next.config.js file, uncomment this line.
# COPY --from=builder /app/next.config.js ./

# Copy the public, .next, node_modules, package.json to the container
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Expose port 3000
EXPOSE 3000

# Start the application using pnpm
CMD ["pnpm", "start"]
