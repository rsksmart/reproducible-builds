FROM ubuntu:18.04

ENV GOLANG=go1.13.5.linux-amd64.tar.gz
ENV GOROOT=/go
ENV GOBIN=$GOROOT/bin
ENV GOPATH=/root/go
ENV PATH=$GOBIN:$PATH
ENV JAVA_HOME=/usr/lib/jvm/java-8-openjdk-amd64
ENV CGO_CFLAGS="-I$JAVA_HOME/include -I$JAVA_HOME/include/linux"

RUN apt-get update && \
	apt-get install -y -o APT::Install-Suggests="false" git curl openjdk-8-jdk=8u232-b09-0ubuntu1~18.04.1 build-essential=12.4ubuntu1

WORKDIR /code/altbn128

RUN git clone --single-branch --depth 1 --branch 1.0.0 https://github.com/rsksmart/native.git /code/altbn128

RUN curl "https://dl.google.com/go/"$GOLANG -o $GOLANG -# && \
    echo "512103d7ad296467814a6e3f635631bd35574cab3369a97a323c9a585ccaa569  go1.13.5.linux-amd64.tar.gz" > shasum.txt && \
    cat shasum.txt

RUN sha256sum -c shasum.txt

RUN tar -xvf $GOLANG
RUN mkdir $GOROOT && mv go /

RUN cd src/jni && go get && make clean && make linux
RUN sha256sum src/jni/libbn128.so
