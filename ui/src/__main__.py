from flask_script import Manager
from flask_migrate import Migrate, MigrateCommand
from flask import Flask, render_template

from app import app
import view
# from api import create_app
# from api.models import db

# sets up the app

manager = Manager(app)


# migrate = Migrate(app, db)

# adds the python manage.py db init, db migrate, db upgrade commands
manager.add_command("db", MigrateCommand)


@manager.command
def runserver():
    app.run(host="0.0.0.0")

@manager.command
def runworker():
    app.run()

@manager.command
def recreate_db():
    """
    Recreates a database. This should only be used once
    when there's a new database instance. This shouldn't be
    used when you migrate your database.
    """
    db.drop_all()
    db.create_all()
    db.session.commit()


if __name__ == "__main__":
    manager.run()
