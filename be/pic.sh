# default 30 sec every 2 sec = 30 images, 1min
raspistill -t 30000 -tl 2000 -o image%09d.jpg
# every 1 hour for 3 months
raspistill -t 7776000000 -tl 3600000 -o image$(date +"%FT%T").jpg
