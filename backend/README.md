# backend

A quick description of backend.


for running container (not working currently) set dbhost(in env file) to somehost
  - alias hostip="ip route show 0.0.0.0/0 | grep -Eo 'via \S+' | awk '{ print $2 }'"
  - docker run  --add-host=somehost:$(hostip) -rm -it backend_deliveroo


works but uses host network(no point in using docker then) set dbhost(in env file) to localhost
  - docker run --net=host --env-file .env -it backend_deliveroo