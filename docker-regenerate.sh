echo "The following script will STOP and DELETE ALL running Docker containers and DELETE ALL Docker images."
read -p "Do you wish to proceed? (y/n) " choice
case "$choice" in 
  y|Y ) docker stop $(docker ps -aq)
        docker rm $(docker ps -aq)
        docker rmi $(docker images -q)
        docker-compose build
        docker-compose up;;
  n|N ) echo "Execution cancelled";;
  * ) echo "Invalid answer";;
esac
