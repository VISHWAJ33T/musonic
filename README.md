<p align="center">
  <img src=images/logo.png height=100px alt="Meuzik Logo" >
</p>

# Meuzik
Meuzik is a web application that allows users to discover and listen to music from various sources including Wync Music, Resso, YouTube Music, Jio Saavn, Hungama Music, and Gaana. It provides a user-friendly interface to search for songs, control playback, adjust playback speed, download music, and more. The application is built using React.js and integrates with the music-api to fetch and play music from these sources.

## Live Site

You can access the live site by visiting [meuzik.studio](https://meuzik.studio)

## Screenshots

Here are some screenshots of the IMVT website:

![PC](images/responsive%20check.png)


## Run Locally

1. Clone the project

```bash
  git clone https://github.com/VISHWAJ33T/meuzik
```

2. Go to the project directory

```bash
  cd meuzik
```

3. Install dependencies

```bash
  npm install
```

4. Start the server

```bash
  npm start
```

5. Open your browser and visit http://localhost:3000 to access the Meuzik website.

## Technologies Used

This project was developed using the following technologies:

    HTML
    CSS
    JavaScript
    React.js
    Visual Studio Code


## Features
- **Search:** Users can search for songs from multiple music sources including Wync Music, Resso, YouTube Music, Jio Saavn, Hungama Music, and Gaana.
- **Playback:** Meuzik enables users to play, pause, skip, and control the volume of songs. It provides a progress bar to track the current playing position and allows users to control the playback speed.
- **Download Music:** Users can download music from the selected music source for offline listening.
- **Authentication:** The application does not require authentication as it uses the music-api for accessing music sources.


## Usage
Upon opening Meuzik, you can start searching for songs. Clicking on a song will play it using the music-api and the selected music source. The progress bar allows you to track the current playing position, and you can adjust the playback speed as desired. Additionally, you can download music from the selected music source for offline listening.

## Important Note
Please note that playing music from YouTube Music may result in buffering due to the nature of the service. We recommend using other music sources such as Wync Music, Resso, Jio Saavn, Hungama Music, or Gaana for a smoother playback experience.


## Acknowledgments
Meuzik utilizes the [music-api](https://github.com/mohd-baquir-qureshi/music-api) created by Mohd Baquir Qureshi.