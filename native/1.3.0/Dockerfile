FROM --platform=linux/amd64 ubuntu:18.04

# CUSTOM VARIABLES
ENV GOCUSTOM=/usr/local
ENV GOLANG=go1.13.5.linux-amd64.tar.gz

# ENV VARIABLES
ENV GOROOT=$GOCUSTOM/go
ENV GOPATH=/native/altbn128
ENV GOBIN=$GOPATH/bin
ENV PATH=$GOPATH/bin:$GOROOT/bin:$PATH
ENV JAVA_HOME=/usr/lib/jvm/java-8-openjdk-amd64
ENV CGO_CFLAGS="-I$JAVA_HOME/include -I$JAVA_HOME/include/linux"

RUN apt-get update && \
 apt-get install -y git && \
 apt-get install -y tree && \
 apt-get install -y -o APT::Install-Suggests="false" curl openjdk-8-jdk build-essential=12.4ubuntu1 && \
 apt-get install -y -o APT::Install-Suggests="true" autoconf && \
 curl "https://dl.google.com/go/"$GOLANG -o $GOLANG -# && \
 echo "512103d7ad296467814a6e3f635631bd35574cab3369a97a323c9a585ccaa569  go1.13.5.linux-amd64.tar.gz" > goChecksum.txt && \
 cat goChecksum.txt && \
 sha256sum -c goChecksum.txt && \
 tar -xvf $GOLANG && mkdir -p $GOCUSTOM && mv go $GOCUSTOM

RUN apt-get install -y gcc-aarch64-linux-gnu

RUN git clone https://github.com/rsksmart/native.git /code/native

WORKDIR /code/native
RUN git checkout tags/1.3.0 -b 1.3.0

#Cloning native's repo
#RUN git clone https://github.com/rsksmart/native.git
COPY . /native
WORKDIR /native

# Copying jni headers to java /include
RUN cp -r jniheaders/include $JAVA_HOME

RUN mkdir /out

# Expose
WORKDIR /native

CMD ./gradlew --no-daemon clean buildProject ; cp -R ./build/libs/native-* /out/
