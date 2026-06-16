FROM alpine:edge@sha256:9a341ff2287c54b86425cbee0141114d811ae69d88a36019087be6d896cef241

ARG I2PD_VERSION=2.60.0-r1

RUN apk add --no-cache i2pd=${I2PD_VERSION}

USER i2pd
ENTRYPOINT ["i2pd"]
CMD ["--conf=/etc/i2pd/i2pd.conf", "--datadir=/var/lib/i2pd"]
