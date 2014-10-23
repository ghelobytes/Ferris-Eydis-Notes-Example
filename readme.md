## Ferris 3 / Eydis-List Example

A project using [Ferris 3](http://ferrisframework.org), [Eydis](https://github.com/jonparrott/Generator-Eydis), [Eydis-Gapi](https://github.com/jonparrott/Eydis-GAPI), and [Eydis-List](https://github.com/jonparrott/Eydis-List).

This project consists of a two pieces:

1. The *backend* powered by Ferris 3 and Google Cloud Endpoints.
2. The *frontend* written in AngularJS.

## Getting started

1. Clone this repository:

    ```
    git clone https://github.com/jonparrott/Ferris-Eydis-Notes-Example.git
    cd Ferris-Eydis-Notes-Example
    ```

2. Install dependencies for the backend using pip:

    ```
    cd backend
    pip install --pre -t lib -r requirements.txt
    ```

3. Install dependencies for the frontend using npm:

    ```
    cd frontend
    npm install
    ```

## Running locally

1. Run the backend. You will need the [App Engine Python SDK](https://developers.google.com/appengine/downloads):

    ```
    dev_appserver.py backend
    ```

3. Run the frontend.

    ```
    cd frontend
    gulp watch
    ```

4. Visit the frontend at [http://localhost:8081](http://localhost:8081).
