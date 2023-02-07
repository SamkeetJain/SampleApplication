## Sample Django Application

### How to run locally (without docker)?
1. Run `python3 -m venv venv`
2. Run `source venv/bin/activate`
3. Run `pip install -r requirements.txt`
4. Set following environment variables
   1. `export DATABASE_URL=postgres://user:pass@host/name`
   2. `export SECRET_KEY=secure_key`
5. Run `python manange.py migrate`
6. Run `python manange.py runserver`
