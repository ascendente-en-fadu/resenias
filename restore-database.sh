if [ -z "$1" ]
  then
    echo "No backup file given."
    echo "Usage: sh restore-database.sh backup_22-03-2023_15_37_59.sql"
    exit 2
fi

echo "The following script will CLEAR ALL DATABESES to restore data from a given backup file. This is a DESTRUCTIVE operation."
read -p "Are you sure about what you are doing? (y/n) " choice
case "$choice" in 
  y|Y ) cat $1 | docker exec -i resenias_database_1 psql -U postgres;;
  n|N ) echo "Execution cancelled";;
  * ) echo "Invalid answer";;
esac
