//
//  ViewController.swift
//  TodoList
//
//  Created by hazel on 2021-08-30.
//

import UIKit

class ViewController: UIViewController {
    var titleLabel = UILabel()
    var stackView = UIStackView()
    let gradientLayer = CAGradientLayer()
    lazy var margins = view.layoutMarginsGuide
    
    override func viewDidLoad() {
        super.viewDidLoad()
        gradientLayer.colors =
            [UIColor(hue:0.575, saturation: 0.88, brightness: 0.77, alpha: 1.0).cgColor, UIColor(hue: 0.755,saturation: 0.81, brightness: 0.81, alpha: 1.0).cgColor]
        view.layer.addSublayer(gradientLayer)
        configureLabel()
        configureStackView()
        //navigationController?.isNavigationBarHidden = true
        
    }
    
    override func viewDidLayoutSubviews() {
        super.viewDidLayoutSubviews()
        gradientLayer.frame = view.bounds
    }
    
    func configureStackView(){
        view.addSubview(stackView)
        stackView.axis = .vertical
        stackView.distribution = .fillEqually
        stackView.spacing = 45
        addButtonsToStackView()
        setStackViewConstrains()
    }
    
    func addButtonsToStackView(){
      let viewTodosButton =
            GradientButton(colors: [UIColor.systemBlue.cgColor, UIColor.systemGray2.cgColor], titleColor: UIColor.lightText, fontSize: 23, radius: 30, title: "View Todos", forTitle: .normal)
        
        let callAPIButton =
            GradientButton(colors: [UIColor.systemGray.cgColor, UIColor.systemBlue.cgColor], titleColor: UIColor.lightText, fontSize: 23, radius: 30, title: "Get Todos From API", forTitle: .normal)
        
        viewTodosButton.addTarget(self, action: #selector(didTapButton), for: .touchUpInside)
        
        callAPIButton.addTarget(self, action: #selector(didTapAPIButton), for: .touchUpInside)
        
        
        stackView.addArrangedSubview(viewTodosButton)
        stackView.addArrangedSubview(callAPIButton)
        
    }
    
    
    @objc
    private func didTapButton(){
        let toDoContoller = ToDoListController()
        /*let navVc = UINavigationController(rootViewController: toDoContoller)
        navVc.modalPresentationStyle = .fullScreen
        present(navVc, animated: true)*/
        navigationController?.pushViewController(toDoContoller, animated: true)
    }
    
    @objc
    private func didTapAPIButton(){
        let toDoAPIController = APIViewController()
        //let nav = UINavigationController(rootViewController: toDoAPIController)
        toDoAPIController.modalTransitionStyle = .flipHorizontal
        toDoAPIController.modalPresentationStyle = .fullScreen
        present(toDoAPIController, animated: true)
        
    }
    
    func setStackViewConstrains(){
        stackView.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
        stackView.centerXAnchor.constraint(equalTo: margins.centerXAnchor),
        stackView.centerYAnchor.constraint(equalTo: margins.centerYAnchor),
        stackView.heightAnchor.constraint(equalToConstant: 200),
        stackView.widthAnchor.constraint(equalToConstant: 250)
        ])
    }
    
    func configureLabel(){
        view.addSubview(titleLabel)
        
        titleLabel.text = "To Do Application"
        titleLabel.font = UIFont.boldSystemFont(ofSize: 35)
        titleLabel.textAlignment = .center
        titleLabel.numberOfLines = 0
        titleLabel.adjustsFontSizeToFitWidth = true
        
        setTitleLabelConstraints()
    }
    
    func setTitleLabelConstraints(){
        titleLabel.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            titleLabel.topAnchor.constraint(equalTo: margins.topAnchor, constant: 30),
            titleLabel.leadingAnchor.constraint(equalTo: margins.leadingAnchor, constant: 0),
            titleLabel.trailingAnchor.constraint(equalTo: margins.trailingAnchor, constant: 0)
        ])
        
    }
}

