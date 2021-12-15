# Use Node
FROM node:16.13.0-alpine

# Set the working directory to /api
WORKDIR /api

# copy package.json into the container at /api
COPY package*.json /api/

RUN npm install -g npm@8.1.3
RUN npm install -g nodemon

RUN npm install

# Copy the current directory contents into the container at /api
COPY . /api/

# Run the app when the container launches
CMD ["npm", "start"]