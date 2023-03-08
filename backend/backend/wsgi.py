"""
WSGI config for backend project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/4.1/howto/deployment/wsgi/
"""

import os
import time
from django.core.wsgi import get_wsgi_application
from decouple import config

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')

application = get_wsgi_application()

if config('DEBUGGER_ENABLE', cast=bool):
    while True:
        try:
            # Visual Studio Code debugger
            import debugpy
            debugpy.listen(('0.0.0.0', int(os.environ.get('DEBUGGER_PORT'))))
            break
        except Exception as e:
            if "Address in use" in str(e):
                # Address already in use, wait and try again
                time.sleep(1)
            else:
                raise e