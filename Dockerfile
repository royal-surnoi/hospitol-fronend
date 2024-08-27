FROM nginx:1.27.1-alpine

RUN addgroup app && adduser -S -G app app

WORKDIR /usr/share/nginx/html

RUN rm -rf *

COPY --chown=app:app /var/lib/jenkins/workspace/Hospitol-frontend/dist/doctor-appointment/3rdpartylicenses.txt /usr/share/nginx/html/

COPY --chown=app:app /var/lib/jenkins/workspace/Hospitol-frontend/dist/doctor-appointment/* /usr/share/nginx/html/

EXPOSE 80

HEALTHCHECK CMD curl --fail http://localhost:80/healthcheck

CMD ['nginx', '-g', 'daemon off;']

