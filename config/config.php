<?php

require("Host","localost")

require("user","george")

require("password","")

require("database","hospital appointment system")

require("port","3306")

require("charset","utf8")


conn = mysqli_connect($host,$user,$password,$database,$port,$charset);