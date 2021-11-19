# WebComponents workshops

## Requirements

Before you will use this repository make sure that you have installed:

- **_Git_**

    - If you are a **Windows** or **macOS** user visit this link **[Downloading Git](https://git-scm.com/download/win)** then download appropriate installer and install it.
    - If you are a **Linux** (Ubuntu-based distribution) user you can paste bellow scrip into your terminal or visit this page **[Installing Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)**

      ```bash
      sudo apt install git-all
      ```

- **_Node.js_** and **_npm_**

    - If you are a **Windows** or **macOS** user visit this link **[Node.js download](https://nodejs.org/en/download/)** then download _LTS_ version for Windows and install it.
    - If you are a **Linux** (Ubunto-based distribution) user you can paste bellow scrip into your terminal or visit this page **[Node installation instruction](https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions)** or use **[nvm](https://github.com/nvm-sh/nvm#install--update-script)**

      ```bash
      curl -fsSL https://deb.nodesource.com/setup_15.x | sudo -E bash -
      sudo apt-get install -y nodejs
      ```
      
    > Or any other static HTTP server

- If you have installed **Node.js** and **npm**, then open your terminal / git-bash and run this command

  ```bash
  sudo npm install -g http-server
  ```

If you followed every step, you should be ready to start using this repository. To make sure that you have installed everything correctly open your terminal git-bash and run the following commands:

- To check **git**: _`git --version`_ → you shoud see output with **git** version
- To check **node.js**: _`node --version`_ → you shoud see output with **node.js** version
- To check **npm**: _`npm --version`_ → you shoud see output with **npm** version
- To check **http-server**: _`http-server`_ → you should see output which starts with **Starting up http-server, serving**

## Downloading the repository

- Open your terminal / git-bash in location where you create a directory which will contain this repository

- Run the following command in your terminal / git-bash

  ```bash
  git clone https://github.com/GDSC-Lodz-University-of-Technology/workshops-web-components.git
  cd ./workshops-web-components
  ```

## Using this repository

- Open **_workshops-web-components_** directory in your terminal / git-bash
- Run `http-server` inside your terminal / git-bash in root directory
- Open your web-browser and go under **_[http://localhost:8080/](http://localhost:8080/)_**
- You can also use prepared branches if you need any hints
- Starting point of these workshops is branch 0-setup

## Workshops aim

At the end of this workshop, you should have a basic understanding of WebComponents. 
You should also have ready a simple app for adding events to the list. 

# Workshops app

 - App should allow adding and viewing events in the list view
 - App should be wrapped into one WebComponent which you will use in _`index.html`_
 - Main component should contain two children components:
   - Input with button. After button click, the button should emit information about event that user want to add to the list
   - List all events. Every time user adds a new event, this event should be displayed inside this

# Resources

 - **_[Presentation](https://github.com/GDSC-Lodz-University-of-Technology/workshops-web-components/blob/master/workshop-web-components-presentation.pdf)_**
 - **_[YouTube stream](https://www.youtube.com/watch?v=56XHrRDHrRQ)_**
 - **_[Intro to WebComponent(article)](https://developers.google.com/web/fundamentals/web-components/customelements#shadowdom)_**
 - **_[Styling WebComponents(article)](https://www.smashingmagazine.com/2016/12/styling-web-components-using-a-shared-style-sheet/)_**
 - **_[How to Publish Web Components to NPM(article)](https://justinfagnani.com/2019/11/01/how-to-publish-web-components-to-npm/)_**