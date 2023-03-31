# !/bin/sh
cp -r /var/local/.env /home/ec2-user/scrum-dice/.env
DATE_KEY=$(date "+%Y-%m-%d_%H-%M-%S")

DOCKER_BUILDKIT=1 docker build -t scrum-dice-$DATE_KEY --secret id=npm,src=./.npmrc .
docker rm -f $(docker ps -qa) | docker run --env-file=.env --rm --name scrum-dice-$DATE_KEY -p 80:3000 -d scrum-dice-$DATE_KEY
