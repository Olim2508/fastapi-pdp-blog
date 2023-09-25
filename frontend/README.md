# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you should do:

### Create .env.development file and add env variables

## IMPORTANT!!!! Before running application, 
1. start json-server with the following command:
```
npx json-server --watch data/db.json --port 8001
```
#### This will run api on url "localhost:8000/blogs"

2. Start backend for auth. Backend project name is django_image_manager

##Run Application:
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:4000](http://localhost:4000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


## Set up nginx settings in remote server
### 1. Clone Your React App:

Navigate to the appropriate directory where you want to deploy your React app, and clone your app's repository:

```
git clone https://github.com/yourusername/your-react-app.git
```
### 2. Install nginx:
```
sudo yum update -y
sudo yum install -y git nginx
```

### 3. Build Your React App

Navigate to the appropriate directory where you want to deploy your React app, and clone your app's repository:

```
cd your-react-app
npm install
npm run build
```


### 4. Configure Nginx:

Create an Nginx server block configuration for your app:

```
sudo nano /etc/nginx/conf.d/pdp-react-app.conf
```

Add the following configuration, replacing your-domain.com with your actual domain name:
```
server {
    listen 80;
    server_name blog.olim.space;

    location / {
        root /home/ec2-user/pdp-react-blog/build;
        index index.html;
        try_files $uri /index.html;
    }

    error_page 500 502 503 504 /50x.html;
    location = /50x.html {
        root /usr/share/nginx/html;
    }
}
```
or
```
server {
    server_name blog.olim.space;
    root /home/ec2-user/pdp-react-blog/build;
    index index.html;
    try_files $uri /index.html;
    access_log /var/log/nginx/access.log;

    error_page 500 502 503 504 /50x.html;
    location = /50x.html {
        root /usr/share/nginx/html;
    }
}
```

Save and close the file (press Ctrl + X, then Y, then Enter).


### 6. Test Nginx Configuration:
```
sudo nginx -t
```

### 7. Start Nginx:
```
sudo systemctl start nginx
```

### 7. Restart Nginx:
```
sudo systemctl restart nginx
```

### 8. Enable Nginx to Start on Boot:
```
sudo systemctl enable nginx
```


### 9. Configure Domain Name:
Update your domain's DNS settings to point to your EC2 instance's IP address.

### 10. Access Your React App

### Check logs of nginx if there is an error
```
sudo cat /var/log/nginx/error.log
```
