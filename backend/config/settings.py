
import os
from pathlib import Path
# from dotenv import load_dotenv

# load_dotenv()

BASE_DIR = Path(__file__).resolve().parent.parent


SECRET_KEY = '22232234fsdf'
# os.getenv("SECRET_KEY")

DEBUG =True
# os.getenv("DEBUG")

ALLOWED_HOSTS = []


# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    ## main modules 
    'rest_framework',

    ## apps
    'clothes.apps.ClothesConfig',
    'user.apps.UserConfig',
]





MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    # TODO: Add cors header middleware
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'config.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'config.wsgi.application'



#TODO : нужно поменять на другую, хотя можно и с sql поработать в пет проекте
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}



AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True

#статика хотя она не знаю зачем на бэке раз мы будем юзать React
STATIC_URL = '/static/'
STATIC_ROOT = os.path.join(BASE_DIR, 'static')

#медиа
MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'clothes/media')



DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'
