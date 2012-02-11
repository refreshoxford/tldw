<?php

/**
 * Page callback: search based on e.g. URL
 */
function tldwapi_pages_search($format = 'json') {
  $url = $_GET['url'];

  $sql = "SELECT nid FROM content_field_videolink WHERE field_videolink_embed LIKE '%%s%'";
  $result = db_query($sql, $url);
  $node = node_load(db_result($result));

  // No results? return an empty array or equivalent
  if (!$node) {
    switch($format) {
      case 'json':
        drupal_json(array());
      break;
      case 'html':
        return "Sorry, I can't find $url .";
      break;
    }

  } 
  // Return first result
  else {
    switch($format) {
      case 'json':
        drupal_json(array(
          'title' => $node->title,
          'link' => url('node/'.$node->nid),
        ));
      break;
      case 'html':
        return t(
          "You asked for: !url. I've found !node",
          array(
            '!url' => l($url,$url),
            '!node' => l($node->title,"node/".$node->nid),
          )
        );
      break;
    }
  }
}
