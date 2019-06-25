FROM openjdk:8

RUN apt update && apt install -y --no-install-recommends git strip-nondeterminism file

WORKDIR /code/gradle-witness
RUN git clone https://github.com/rsksmart/gradle-witness.git /code/gradle-witness

RUN git checkout 0fa4ef3dba22d1ca83d074dbbfad2b1105e3006c

RUN ./configure.sh
RUN ./gradlew --no-daemon assemble
RUN strip-nondeterminism ./build/libs/gradle-witness-0.1.0.jar

