#!/usr/bin/env sh

set -e

vue build

cd dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:pavver/pavver.git master:gh-pages

cd -