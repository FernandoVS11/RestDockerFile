FROM node:18-alpine AS builder

COPY package.json package-lock.json ./

RUN npm ci --omit=dev

COPY . .

FROM node:18-alpine

COPY --from=builder . .

EXPOSE 80

CMD ["npm", "start"]
