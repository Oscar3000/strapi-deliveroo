FROM strapi/strapi

#ENV YARN_VERSION 1.13.0

RUN echo "unsafe-perm = true" >> ~/.npmrc

#setting up working directory
WORKDIR /usr/src/app

#copying source files
COPY . .

RUN npm install

RUN npm run postinstall

# running strapi setup                  
RUN npm run setup

# Running the app
CMD [ "npm", "start" ]
#CMD [ "chmod", "+x", "./strapi.sh" ]