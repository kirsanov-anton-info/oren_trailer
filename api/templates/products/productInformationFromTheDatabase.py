from peewee import *
import json

hostDB = '172.23.0.3'

def readProductInformationFromTheDatabase():
    try:
        productDatabase = PostgreSQL.connect(POSTGRES_DB, user=POSTGRES_USER, password=POSTGRES_PASSWORD, host=hostDB, port=5432)
        print(1)

        class Product(Model):
            name = CharField()
            description = TextField()
            photo = PhotoField()

            class Meta:
                database = productDatabase

        productDatabase.connect()
        productDatabase.create_table(Product)
        print('Successful Connection')
        productDatabase.close()
        print('Connection Closed')
    except Exception:
        print('Connection Error')


readProductInformationFromTheDatabase()
