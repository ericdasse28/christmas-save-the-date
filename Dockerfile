FROM nginx:alpine

COPY . /usr/share/nginx/html

# Replace default nginx.conf
COPY nginx.conf /etc/nginx/nginx.conf
