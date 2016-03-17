<?php

use Illuminate\Database\Capsule\Manager as Capsule;
use Symfony\Component\Yaml\Parser;

/**
* @api {get} /date/ Obtention de la date du serveur.
* @apiName GetDate
* @apiGroup Others
*
* @apiSuccess {Date} date Date du serveur, "d m Y H:i".
*
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*
*/
$app->get('/date/', function($request, $response) {
  date_default_timezone_set('Europe/Paris');
  return $response->withJson(array ("date"  => date("d m Y H:i")), 200);
});

/**
* @api {get} /banniere/ Récupération de l'url de la bannière.
* @apiName GetBanniere
* @apiGroup Others
*
* @apiSuccess {String} url Lien de la bannière sur le serveur.
*
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*
*/
$app->get('/banniere/', function($request, $response) {
  $yaml = new Parser();
  $config = $yaml->parse(file_get_contents('config/config.yml'));

  if($filename = glob($config['parameters']['dir_files'].'mobile/banniere_mobile.*')) {
    return $response->withJson(array ("url"  => $filename[0]), 200);
  }
  else {
    return $response->withJson(array ("url"  => "not image"), 400);
  }
});

/**
* @api {post} /banniere/ Modifier la bannière mobile.
* @apiDescription Sécuriser Admin.
* @apiName PostBanniere
* @apiGroup Others
*
* @apiParam {File} file Image de la bannière.
*
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*     {
*       "succes": "fichier upload"
*     }
*
* @apiErrorExample Error-Response:
*     HTTP/1.1 404 Not Found
*     {
*       "error": code error
*     }
*/
$app->post('/banniere/',function ($request, $response)  use ($app) {
  try {
    $yaml = new Parser();
    $config = $yaml->parse(file_get_contents('config/config.yml'));

    $storage = new \Upload\Storage\FileSystem($config['parameters']["dir_files"].'mobile');
    $file = new \Upload\File('file', $storage);

    //on passe son id en nom
    $file->setName('banniere_mobile');

    $file->addValidations(array(
      new \Upload\Validation\Mimetype(array('image/png', 'image/jpeg', 'image/pjpeg')),
      new \Upload\Validation\Size('5M')
    ));

    //check la validité du fichier pour supprimer le/les ancienne(s) image(s)
    if($file->validate()){
      foreach (glob($config['parameters']["dir_files"].'product/'.$id_product["id_product"].'.*') as $oldFile) {
        unlink($oldFile);
      }
    }
    //on upload le fichier
    $file->upload();
    $response = $response->withJson(array ("status"  => array("succes" => "fichier upload")), 200);
  } catch (\Exception $e) {
    $response = $response->withJson(array ("status"  => array("error" => $file->getErrors())), 400);
  }
  return $response;
});