define({ "api": [
  {
    "type": "delete",
    "url": "/command/:id_commande",
    "title": "Suppression d'une commande.",
    "name": "DeleteCommand",
    "group": "Command",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id_commande",
            "description": "<p>ID de la commande.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"succes\": \"ok\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": code error\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/command.php",
    "groupTitle": "Command"
  },
  {
    "type": "get",
    "url": "/command/",
    "title": "Récupération des commandes.",
    "name": "GetCommands",
    "group": "Command",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id_commande",
            "description": "<p>ID de la commande.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "login",
            "description": "<p>Login de la commande de l'utilisateur.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "state",
            "description": "<p>Etat de la commande.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "time",
            "description": "<p>Date de la prise de commande.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>Date de la commande.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "periode_debut",
            "description": "<p>Heure de début de la commande.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "periode_fin",
            "description": "<p>Heure de fin de la commande.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "product",
            "description": "<p>+quantity Produit de la commande avec la quantité.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>Total de la commande.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": code error\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/command.php",
    "groupTitle": "Command"
  },
  {
    "type": "get",
    "url": "/command/id_commande/:id_commande",
    "title": "Récupération d'un commande par son ID.",
    "name": "GetCommandsByIdCommand",
    "group": "Command",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Commande unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id_commande",
            "description": "<p>ID du commande.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "login",
            "description": "<p>Login de la commande de l'utilisateur.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "state",
            "description": "<p>Etat de la commande.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "time",
            "description": "<p>Date de la prise de commande.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>Date de la commande.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "periode_debut",
            "description": "<p>Heure de début de la commande.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "periode_fin",
            "description": "<p>Heure de fin de la commande.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "product",
            "description": "<p>+quantity Produit de la commande avec la quantité.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>Total de la commande.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": code error\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/command.php",
    "groupTitle": "Command"
  },
  {
    "type": "get",
    "url": "/command/login/:login",
    "title": "Récupération d'un commande par son login.",
    "name": "GetCommandsByLogin",
    "group": "Command",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>Login du user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id_commande",
            "description": "<p>ID du commande.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "login",
            "description": "<p>Login de la commande de l'utilisateur.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "state",
            "description": "<p>Etat de la commande.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "time",
            "description": "<p>Date de la prise de commande.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>Date de la commande.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "periode_debut",
            "description": "<p>Heure de début de la commande.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "periode_fin",
            "description": "<p>Heure de fin de la commande.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "product",
            "description": "<p>+quantity Produit de la commande avec la quantité.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>Total de la commande.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": code error\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/command.php",
    "groupTitle": "Command"
  },
  {
    "type": "get",
    "url": "/command/state/:state",
    "title": "Récupération des commandes en fonction de son état.",
    "name": "GetCommandsByState",
    "group": "Command",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "state",
            "description": "<p>Etat de la commande.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id_commande",
            "description": "<p>ID du commande.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "login",
            "description": "<p>Login de la commande de l'utilisateur.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "state",
            "description": "<p>Etat de la commande.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "time",
            "description": "<p>Date de la prise de commande.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>Date de la commande.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "periode_debut",
            "description": "<p>Heure de début de la commande.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "periode_fin",
            "description": "<p>Heure de fin de la commande.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": code error\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/command.php",
    "groupTitle": "Command"
  },
  {
    "type": "get",
    "url": "/command/stats/",
    "title": "Récupération les statistiques des commandes.",
    "name": "GetCommandsStats",
    "group": "Command",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>Date, année plus mois des commandes.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "nb_command",
            "description": "<p>Nombre de commande sur une journée.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": code error\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/command.php",
    "groupTitle": "Command"
  },
  {
    "type": "post",
    "url": "/command/",
    "title": "Ajout d'une commande.",
    "name": "PostCommand",
    "group": "Command",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "login",
            "description": "<p>Login de la commande de l'utilisateur.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "state",
            "description": "<p>Etat de la commande.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "periode_debut",
            "description": "<p>Heure de début de la commande.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "periode_fin",
            "description": "<p>Heure de fin de la commande.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>Date de la commande.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "product",
            "description": "<p>Tableau contenant les produits : l'id du produit et la quantité en object.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"succes\": \"ok\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": code error\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/command.php",
    "groupTitle": "Command"
  },
  {
    "type": "put",
    "url": "/command/:id_commande",
    "title": "Modification d'une commande.",
    "name": "PutCommand",
    "group": "Command",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id_commande",
            "description": "<p>ID de la commande.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "login",
            "description": "<p>Login de la commande de l'utilisateur.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "state",
            "description": "<p>Etat de la commande.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "periode_debut",
            "description": "<p>Heure de début de la commande.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "periode_fin",
            "description": "<p>Heure de fin de la commande.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>Date de la commande.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "product",
            "description": "<p>Tableau contenant les produits : id_product et quantity, en objet ou dans un tableau.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"succes\": \"ok\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": code error\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/command.php",
    "groupTitle": "Command"
  },
  {
    "type": "put",
    "url": "/command/:id_commande/state/:id_state",
    "title": "Modification d'état d'une commande.",
    "name": "PutCommandByIdAndState",
    "group": "Command",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id_commande",
            "description": "<p>ID de la commande.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id_state",
            "description": "<p>ID de l'état de la commande.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"succes\": \"ok\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": code error\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/command.php",
    "groupTitle": "Command"
  },
  {
    "type": "delete",
    "url": "/notification/:id_notification",
    "title": "Suppression d'une notification.",
    "name": "DeleteNotification",
    "group": "Notification",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id_notification",
            "description": "<p>ID de la notification.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"succes\": \"ok\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": code error\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/notification.php",
    "groupTitle": "Notification"
  },
  {
    "type": "delete",
    "url": "/notification/login/:login",
    "title": "Suppression des notifications d'un utilisateur.",
    "name": "DeleteNotificationByLogin",
    "group": "Notification",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "login",
            "description": "<p>ID login.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"succes\": \"ok\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": code error\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/notification.php",
    "groupTitle": "Notification"
  },
  {
    "type": "delete",
    "url": "/notification/method/:id_method",
    "title": "Suppression de notifications en fonction de la methode.",
    "name": "DeleteNotificationByMethod",
    "group": "Notification",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id_method",
            "description": "<p>ID methode.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"succes\": \"ok\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": code error\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/notification.php",
    "groupTitle": "Notification"
  },
  {
    "type": "get",
    "url": "/notification/id_notification/:id_notification",
    "title": "Récupération d'un notification par son ID.",
    "name": "GetNotificationById",
    "group": "Notification",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id_notification",
            "description": "<p>ID de la notification.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id_commande",
            "description": "<p>ID de la commande.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "notification",
            "description": "<p>Message de la notification.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "login",
            "description": "<p>Login de la personne qui va recevoir la notification.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "time",
            "description": "<p>Date de la commande.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "method",
            "description": "<p>Méthode d'envoi de la notification.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": code error\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/notification.php",
    "groupTitle": "Notification"
  },
  {
    "type": "get",
    "url": "/notification/login/:login",
    "title": "Récupération des notifications par login (broadcast compris).",
    "name": "GetNotificationByLogin",
    "group": "Notification",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id_notification",
            "description": "<p>ID de la notification.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id_commande",
            "description": "<p>ID de la commande.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "notification",
            "description": "<p>Message de la notification.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "login",
            "description": "<p>Login de la personne qui va recevoir la notification.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "time",
            "description": "<p>Date de la commande.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "method",
            "description": "<p>Méthode d'envoi de la notification.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": code error\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/notification.php",
    "groupTitle": "Notification"
  },
  {
    "type": "get",
    "url": "/notification/",
    "title": "Récupération des notifications.",
    "name": "GetNotifications",
    "group": "Notification",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id_notification",
            "description": "<p>ID de la notification.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id_commande",
            "description": "<p>ID de la commande.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "notification",
            "description": "<p>Message de la notification.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "login",
            "description": "<p>Login de la personne qui va recevoir la notification.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "time",
            "description": "<p>Date de la commande.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "method",
            "description": "<p>Méthode d'envoi de la notification.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": code error\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/notification.php",
    "groupTitle": "Notification"
  },
  {
    "type": "post",
    "url": "/notification/",
    "title": "Ajout d'une notification.",
    "name": "PostNotification",
    "group": "Notification",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id_commande",
            "description": "<p>ID de la commande.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "notification",
            "description": "<p>Message de la notification.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "login",
            "description": "<p>Login de la personne qui va recevoir la notification.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "method",
            "description": "<p>Méthode d'envoi de la notification.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"succes\": \"ok\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": code error\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/notification.php",
    "groupTitle": "Notification"
  },
  {
    "type": "put",
    "url": "/notification/:id_notification",
    "title": "Modification d'une notification.",
    "name": "PutNotification",
    "group": "Notification",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id_notification",
            "description": "<p>ID de la notification.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id_commande",
            "description": "<p>ID de la commande.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "notification",
            "description": "<p>Message de la notification.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "login",
            "description": "<p>Login de la personne qui va recevoir la notification.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "method",
            "description": "<p>Méthode d'envoi de la notification.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"succes\": \"ok\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": code error\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/notification.php",
    "groupTitle": "Notification"
  },
  {
    "type": "get",
    "url": "/banniere/",
    "title": "Récupération de l'url de la bannière.",
    "name": "GetBanniere",
    "group": "Others",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>Url de la bannière dans /files/mobile/.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/other.php",
    "groupTitle": "Others"
  },
  {
    "type": "get",
    "url": "/login/",
    "title": "Check la connexion à l'interface admin.",
    "name": "GetCheckConnexion",
    "group": "Others",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "etat",
            "description": "<p>Etat de connexion.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "login",
            "description": "<p>Login de connexion.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "uid",
            "description": "<p>ID de connexion.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/other.php",
    "groupTitle": "Others"
  },
  {
    "type": "get",
    "url": "/date/",
    "title": "Obtention de la date du serveur.",
    "name": "GetDate",
    "group": "Others",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>Date du serveur, &quot;d m Y H:i&quot;.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/other.php",
    "groupTitle": "Others"
  },
  {
    "type": "get",
    "url": "/logout/",
    "title": "Déconnexion de l'interface admin.",
    "name": "GetDeconnexion",
    "group": "Others",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "etat",
            "description": "<p>Etat de la déconnexion.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/other.php",
    "groupTitle": "Others"
  },
  {
    "type": "post",
    "url": "/banniere/",
    "title": "Modifier la bannière mobile.",
    "name": "PostBanniere",
    "group": "Others",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "file",
            "description": "<p>Image de la bannière.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"succes\": \"fichier upload\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": code error\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/other.php",
    "groupTitle": "Others"
  },
  {
    "type": "post",
    "url": "/login/",
    "title": "Connexion à l'interface admin.",
    "name": "PostConnexion",
    "group": "Others",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "login",
            "description": "<p>Login club.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Mot de passe.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "etat",
            "description": "<p>Etat de connexion.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/other.php",
    "groupTitle": "Others"
  },
  {
    "type": "delete",
    "url": "/product/:id_product",
    "title": "Suppression d'un produit.",
    "name": "DeleteProduct",
    "group": "Product",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id_product",
            "description": "<p>ID du produit.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"succes\": \"ok\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": code error\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/product.php",
    "groupTitle": "Product"
  },
  {
    "type": "get",
    "url": "/product/:id_product",
    "title": "Récupération des produits en fonction de son état.",
    "name": "GetProductByAvailable",
    "group": "Product",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "available",
            "description": "<p>Product state.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id_product",
            "description": "<p>ID du produit.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nom du produit.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": "<p>Prix du produit.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description du produit.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "available",
            "description": "<p>Disponibilité du produit.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>Date de création du produit.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "hash_image",
            "description": "<p>Hash de l'image pour check le cache.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Nom fichier de l'image.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": code error\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/product.php",
    "groupTitle": "Product"
  },
  {
    "type": "get",
    "url": "/product/:id_product",
    "title": "Récupération d'un produit en fonction de son ID.",
    "name": "GetProductByIdProduct",
    "group": "Product",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Product unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id_product",
            "description": "<p>ID du produit.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nom du produit.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": "<p>Prix du produit.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description du produit.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "available",
            "description": "<p>Disponibilité du produit.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>Date de création du produit.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Nom fichier de l'image.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": code error\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/product.php",
    "groupTitle": "Product"
  },
  {
    "type": "get",
    "url": "/product/",
    "title": "Récupération des produits.",
    "name": "GetProducts",
    "group": "Product",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id_product",
            "description": "<p>ID du produit.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nom du produit.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": "<p>Prix du produit.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description du produit.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "available",
            "description": "<p>Disponibilité du produit.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>Date de création du produit.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Nom fichier de l'image.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": code error\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/product.php",
    "groupTitle": "Product"
  },
  {
    "type": "post",
    "url": "/product/",
    "title": "Ajout d'un nouveau produit.",
    "name": "PostProduct",
    "group": "Product",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nom du produit.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": "<p>Prix du produit.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description du produit.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "available",
            "description": "<p>Disponibilité du produit.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"succes\": \"ok\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": code error\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/product.php",
    "groupTitle": "Product"
  },
  {
    "type": "post",
    "url": "/product/img/:id_product",
    "title": "Ajouter une image à un produit.",
    "name": "PostProductImg",
    "group": "Product",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id_product",
            "description": "<p>ID du produit.</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "file",
            "description": "<p>Image du produit.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"succes\": \"fichier upload\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": code error\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/product.php",
    "groupTitle": "Product"
  },
  {
    "type": "put",
    "url": "/product/:id_product",
    "title": "Modification d'un produit.",
    "name": "PutProduct",
    "group": "Product",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id_product",
            "description": "<p>ID du produit.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nom du produit.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": "<p>Prix du produit.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description du produit.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "available",
            "description": "<p>Disponibilité du produit.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"succes\": \"ok\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": code error\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/product.php",
    "groupTitle": "Product"
  },
  {
    "type": "delete",
    "url": "/user/:login",
    "title": "Suppression d'un user.",
    "name": "DeleteUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "login",
            "description": "<p>Nom d'user.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"succes\": \"ok\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": code error\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/user.php",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user/login/:login",
    "title": "Récupération d'un user.",
    "name": "GetUser",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "login",
            "description": "<p>Nom d'user.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": code error\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/user.php",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user/",
    "title": "Récupération des users.",
    "name": "GetUsers",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "login",
            "description": "<p>Nom d'user.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": code error\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/user.php",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/",
    "title": "Ajout d'un nouveau user.",
    "name": "PostUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "login",
            "description": "<p>Nom d'user.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"succes\": \"ok\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": code error\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/user.php",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/user/:login",
    "title": "Modification d'un user.",
    "name": "PutUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "login",
            "description": "<p>Nom d'user.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"succes\": \"ok\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": code error\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/user.php",
    "groupTitle": "User"
  }
] });