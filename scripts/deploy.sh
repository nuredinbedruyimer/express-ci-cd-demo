#!/bin/bash

IMAGE="ghcr.io/nuredinbedruyimer/github-ci-cd-action:$1"

echo "Deploying $IMAGE"

docker pull $IMAGE

docker stop staging-api || true

docker rm staging-api || true

docker run -d \
  --name staging-api \
  -p 3000:3000 \
  --restart always \
  $IMAGE