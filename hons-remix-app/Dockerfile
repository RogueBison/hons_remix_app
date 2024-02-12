FROM node:18-alpine AS base
 
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
 
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build && npm cache clean --force
 
FROM base AS runner
WORKDIR /app
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 remix
COPY --from=builder /app .
ENV CONNECTION_STRING=mongodb+srv://martin:i9EfmuZwYYCQbQcR@honsmern.3344tqy.mongodb.net/sample_mflix?retryWrites=true&w=majority
USER remix
EXPOSE 8080
ENV PORT 8080
# set hostname to localhost
ENV HOSTNAME "0.0.0.0"
CMD ["npm", "run", "start"]