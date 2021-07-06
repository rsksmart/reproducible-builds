FROM openjdk:8-jdk-slim-buster as builder

RUN apt-get update -y && \
    apt-get install -qq --no-install-recommends git curl gnupg

WORKDIR /code/rskj

RUN gitrev=IRIS-3.0.0 && \
    git init && \
    git remote add origin https://github.com/rsksmart/rskj.git && \
    git fetch --depth 1 origin tag "$gitrev" && \
    git checkout "$gitrev"

RUN gpg --keyserver https://secchannel.rsk.co/release.asc --recv-keys 1A92D8942171AFA951A857365DECF4415E3B8FA4 && \
    gpg --verify --output SHA256SUMS SHA256SUMS.asc && \
    sha256sum --check SHA256SUMS && \
    ./configure.sh && \
    ./gradlew --no-daemon clean build -x test


FROM openjdk:8-jre-slim-buster as runner

RUN useradd -m rsk

WORKDIR /home/rsk

USER rsk
COPY --from=builder --chown=rsk:rsk /code/rskj/rskj-core/build/libs/rskj-core-* ./
CMD ["java", "-cp", "rskj-core-3.0.0-IRIS-all.jar", "co.rsk.Start"]
