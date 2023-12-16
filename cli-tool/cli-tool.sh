d=$(date +"%Y-%m-%d %T")
RED="\e[31m"
ENDCOLOR="\e[0m"
MAGNETA="\e[35m"
BLUE="\e[36m"
GREEN="\e[32m"

echo -e "\e$BLUE[LOG]$MAGNETA[$d]$ENDCOLOR Starting Mist.js CLI 1.0.0..."

if [ $# -eq 0 ]; then
    echo -e "\e$RED[ERROR]$ENDCOLOR$MAGNETA[$d]$ENDCOLOR Please provide a name for your project."
    exit 1
fi

echo -e "\e$BLUE[LOG]$MAGNETA[$d]$ENDCOLOR Generating $1 folder..."

cp -R ./cli/ $1

echo -e "\e$BLUE[LOG]$MAGNETA[$d]$ENDCOLOR Removing cli tool..."

rm -R ./cli

echo -e "\e$GREEN[SUCCESS]$MAGNETA[$d]$ENDCOLOR Sucessfully removed cli tool."

echo -e "\e$BLUE[LOG]$MAGNETA[$d]$ENDCOLOR Removing unnecessary files"

rm -R ./assets
rm ./README.md
rm package.json

echo -e "\e$GREEN[SUCCESS]$MAGNETA[$d]$ENDCOLOR Sucessfully scaffolded app at $1."

echo -e "\e$BLUE[LOG]$MAGNETA[$d]$ENDCOLOR Go to ./$1, install node modules and run npm run dev to see your app."

echo -e "\e$BLUE[LOG]$MAGNETA[$d]$ENDCOLOR To view Official documentation, go to ./docs and run ./index.html with VSCode Live Server extension."

rm ./cli-tool.sh

