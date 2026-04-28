#!/bin/bash

echo "Installing Node.js dependencies..."
npm install

echo "Checking MongoDB..."
which mongod > /dev/null

if [ $? -ne 0 ]; then
  echo "MongoDB not found. Please install MongoDB."
else
  echo "MongoDB is installed"
fi

echo "Setup complete!"
