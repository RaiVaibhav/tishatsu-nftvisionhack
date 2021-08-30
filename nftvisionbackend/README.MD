# tishatsu Generator Backend

This is a backend of the tishatsu t-shirt generator, it generates the random background t-shirt and send t-shirt to nft.storage to get the ipfs link.


## Getting Started

Activate the virtualenv for your project.
    
Install project dependencies:
    $ cd nftvisionbackend
    $ pip install -r requirements.txt

You can now run the development server without any migrations:

    $ python manage.py runserver

## Future Changes

Note: Right now client side generate the bird logo using p5.js then using the generated t-shirt pattern from backend, it combines both using fabricjs which later set as a t-shirt background.

- Add smart contract
- put the ifps hash in metadata while minting nfts on ethereum
- Combine the t-shirt generation process in the backend.
