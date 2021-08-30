# tishatsu T-shirt Generator

Tishatsu is a collection of cool new age T-shirts on blockchain, be on the
lookout for recently minted tishatsu T-Shirts.

## Our Vision

In the crypto world, becoming a fashion label. We wish to give anyone the ability to
construct their own unique digital identity. People will also be able to choose
their own wearables in their preferred Metaverse.

----------------------------------------------------------------------------------------------------------------------------

## tishatsu Generator Landing Page

This is a landing page for the tishatsu t-shirt generator, proposed for the
[NFTVisionHack](https://www.nftvisionhack.com/)

### Preview

Preview the landing page here on [Netlify](https://nftvisionhack.netlify.app/)

### Getting Started

To execute the code locally, run these command from root of the project

Note: kindly use node version >= 12.13.0 and make sure you have install next.js

```bash
$ cd nft-landing-page
$ yarn install
$ yarn dev
```

----------------------------------------------------------------------------------------------------------------------------

## tishatsu Generator Backend

This is a backend of the tishatsu t-shirt generator, it generates the random background t-shirt and send
t-shirt to nft.storage to get the ipfs link.

### Preview

Preview the Generator here on [Heroku](https://nftvisionhack.herokuapp.com/)

### Getting Started

Activate the virtualenv for your project.
    
Install project dependencies:
    $ cd nftvisionbackend
    $ pip install -r requirements.txt

You can now run the development server without any migrations:

    $ python manage.py runserver

----------------------------------------------------------------------------------------------------------------------------

## Future Changes

Note: Right now client side generate the bird logo using p5.js then using the generated t-shirt pattern from backend, it combines both using fabricjs which later set as a t-shirt background.

- Add smart contract
- put the ifps hash in metadata while minting nfts on ethereum
- Combine the t-shirt generation process in the backend.

----------------------------------------------------------------------------------------------------------------------------

## How to contribute

- Open a MR branch w.r.t main with intials `<feature/bug>-<frontend/backend>/<realted-branch-name>`
- Add a commit message explaning what this MR is about.
