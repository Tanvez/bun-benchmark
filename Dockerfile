# Use the official Node.js image as the base image
# FROM node:18.17.1
FROM oven/bun:1.0.2

# Set the working directory in the container
WORKDIR /src

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install app dependencies
# RUN npm install
RUN bun install

# Copy the rest of the application code to the container
COPY . .

# Define the command to run your application
# CMD [ "node", "src/express.js" ]
CMD [ "bun", "src/express.js" ]
# CMD [ "bun", "src/elysia-bun.js" ]

#CMD [ "node", "src/websocket-node.js" ]
# CMD [ "bun", "src/websocket-node.js" ]
#CMD [ "bun", "src/websocket-bun.js" ]

