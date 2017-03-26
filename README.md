# README #

Playing with git repo WebHooks.

Intentions
==========
To allow automatic deployment upon push to git repo.

Prerequirements -- This repo must be on the same server as the repo that would like to be auto deployed.

The online repository (BitBucket, Github) would set up a webhook on Push. This webhook would reference the node server inside this application (**Server**). Upon commit/push, the webhook would pass data to **Server**. **Server** would then git pull inside the repo to be deployed.