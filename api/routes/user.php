<?php

use Illuminate\Database\Capsule\Manager as Capsule;

$app->group('/user', function() use ($app) {

  /**
   * @api {get} /user/ Récupération des users.
   * @apiName GetUsers
   * @apiGroup User
   *
   * @apiSuccess {String} login Nom d'user.
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *
   * @apiErrorExample Error-Response:
   *     HTTP/1.1 404 Not Found
   *     {
   *       "error": code error
   *     }
   */
  $app->get('/', function($request, $response) {
    try {
      $response = $response->withJson(Capsule::table('USER')->get());
    } catch(Illuminate\Database\QueryException $e) {
      $response = $response->withJson(array ("status"  => array("error" => $e->getMessage())), 400);
    }
    return $response;
  });

  /**
   * @api {get} /user/login/:login Récupération d'un user.
   * @apiName GetUser
   * @apiGroup User
   *
   * @apiSuccess {String} login Nom d'user.
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *
   * @apiErrorExample Error-Response:
   *     HTTP/1.1 404 Not Found
   *     {
   *       "error": code error
   *     }
   */
  $app->get('/login/{login}', function($request, $response, $login){
    try {
      $response = $response->withJson(Capsule::table('USER')->where('login', $login)->first());
    } catch(Illuminate\Database\QueryException $e) {
      $response = $response->withJson(array ("status"  => array("error" => $e->getMessage())), 400);
    }
    return $response;
  });

  /**
   * @api {post} /user/ Ajout d'un nouveau user. Sécuriser Admin.
   * @apiName PostUser
   * @apiGroup User
   *
   * @apiParam {String} login Nom d'user.
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "succes": "ok"
   *     }
   *
   * @apiErrorExample Error-Response:
   *     HTTP/1.1 404 Not Found
   *     {
   *       "error": code error
   *     }
   */
  $app->post('/',function ($request, $response)  use ($app) {
    if(isset($_SERVER['PHP_AUTH_USER']) && isset($_SERVER['HTTP_AUTHORIZATION'])){
      $user = checkAuth($_SERVER['PHP_AUTH_USER'], $_SERVER['HTTP_AUTHORIZATION']);
      if($user && $user->access == 1){
        try {
          Capsule::table('USER')->insert($request->getParsedBody());
          $response = $response->withJson(array ("status"  => array("success" => "ok")), 200);
        } catch(Illuminate\Database\QueryException $e) {
          $response = $response->withJson(array ("status"  => array("error" => $e->getMessage())), 400);
        }
      }else{
        $response = $response->withJson(array ("status"  => array("error" => "connexion")), 400);
      }
    }else{
      $response = $response->withJson(array ("status"  => array("error" => "connexion")), 400);
    }
    return $response;
  });

  /**
   * @api {put} /user/:login Modification d'un user. Sécuriser Admin.
   * @apiName PutUser
   * @apiGroup User
   *
   * @apiParam {String} login Nom d'user.
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "succes": "ok"
   *     }
   *
   * @apiErrorExample Error-Response:
   *     HTTP/1.1 404 Not Found
   *     {
   *       "error": code error
   *     }
   */
  $app->put('/{login}', function ($request, $response, $login) use ($app){
    if(isset($_SERVER['PHP_AUTH_USER']) && isset($_SERVER['HTTP_AUTHORIZATION'])){
      $user = checkAuth($_SERVER['PHP_AUTH_USER'], $_SERVER['HTTP_AUTHORIZATION']);
      if($user && $user->access == 1){
        try {
          Capsule::table('USER')->where('login',$login)->update($request->getParsedBody());
          $response = $response->withJson(array ("status"  => array("success" => "ok")), 200);
        } catch(Illuminate\Database\QueryException $e) {
          $response = $response->withJson(array ("status"  => array("error" => $e->getMessage())), 400);
        }
      }else{
        $response = $response->withJson(array ("status"  => array("error" => "connexion")), 400);
      }
    }else{
      $response = $response->withJson(array ("status"  => array("error" => "connexion")), 400);
    }
    return $response;
  });

  /**
   * @api {delete} /user/:login Suppression d'un user. Sécuriser Mobile Admin.
   * @apiName DeleteUser
   * @apiGroup User
   *
   * @apiParam {String} login Nom d'user.
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "succes": "ok"
   *     }
   *
   * @apiErrorExample Error-Response:
   *     HTTP/1.1 404 Not Found
   *     {
   *       "error": code error
   *     }
   */
  $app->delete('/{login}',function ($request, $response, $login) {
    if(isset($_SERVER['PHP_AUTH_USER']) && isset($_SERVER['HTTP_AUTHORIZATION'])){
      $user = checkAuth($_SERVER['PHP_AUTH_USER'], $_SERVER['HTTP_AUTHORIZATION']);
      if($user && ($user->access == 1 || $user->access == 2)){
        try {
          Capsule::table('COMMAND')->where('login',$login)->delete();
          $response = $response->withJson(array ("status"  => array("success" => "ok")), 200);
        } catch(Illuminate\Database\QueryException $e) {
          $response = $response->withJson(array ("status"  => array("error" => $e->getMessage())), 400);
        }
      }else{
        $response = $response->withJson(array ("status"  => array("error" => "connexion")), 400);
      }
    }else{
      $response = $response->withJson(array ("status"  => array("error" => "connexion")), 400);
    }
    return $response;
  });
});