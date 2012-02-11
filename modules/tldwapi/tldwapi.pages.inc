<?php

/**
 * Page callback: search based on e.g. URL
 */
function tldwapi_pages_search($format = 'json') {
  // Take one URL or many URLs
  $urls = $_GET['urls'];
  if (!is_array($urls)) {
    $urls = array($_GET['url']);
  }

  foreach($urls as $url) {
    // Try to parse the URL into a provider we know about
    $field_spec = content_fields('field_videolink', 'transcript');
    $parsed = emfield_parse_embed($field_spec, $url, 'emvideo');

    // If we've identified a provider, try to find a video with that provider
    if (isset($parsed['provider']) && $parsed['provider']) {
      $sql = "SELECT nid FROM content_field_videolink WHERE field_videolink_value = '%s' AND field_videolink_provider = '%s'";
      $result = db_query($sql, $parsed['value'], $parsed['provider']);
      $node = node_load(db_result($result));
      if ($node) {
        break;
      }
    }
  }

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
          'link' => url('node/'.$node->nid, array('absolute' => TRUE)),
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
