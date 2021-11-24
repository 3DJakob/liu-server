# LiU server

This simple express server will fetch the LiU API and feed it forward.

## Get started

1. Add keys in `.env`
2. Run `npm install`
3. Run `npm start`

## Heroku

The repository is live on https://liu-server.herokuapp.com and will automatically serve from the master branch.

### Heroku commands

- `heroku logs --tail` - show server logs

- `heroku config` - show secrets

- `heroku config:set KEYNAME=secret` - set secrets
