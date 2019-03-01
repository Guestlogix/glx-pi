import os
from datetime import timedelta

class Config(object):
    SECRET_KEY = os.environ.get('CONDUIT_SECRET', 'secret-key')  # TODO: Change me
    # CORS_ORIGIN_WHITELIST = [
    #     'http://0.0.0.0:4100',
    #     'http://localhost:4100',
    #     'http://0.0.0.0:8000',
    #     'http://localhost:8000',
    #     'http://0.0.0.0:4200',
    #     'http://localhost:4200',
    #     'http://0.0.0.0:4000',
    #     'http://localhost:4000',
    # ]

class ProdConfig(Config):
    ENV = 'prod'
    DEBUG = False

class DevConfig(Config):
    ENV = 'dev'
    DEBUG = True