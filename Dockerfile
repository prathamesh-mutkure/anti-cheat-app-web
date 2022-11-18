FROM node:16
WORKDIR /app
COPY . /app
RUN npm install --legacy-peer-deps
EXPOSE 3000
# CMD npm run build
CMD npm start