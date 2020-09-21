#!/usr/bin/env sh

name=demo.sona.zzfzzf.com

cd /www/wwwroot/$name
rm -rf build/*
tar -zxvf build.tar.gz
rm -rf build.tar.gz