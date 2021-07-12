#!/bin/bash
if [ ! -d './dist/img' ]; then
    mkdir './dist/img'
fi

IMAGES=./img/*

for file in ${IMAGES[*]}
do
    filename=$(basename -- "$file")
    if [ ! -e ./dist/img/$filename ]; then
        cp $file ./dist/img
    elif ! cmp -s $file ./dist/img/$filename ; then
        rm ./dist/img/$filename
        cp $file ./dist/img
    fi
done
