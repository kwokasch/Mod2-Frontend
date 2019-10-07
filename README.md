
Spotify-Lite App - Front-End

"Spotify-Lite App" is a full-stack web application that allows users to create "Artist" and "Album" cards using information fetched from the Spotify API.

PREREQUISITES & INSTALLATION 
    Fork and clone thess repositories from GitHub at https://github.com/kwokasch/Mod2-Frontend and https://github.com/kwokasch/Mod2-Backend. Open both files using the code editor of your choice.

    User will need to encode their client and secret keys using this link: https://www.base64encode.org/ 
    
    User will need to input the encoded key in the app/controllers/albums_controller.rb and artists_controllers.rb files inside the curly brackets currently occupied by {"SpotifyKey::KEY"}:

```     {'Authorization': "Basic #{SpotifyKey::KEY}"})      ```    

    Gems required for use can be installed using the ```bundle install``` command in the command line.

RUNNING THE APP
    Open 
    Run the ```rails s``` command in the backend (https://github.com/kwokasch/Mod2-Backend)
    Run the ```lite-server``` command in the frontend (https://github.com/kwokasch/Mod2-Frontend)

HOW TO USE THE APP
    This video demonstrates how to create artist and album cards and how to view created cards: https://youtu.be/GbCUewTzOss.

CONTRIBUTING Katie Wokasch and Mohamad Farahmandifard 

Flatiron School, 2019
