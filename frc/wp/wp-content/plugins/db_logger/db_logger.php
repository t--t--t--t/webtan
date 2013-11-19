<?
/* 
Plugin Name: DB Logger
Plugin URI: http://php7.jp
Description: 
Version: -1 
Author: ‚æ‚¤‚¢‚¿‚ë‚¤
Author URI: http://php7.jp 
*/
$logkey = 'db_logger';
function db_logger($query){
	$GLOBALS['query'][] = $query;
	return $query;
}
function show_db_log(){
	echo '<table border=1 bgcolor=white>';
	foreach($GLOBALS['query'] as $query)echo '<tr><td align=left>'.$query.'</td></tr>';
	echo '</table>';
}
if(isset($_GET[$logkey])){
	if($_GET[$logkey] == 'true'){
		$_SESSION[$logkey] = true;
	}else{
		unset($_SESSION[$logkey]);
	}
}
if(isset($_SESSION[$logkey])){
	add_filter ('query', 'db_logger');
	add_action ('shutdown', 'show_db_log');
}
