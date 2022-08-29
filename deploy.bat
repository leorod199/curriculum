rmdir dist /s /q

npm run build

cd dist

git init
git checkout -b master
git add -A
git commit -m 'deploy'

git push -f https://github.com/leorod199/curriculum.git master:gh-pages

cd ..
