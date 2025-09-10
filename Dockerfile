# Stage 1: Build the Next.js app
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package.json + lock file first (for caching)
COPY package*.json ./
RUN npm install

# Copy rest of the app
COPY . .

# Build the Next.js app
RUN npm run build

# Stage 2: Run the app
FROM node:18-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

# Copy only the necessary files from builder
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.ts ./next.config.ts

# Expose Next.js default port
EXPOSE 3000

# Start Next.js on port 3001
CMD ["npm", "start", "--", "-p", "3000"]
