FROM python:3.7.3
LABEL maintainer "anton <kirsanov.anton.info@gmail.com>"
RUN apt-get update
RUN mkdir /app
WORKDIR /app
COPY . /app
RUN pip install --no-cache-dir -r requirements.txt
ENV FLASK_ENV="docker"
EXPOSE 8887
