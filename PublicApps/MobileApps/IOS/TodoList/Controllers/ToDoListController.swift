//
//  ToDoListController.swift
//  TodoList
//
//  Created by hazel on 2021-08-30.
//

import UIKit

class ToDoListController: UIViewController {
    
    private var returnButton = UIButton()
    private var gradientLayer = CAGradientLayer()
    
    override func viewDidLoad() {
        super.viewDidLoad()

        view.layer.addSublayer(gradientLayer)
        gradientLayer.colors = [UIColor(hue: 0.3, saturation: 0.4, brightness: 0.9, alpha: 1).cgColor, UIColor(hue: 0.44, saturation: 0.19, brightness: 0.2, alpha: 0.6).cgColor]
        
        //configureReturnButton()
       
    }
    
   
    
    override func viewDidLayoutSubviews() {
        super.viewDidLayoutSubviews()
        gradientLayer.frame = view.bounds
        
    }
    @objc
    private func didTapButton(){
        dismiss(animated: true, completion: nil)
    }
    
    func configureReturnButton(){
        view.addSubview(returnButton)
       
        returnButton.backgroundColor =
            UIColor(hue: 0.3, saturation: 0.9, brightness: 0.33, alpha: 0.53)
        
        returnButton.clipsToBounds = true
        returnButton.layer.cornerRadius = 16
        returnButton.layer.shadowRadius = 23
        returnButton.setTitle("<", for: .normal)
        returnButton.addTarget(self, action: #selector(didTapButton), for: .touchUpInside)
        
        setReturnButtonConstraints()
    }
    
    func setReturnButtonConstraints(){
        returnButton.translatesAutoresizingMaskIntoConstraints = false
        
        returnButton.topAnchor.constraint(equalTo: view.safeAreaLayoutGuide.topAnchor, constant: 10).isActive = true
        
        returnButton.leadingAnchor.constraint(equalTo: view.safeAreaLayoutGuide.leadingAnchor, constant: 0.5).isActive = true
        
        returnButton.trailingAnchor.constraint(equalTo: view.safeAreaLayoutGuide.trailingAnchor, constant: -0.5).isActive = true
        }
}

