# Store Ranking App

Backend - Django Rest Framework

Front-End - React

DB - Postgress

## How to run

1. Clone this directory to local machine.
2. Install Postgres.
3. Create a new DB.
4. Update the DB details in the .env file in the root directory.
5. Install PIPENV with PIP.
6. Got the root directory and run `pipenv shell` to start virtual environment.
7. Run the following code one by one.

```console
pipenv install
cd store_rank_app
python manage.py migrate
python manage.py loaddata db.json
python manage.py runserver
```
