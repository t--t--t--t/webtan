<?php
/*
Plugin Name:TinyMce Enter Applies Only Br
Plugin URI:
Description:Line feed is converted to <br />.
Version:1.0
Author:kabahandle
Author URI:
*/
function TinyMceInitOptions4BrOnly( $initArray )
{
	$initArray = array_merge( $initArray,  array('force_br_newlines' =>  true) );
	$initArray = array_merge( $initArray,  array('forced_root_block' => '') );
	$initArray = array_merge( $initArray,  array('force_p_newlines' => false) );
	return $initArray;
}

add_filter('teeny_mce_before_init', 'TinyMceInitOptions4BrOnly');
add_filter('tiny_mce_before_init', 'TinyMceInitOptions4BrOnly');

?>