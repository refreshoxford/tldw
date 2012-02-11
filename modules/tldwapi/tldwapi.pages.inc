<?php

/**
 * Page callback: search based on e.g. URL
 */
function tldwapi_pages_search() {
  $url = $_GET['url'];

  $sql = "SELECT nid FROM content_field_videolink WHERE field_videolink_embed LIKE '%%s%'";
  $result = db_query($sql, $url);
  if ($node = node_load(db_result($result))) {
    return t(
      "You asked for: !url. I've found !node",
      array(
        '!url' => l($url,$url),
        '!node' => l($node->title,"node/".$node->nid),
      )
    );
  }

  return "Sorry, I can't find $url .";

}
