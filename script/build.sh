#!/usr/bin/env sh
export NODE_OPTIONS=--max-old-space-size=8192
npm i
npm run build
tar -zcvf build.tar.gz ./build