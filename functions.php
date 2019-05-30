<?php

/* SETUP */

function poetic_wp_play_lite_theme_pwa_setup() {

  add_theme_support('custom-logo');
  add_theme_support('custom-background');
  add_theme_support('custom-header');
}

add_action(
  'after_setup_theme', 
  'poetic_wp_play_lite_theme_pwa_setup'
);

/* API */

require_once(get_template_directory() .  '/api/site/get-init-data.php');

?>