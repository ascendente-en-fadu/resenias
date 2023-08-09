FROM nginx:1.20.1-alpine
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d
COPY xn--reseasfadu-w9a.com.ar.key /etc/ssl/xn--reseasfadu-w9a.com.ar.key
COPY xn--reseasfadu-w9a.com.ar.pem /etc/ssl/xn--reseasfadu-w9a.com.ar.pem
