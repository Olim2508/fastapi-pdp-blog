FROM python:3
ENV PYTHONUNBUFFERED=1
WORKDIR /app
COPY requirements.txt requirements.txt
RUN pip3 install --upgrade pip
RUN pip3 install -r requirements.txt
RUN pip3 install python-dotenv
COPY . /app
EXPOSE 8000
