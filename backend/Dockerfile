FROM strapi/strapi

ENV YARN_VERSION 1.13.0

#setting up working directory
WORKDIR /usr/src/app

#RUN npm i strapi@alpha -g

COPY package*.json ./

RUN npm install

#copying source files
COPY . .

# running strapi setup                  
RUN npm run setup

# Running the app
CMD [ "npm", "start" ]