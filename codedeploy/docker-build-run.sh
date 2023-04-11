# !/bin/sh
cp -r /usr/local/scrum-dice/.env /home/ec2-user/scrum-dice/.env

DATE_KEY=$(date "+%Y-%m-%d_%H-%M-%S")
DOCKER_BUILDKIT=1 docker build -t scrum-dice-$DATE_KEY --secret id=npm,src=/home/ec2-user/scrum-dice/.npmrc /home/ec2-user/scrum-dice/.

# scrum-dice가 포함된 도커 컨테이너 ID 목록 가져오기
CONTAINER_IDS=$(docker ps -aqf "name=scrum-dice*")

# 컨테이너가 존재하는지 확인
if [ -n "$CONTAINER_IDS" ]; then
  # scrum-dice가 포함된 도커 컨테이너 종료
  docker stop $CONTAINER_IDS
  echo "scrum-dice가 포함된 도커 컨테이너를 종료합니다."
else
  # scrum-dice가 포함된 도커 컨테이너가 존재하지 않는 경우
  echo "scrum-dice가 포함된 도커 컨테이너가 존재하지 않습니다."
fi

docker run --env-file=/home/ec2-user/scrum-dice/.env --rm --name scrum-dice-$DATE_KEY -p 80:3000 -d scrum-dice-$DATE_KEY