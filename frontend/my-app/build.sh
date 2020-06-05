#!/bin/bash

rm -rf ../../client/build
npm run build
cd ../.. && npm start