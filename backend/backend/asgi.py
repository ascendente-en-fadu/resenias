"""
ASGI config for backend project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/4.1/howto/deployment/asgi/
"""

import os

from django.core.asgi import get_asgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')

application = get_asgi_application()

if os.environ.get('DEBUGGER_ENABLE'):
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