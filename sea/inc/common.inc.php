<?php
include ('config.inc.php');

require_once('database.inc.php');
require_once(ROOT_DIR . "/vendor/autoload.php");
require_once("template.inc.php");
require_once('user.inc.php');
require_once('errors.inc.php');
require_once('session.inc.php');

dbInitialConnect();
startSession();