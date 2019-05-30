<?php

function poetic_play_lite_api_site_get_init_data (){

  $data = new stdClass();	
  $data->Status = new stdClass();
  $data->Status->Code = 'OK';
  $data->Status->Reason = '';
  $data->Status->Message = 'Site init data';
  $data->Data = new stdClass();

  // TODO CACHE

  /* LOGO */

  $CustomLogoID = get_theme_mod('custom_logo');
  if($CustomLogoID) {

    $Image = wp_get_attachment_image_src($CustomLogoID , 'full');
    $data->Data->Logo = $Image[0];
  }

  /* FRONT PAGE */

  $FrontPageID = get_option('page_on_front');
  if($FrontPageID) {

    $Request  = new \WP_REST_Request('GET', '/wp/v2/pages/' . $FrontPageID);
    $Response = rest_do_request($Request);

    if(!$Response->is_error()) {

      $data->Data->FrontPage = $Response->get_data();
    }
  }

  return ($data); 
}	

add_action(
  'rest_api_init',
  function () {	 
        
    register_rest_route(
      'poeticplaylite', 
      'site-get-init-data', 
      array(
        'methods'  => 'GET',
        'callback' => 'poetic_play_lite_api_site_get_init_data'
      )
    );
  }
);