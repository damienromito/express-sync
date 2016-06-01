# Express-sync
How to use an express server with browser-sync (without gulp)


#1 - Install express and browser-sync modules


#2 - Launch the script
    npm install

    npm start
same to:
    node app & browser-sync start --proxy 'localhost:9000' --files 'public'

#3 - Modify style.css and save to test browser-sync

    body {
        background: red;
    }

Then you can see modifications without reload your browser
