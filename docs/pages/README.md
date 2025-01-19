docker build -t 'pages' --target deps . 

docker run -d -p 5173:5173 pages

