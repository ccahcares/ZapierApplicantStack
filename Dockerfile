FROM amazonlinux:2017.03.1.20170812

RUN yum install zip findutils wget gcc44 gcc-c++ libgcc44 cmake -y

RUN wget https://nodejs.org/dist/v8.10.0/node-v8.10.0.tar.gz && \
    tar -zxvf node-v8.10.0.tar.gz && \
    cd node-v8.10.0 && \
    ./configure && \
    make && \
    make install && \
    cd .. && \
    rm -rf node-v8.10.0 node-v8.10.0.tar.gz

RUN npm i -g zapier-platform-cli

WORKDIR /app