FROM eclipse-temurin:8u412-b08-jdk-jammy AS builder

RUN apt-get update -y && \
    apt-get install -qq --no-install-recommends file unzip maven git strip-nondeterminism

WORKDIR /code/bitcoinj-thin

RUN gitrev=testnet4-bitcoin-testnet4-setup && \
    git init && \
    git remote add origin https://github.com/rsksmart/bitcoinj-thin.git && \
    git fetch --depth 1 origin "$gitrev" && \
    git checkout "$gitrev"

RUN mvn clean package -DskipTests
RUN strip-nondeterminism ./target/bitcoinj-thin-*

# Create metadata
# First define variables
ARG GROUP_ID="org.bitcoinj"
ARG ARTIFACT_ID="bitcoinj-thin"
ARG VERSION="0.14.4-rsk-19-SNAPSHOT"

# Then create the metadata file
RUN echo "?xml version=\"1.0\" encoding=\"UTF-8\"?metadatagroupId${GROUP_ID}/groupIdartifactId${ARTIFACT_ID}/artifactIdversioninglatest${VERSION}/latestrelease${VERSION}/releaseversionsversion${VERSION}/version/versionslastUpdated$(date +%Y%m%d%H%M%S)/lastUpdated/versioning/metadata" > /code/bitcoinj-thin/maven-metadata.xml

FROM eclipse-temurin:8u412-b08-jdk-jammy as runner

RUN useradd -m rsk

WORKDIR /home/bitcoinj-thin

USER rsk
COPY --from=builder --chown=rsk:rsk /code/bitcoinj-thin/* ./
