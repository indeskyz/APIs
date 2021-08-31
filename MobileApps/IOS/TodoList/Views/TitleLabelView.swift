//
//  TitleLabelView.swift
//  TodoList
//
//  Created by hazel on 2021-08-30.
//

import UIKit

class TitleLabelView: UIViewController {
    private var titleLabel = UILabel()
    
    func configure(){
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
        titleLabel.topAnchor.constraint(equalTo: view.safeAreaLayoutGuide.topAnchor, constant: 20).isActive = true
        titleLabel.leadingAnchor.constraint(equalTo: view.safeAreaLayoutGuide.leadingAnchor, constant: 20).isActive = true
        titleLabel.trailingAnchor.constraint(equalTo: view.safeAreaLayoutGuide.trailingAnchor, constant: -20).isActive = true
    }
}
