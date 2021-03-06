//
//  ViewController.swift
//  FoyerISEN
//
//  Created by Renald Morice on 25/02/2016.
//  Copyright © 2016 Digital Design. All rights reserved.
//

import UIKit


class ViewController: UIViewController, UITextFieldDelegate,  NetworkManagerDelegate {
    
    //ALERT
    var alertController = UIAlertController(title: "", message: "", preferredStyle: UIAlertControllerStyle.Alert)
    
    //Network
    var networkManager = NetworkManager.sharedInstance

    @IBOutlet weak var userTextField: UITextField!
    @IBOutlet weak var passwdTextField: UITextField!
    //@IBOutlet weak var label: UILabel!
    @IBOutlet weak var indicator: UIActivityIndicatorView!
    @IBOutlet weak var connectionButton: UIButton!
    @IBOutlet weak var fieldView: UIView!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        //Ajout de l'action (bouton OK) à l'alert
        alertController.addAction(UIAlertAction(title: "OK", style: UIAlertActionStyle.Cancel,handler: nil))
        
        //Looks for single or multiple taps.
        let tap: UITapGestureRecognizer = UITapGestureRecognizer(target: self, action: "dismissKeyboard")
        view.addGestureRecognizer(tap)
        
        userTextField.delegate = self
        passwdTextField.delegate = self
        indicator.hidden = true
        
        fieldView.layer.cornerRadius = 5
        connectionButton.layer.cornerRadius = 2
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    // Bouton de connexion appuyé :
    //-----------------------------
    @IBAction func connectionButtonTouched(sender: AnyObject) {
        
        connectionButton.hidden = true
        indicator.hidden = false
        indicator.startAnimating()
        
        let postParams : [String : String] = [
            "username": userTextField.text!
            , "password": passwdTextField.text!
        ]
        networkManager.request(delegate : self, urlString: "http://foyer.p4ul.tk/api/cas/", requestType: "POST", postParams: postParams)
    }
    
    //Calls this function when the tap is recognized.
    func dismissKeyboard() {
        view.endEditing(true)
    }
    
    //----------------------------
    //MARK: NetworkManagerDelegate
    //----------------------------
    
    
    // Réponse serveur :
    //------------------
    func didReceiveResponse(response : String, tabData: NSArray) {
        
        print("reponse : \(response)")
        print(" data : \(tabData.description)")
        
        for item in tabData {

            // Interpretation retour connexion au CAS
            if let data = item as? NSDictionary {
                
                if let tabStatus : NSDictionary = data["status"] as? NSDictionary {
                    
                    if let errorString : String = tabStatus["error"] as? String {

                        alertController.title = errorString
                        alertController.message = ""
                        
                    } else {
                        
                        if ( tabStatus["key"] == nil || tabStatus["username"] == nil){
                            
                            alertController.title = ""
                            alertController.message = "Pas d'erreur d'ID mais soit l'object JSON Key ou Username est nul !"
                            
                        } else{
                            networkManager.authBasicKey = tabStatus["key"] as? String
                            networkManager.username = tabStatus["username"] as? String
                            
                            alertController.title = "Connexion établie"
                            alertController.message = ""
                        }
                    }
                    
                }
            }
            
            
        }
        //Une fois que la réponse est finie d'être traitée
        indicator.stopAnimating()
        indicator.hidden = true
        connectionButton.hidden = false
        
        //Affichage de l'alerte
        presentViewController(alertController, animated: true, completion: nil)
        
    }
    
    // Probème de connexion :
    //-----------------------
    func didFailToReceiveResponse(strError : String) {
        
        alertController.title = "UIViewController : "
        alertController.message = strError
        //Affichage de l'alerte
        presentViewController(alertController, animated: true, completion: nil)
    }
    
    //-------------------------
    //MARK: UITextFieldDelegate
    //-------------------------
    
    func textFieldShouldReturn(textField: UITextField) -> Bool {
        textField.resignFirstResponder()
        return true;
    }
    
    
}

