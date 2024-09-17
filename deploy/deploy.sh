#!/bin/sh

. ./deploy/fns.sh

ENV=$1
BUILD_TYPE=$2
SRV_IP=$3

if [[ -z "${ENV}" ]]
then
    ENV=cv
fi

if [[ -z "${BUILD_TYPE}" ]]
then
    BUILD_TYPE=prod
fi

if [[ -z "${SRV_IP}" ]]
then
    SRV_IP=142.93.136.162
fi

PRJ_ABS_PROJECT_PATH=/Volumes/usr/projects-mine/oleggs-examples/moviesdb
PRJ_ARCHIVE_NAME=build-web.tgz
PRJ_DIR=moviesdb
BUILD_DIR=${PRJ_ABS_PROJECT_PATH}/build/prod
DIST_DIR=/usr/share/nginx/html/${ENV}

if [[ "help" == "$1" ]]
then
    newSection "HELP"
    cmdRunNotice "sh deploy.sh [ENV] [SERVER_IP]\n\nENV: test | demo | stable | dev\nSERVER_IP: 142.93.136.162 | 178.62.210.101"
    exit
fi

newSection "Build application for ${BUILD_TYPE} ..."

cmdRunNotice "npm run build:${BUILD_TYPE}"
npm run build:${BUILD_TYPE}

newSection "Get build from:\n${BUILD_DIR}/${PRJ_ARCHIVE_NAME} ..."

cd ${BUILD_DIR} || exit

rm -f ${PRJ_ARCHIVE_NAME}

tar -czf ${PRJ_ARCHIVE_NAME} ./*

newSection "Deploy to:\n${SRV_IP}${DIST_DIR} ..."

ssh -t root@${SRV_IP} "mkdir -p ${DIST_DIR}/${PRJ_DIR};"

scp -r ${PRJ_ARCHIVE_NAME} root@${SRV_IP}:${DIST_DIR}

ssh -t root@${SRV_IP} "cd ${DIST_DIR}/${PRJ_DIR}; rm -rf ./*; rm -rf ./.*; cd ${DIST_DIR}; tar -xf ${PRJ_ARCHIVE_NAME} -C ${PRJ_DIR};  rm -f ${PRJ_ARCHIVE_NAME}"

newSection "WELL DONE!!!"
