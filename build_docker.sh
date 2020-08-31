npm install
npm run build

cp -R build docker
cd docker
docker build -t ursinbrunner/proton-inference-frontend:latest .
docker push ursinbrunner/proton-inference-frontend:latest

rm -R $(ls -I "Dockerfile" )