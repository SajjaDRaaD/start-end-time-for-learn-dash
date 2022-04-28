<?php

/**
 * Plugin Name: تعیین ساعت شروع و پایان آزمون
 * Plugin URI: https://www.techsima.ir/
 * Description: با این افزونه کاربردی می توانید آزمون های لرن دش را در ساعت مشخص شروع و به پایان برسانی
 * Version: 1.0.0
 * Requires at least: 5
 * Requires PHP: 7.2
 * Author: سجاد ابراهیمی راد
 * Author URI: https://www.techsima.ir/
 * License: GPL v2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: Quiz Start and End Time
 * Domain Path: /languages
 */

 // Register Scripts
function QuizTimeScript() {
    wp_register_script( 'core', plugin_dir_url(__FILE__) . 'assets/core.js', array(), '1.0.0', true );
    wp_register_script( 'jalali-moment', plugin_dir_url(__FILE__) . 'assets/moment-jalaali.js', array(), '', true );
    wp_register_style( "style", plugin_dir_url(__FILE__) . 'assets/SEStyles.css');

}

add_action( 'wp_enqueue_scripts', 'QuizTimeScript' );



add_shortcode('QuizTime', 'QuizTime_Callback');

function QuizTime_Callback($atts)
{
    wp_enqueue_style("style");
    wp_enqueue_script('jalali-moment');
    wp_enqueue_script('core');
    date_default_timezone_set('Iran');

    $QuizTimeInfo = array(
        "quizStartDate" => $atts['startdate'],
        "quizStartTime" => $atts['starttime'],
        "quizEnterTime" => $atts['entertime'],
        "nowTime" => date('Y/m/d H:i:s a', time()),
    );

    wp_localize_script( "core", "QuizTimeInfo",$QuizTimeInfo);
    

}

 add_action('init', 'wpse72394_shortcode_button_init');
 function wpse72394_shortcode_button_init() {

      if ( ! current_user_can('edit_posts') && ! current_user_can('edit_pages') && get_user_option('rich_editing') == 'true')
           return;

      add_filter("mce_external_plugins", "QuizStart_register_tinymce_plugin"); 

      add_filter('mce_buttons', 'QuizStart_add_tinymce_button');
}

function QuizStart_add_tinymce_button($buttons) {
$buttons[] = "QuizStartShortcodeBTN";
return $buttons;
}

function QuizStart_register_tinymce_plugin($plugin_array) {
    $plugin_array['QuizStartShortcodeBTN'] = plugins_url('tinyMCE/quiztimebtn.js', __FILE__);
    return $plugin_array;
}


?>
