# Use with HTTPS

To use the mock-server with https make sure following keys are fulfilled:

- Run the application with SSL
- Add the `--disable-host-check` flag to the command in the package.json
- If you don't have a valid certificate create you own selfsigned certificate (more information see https://medium.com/@richardr39/using-angular-cli-to-serve-over-https-locally-70dab07417c8)
- If you use chrome, enable the option `chrome://flags/#allow-insecure-localhost` in chrome (See https://stackoverflow.com/a/31900210)
- Make sure the certificate is used for startup the application in you command in the package.json for e.g.

```
"start:staging": "ng serve --ssl --ssl-key certificates/localhost.key --ssl-cert certificates/localhost.crt --configuration=staging --disable-host-check",
```
